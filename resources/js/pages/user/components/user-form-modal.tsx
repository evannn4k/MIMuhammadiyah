"use client";

import { useForm } from "@inertiajs/react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import FormField from "@/components/form-field";
import FormFieldWrapper from "@/components/form-field-wrapper";
import type { useModalType } from "@/types/modal";
import type { User } from "@/types/user";
import { RoleName } from "@/types/role";
import { create, update } from "@/routes/dashboard/user";

type FieldConfig = ComponentProps<typeof FormField>;

interface UserFormModalProps {
    roles: RoleName[];
    modal: useModalType;
}

export default function UserFormModal({ roles, modal }: UserFormModalProps) {
    const { isOpen, closeModal } = modal;
    const isEdit = isOpen("edit");
    const data = (modal.data ?? null) as User | null;

    const initialValues: Record<string, any> = {
        name: data?.name ?? "",
        email: data?.email ?? "",
        position: data?.position ?? "",
        is_active: data?.is_active ?? false,
        role_id: data?.role_id,
        password: "",
        password_confirmation: "",
    };

    const {
        data: form,
        setData,
        post,
        put,
        processing,
        errors,
        reset,
    } = useForm(initialValues);

    const fields: FieldConfig[] = [
        {
            name: "name",
            label: "Nama",
            className: "sm:col-span-2",
            placeholder: "Nama lengkap",
        },
        {
            name: "email",
            label: "Email",
            type: "text",
            placeholder: "nama@email.com",
        },
        {
            name: "position",
            label: "Jabatan",
            placeholder: "Contoh: Kepala Sekolah, Guru, Staff",
        },
        {
            name: "role_id",
            label: "Role",
            type: "select",
            options: roles.map((role) => ({
                label: role.name,
                value: role.id,
            })),
            placeholder: "pilih role",
        },
        {
            name: "is_active",
            label: "Status akun",
            type: "checkbox",
        },
        ...(!isEdit
            ? ([
                  {
                      name: "password",
                      label: "Password",
                      type: "password",
                      placeholder: "Masukkan kata sandi",
                  },
                  {
                      name: "password_confirmation",
                      label: "Konfirmasi Password",
                      type: "password",
                      placeholder: "Masukkan konfirmasi kata sandi",
                  },
              ] as FieldConfig[])
            : []),
    ];

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        const action = isEdit && data ? update.url(data.id) : create.url();

        if (isEdit) {
            put(action, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    closeModal();
                },
            });
        } else {
            post(action, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    closeModal();
                },
            });
        }
    };

    return (
        <Dialog
            key={data?.id ?? "create"}
            open={isOpen("create") || isOpen("edit")}
            onOpenChange={(status) => {
                closeModal();
            }}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? "Edit Pengguna" : "Tambah Pengguna"}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? "Perbarui data pengguna di bawah ini."
                            : "Lengkapi data pengguna baru di bawah ini."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit}>
                    <FormFieldWrapper cols={2}>
                        {fields.map((field) => (
                            <FormField
                                key={field.name}
                                {...field}
                                value={form[field.name]}
                                onChange={(val) => setData(field.name, val)}
                                onCheckedChange={(checked) =>
                                    setData(field.name, checked)
                                }
                                error={(errors as any)[field.name]}
                            />
                        ))}
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
                                ? "Menyimpan..."
                                : isEdit
                                  ? "Simpan"
                                  : "Tambah"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
