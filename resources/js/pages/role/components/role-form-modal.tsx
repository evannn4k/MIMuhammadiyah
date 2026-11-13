import { Form } from '@inertiajs/react';
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
import { create, update } from '@/routes/dashboard/role';

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

    return (
        <Dialog
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
                <Form
                    action={isEdit ? update(modal.data.id) : create()}
                    method={isEdit ? 'put' : 'post'}
                    onFinish={() => {
                        modal.closeModal();
                    }}
                >
                    {({ errors, processing }) => (
                        <>
                            <div className="flex flex-col gap-4 pb-4">
                                {fields.map((field) => (
                                    <FormField
                                        key={field.name}
                                        {...field}
                                        defaultValue={
                                            data?.[field.name as keyof Role] as
                                                | string
                                                | undefined
                                        }
                                        error={errors[field.name]}
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
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}
