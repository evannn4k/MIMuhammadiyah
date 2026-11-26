'use client';

import { useForm } from '@inertiajs/react';
import type { ComponentProps } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import FormField from '@/components/form-field';
import type { useModalType } from '@/types/modal';
import type { Role } from '@/types/role';

type FieldConfig = ComponentProps<typeof FormField>;

const fields: FieldConfig[] = [
    { name: 'name', label: 'Nama Peran', placeholder: 'Contoh: Super Admin' },
    {
        name: 'description',
        label: 'Deskripsi',
        type: 'textarea',
        placeholder: 'Deskripsi singkat peran...',
    },
];

interface RoleFormModalProps {
    modal: useModalType;
}

export default function RoleFormModal({ modal }: RoleFormModalProps) {
    const { isOpen, closeModal } = modal;
    const isEdit = isOpen('edit');
    const data = (modal.data ?? null) as Role | null;

    const { data: form, setData, post, put, processing, errors, reset } = useForm({
        name: data?.name ?? '',
        description: data?.description ?? '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const actionUrl = isEdit && data ? `/dashboard/role/${data.id}` : '/dashboard/role';

        if (isEdit) {
            put(actionUrl, {
                onBefore: () => false,
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => closeModal(),
            });
        } else {
            post(actionUrl, {
                onBefore: () => false,
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => closeModal(),
            });
        }
        closeModal();
    };

    return (
        <Dialog
            key={data?.id ?? 'create'}
            open={isOpen('create') || isOpen('edit')}
            onOpenChange={closeModal}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? 'Edit Peran' : 'Tambah Peran Baru'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data peran di bawah ini.'
                            : 'Lengkapi data peran baru di bawah ini.'}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="flex flex-col gap-4 pb-4">
                        {fields.map((field) => (
                            <FormField
                                key={field.name}
                                {...field}
                                value={form[field.name as keyof typeof form]}
                                onChange={(val) => setData(field.name as any, val)}
                                error={(errors as any)[field.name]}
                            />
                        ))}
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={closeModal}
                        >
                            Batal
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing
                                ? 'Menyimpan...'
                                : isEdit
                                  ? 'Simpan'
                                  : 'Tambah'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}