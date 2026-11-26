'use client';

import { Form } from '@inertiajs/react';
import type { ComponentProps } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription,
} from '@/components/ui/dialog';
import FormField from '@/components/form-field';
import FormFieldWrapper from '@/components/form-field-wrapper';
import type { useModalType } from '@/types/modal';
import type { Staff } from '@/types/staff';

type FieldConfig = ComponentProps<typeof FormField>;

interface StaffFormModalProps {
    modal: useModalType;
}

export default function StaffFormModal({ modal }: StaffFormModalProps) {
    const { isOpen, closeModal } = modal;
    const data = (modal.data ?? null) as Staff | null;
    const isEdit = isOpen('edit');

    const fields: FieldConfig[] = [
        {
            name: 'name',
            label: 'Nama Lengkap (Gelar)',
            className: 'sm:col-span-2',
            placeholder: 'Dr. Hj. Siti Rohmah, M.Pd.',
        },
        {
            name: 'email',
            label: 'Email Sekolah',
            type: 'text',
            placeholder: 'siti.rohmah@sman1prestasi.sch.id',
        },
        {
            name: 'nip',
            label: 'NIP / NIPPPK',
            placeholder: '19710418 199702 2 001',
        },
        {
            name: 'nuptk',
            label: 'NUPTK',
            placeholder: '9452749651300022',
        },
        {
            name: 'group',
            label: 'Kelompok',
            type: 'select',
            options: [
                { label: 'Leadership (Pimpinan)', value: 'Leadership' },
                { label: 'Teacher (Tenaga Pendidik)', value: 'Teacher' },
                { label: 'Staff (Tenaga Kependidikan)', value: 'Staff (GTK)' },
            ],
            placeholder: 'Pilih kelompok',
        },
        {
            name: 'position',
            label: 'Jabatan / Posisi',
            placeholder: 'Kepala Sekolah',
        },
        {
            name: 'subject',
            label: 'Bidang Studi / Mata Pelajaran',
            type: 'select',
            options: [
                { label: 'Matematika', value: 'Matematika' },
                { label: 'Informatika & Robotika', value: 'Informatika & Robotika' },
                { label: 'Matematika Peminatan', value: 'Matematika Peminatan' },
                { label: 'Pendidikan Agama & Budi Pekerti', value: 'Pendidikan Agama & Budi Pekerti' },
                { label: 'Manajemen Pendidikan', value: 'Manajemen Pendidikan' },
            ],
            placeholder: 'Pilih bidang studi',
        },
        {
            name: 'education',
            label: 'Pendidikan Terakhir',
            placeholder: 'S3 Manajemen Pendidikan',
        },
        {
            name: 'education_institution',
            label: 'Institusi Pendidikan',
            placeholder: 'Universitas Negeri Jakarta (2018)',
        },
        {
            name: 'status',
            label: 'Status Portal',
            type: 'select',
            options: [
                { label: 'Aktif Tampil (Publik)', value: 'active' },
                { label: 'Disembunyikan', value: 'hidden' },
                { label: 'Cuti / Mutasi', value: 'on_leave' },
            ],
            placeholder: 'Pilih status',
        },
    ];

    return (
        <Dialog open={isOpen('create') || isOpen('edit')} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? 'Edit Data Pendidik / Staf' : 'Tambah Pendidik / Staf Baru'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data guru dan staf di bawah ini.'
                            : 'Lengkapi data guru dan staf baru di bawah ini.'}
                    </DialogDescription>
                </DialogHeader>
                <Form
                    action="#"
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
                                    {fields.map((field) => (
                                        <FormField
                                            key={field.name}
                                            {...field}
                                            defaultValue={data?.[field.name as keyof Staff]}
                                            error={errors[field.name]}
                                        />
                                    ))}
                                </FormFieldWrapper>
                                <DialogFooter>
                                    <Button type="button" variant="outline" onClick={closeModal}>
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
                        );
                    }}
                </Form>
            </DialogContent>
        </Dialog>
    );
}