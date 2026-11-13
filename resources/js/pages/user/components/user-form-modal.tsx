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
import FormFieldWrapper from '@/components/form-field-wrapper';
import type { useModalType } from '@/types/modal';
import type { User } from '@/types/user';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Role, RoleName } from '@/types/role';
import { create, update } from '@/routes/dashboard/user';

type FieldConfig = ComponentProps<typeof FormField>;

interface UserFormModalProps {
    roles: RoleName[];
    modal: useModalType;
}

export default function UserFormModal({ roles, modal }: UserFormModalProps) {
    const { isOpen, closeModal } = modal;
    const data = (modal.data ?? null) as User | null;
    const isEdit = isOpen('edit');

    console.log(data)

    const fields: FieldConfig[] = [
        {
            name: 'name', label: 'Nama',
            className: 'sm:col-span-2',
            placeholder: 'Nama lengkap'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'nama@email.com',
        },
        {
            name: 'position',
            label: 'Jabatan',
            placeholder: 'Contoh: Kepala Sekolah, Guru, Staff',
        },
        {
            name: 'is_active',
            label: 'Status akun',
            type: 'checkbox',
        },
        {
            name: 'role_id',
            label: 'Role',
            type: 'select',
            options: roles.map((role) => ({ label: role.name, value: role.id })),
            placeholder: 'pilih role',
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Masukkan kata sandi',
        },
        {
            name: 'password_confirmation',
            label: 'Konfirmasi Password',
            type: 'password',
            placeholder: 'Masukkan konfirmasi kata sandi',
        },
    ];

    return (
        <Dialog
            open={isOpen('create') || isOpen('edit')}
            onOpenChange={closeModal}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? 'Edit Pengguna' : 'Tambah Pengguna'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data pengguna di bawah ini.'
                            : 'Lengkapi data pengguna baru di bawah ini.'}
                    </DialogDescription>
                </DialogHeader>
                <Form
                    action={isEdit ? update(modal.data.id) : create()}
                    method={isEdit ? 'put' : 'post'}
                    options={{
                        preserveScroll: true,
                        preserveState: true,
                    }}
                    onSuccess={() => {
                        closeModal();
                    }}
                    resetOnSuccess
                >
                    {({ errors, processing }) => {
                        return (
                            <>
                                <FormFieldWrapper cols={2}>
                                    {fields.map((field) => {
                                        if (['password', 'password_confirmation'].includes(field.name) && isEdit) {
                                            return null;
                                        }

                                        console.log(data?.[field.name])

                                        return (
                                            <FormField
                                                key={field.name}
                                                {...field}
                                                defaultValue={
                                                    data?.[field.name]
                                                }
                                                error={errors[field.name]}
                                            />
                                        );
                                    })}
                                </FormFieldWrapper>
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
                        )
                    }}
                </Form>
            </DialogContent>
        </Dialog >
    );
}
