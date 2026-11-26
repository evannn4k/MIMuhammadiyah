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
import type { Facility } from '@/types/facility';

type FieldConfig = ComponentProps<typeof FormField>;

interface FacilityFormModalProps {
    modal: useModalType;
}

export default function FacilityFormModal({ modal }: FacilityFormModalProps) {
    const { isOpen, closeModal } = modal;
    const data = (modal.data ?? null) as Facility | null;
    const isEdit = isOpen('edit');

    const fields: FieldConfig[] = [
        {
            name: 'name',
            label: 'Nama Fasilitas',
            className: 'sm:col-span-2',
            placeholder: 'Laboratorium Komputer & AI',
        },
        {
            name: 'slug',
            label: 'Slug URL',
            placeholder: '/fasilitas/lab-komputer-ai',
        },
        {
            name: 'description',
            label: 'Deskripsi & Spesifikasi',
            type: 'textarea',
            placeholder: 'Deskripsi lengkap fasilitas...',
        },
        {
            name: 'image_url',
            label: 'URL Gambar / Thumbnail',
            placeholder: 'https://...',
        },
        {
            name: 'capacity',
            label: 'Kapasitas',
            type: 'number',
            placeholder: '40',
        },
        {
            name: 'capacity_label',
            label: 'Label Kapasitas',
            placeholder: '40 Siswa',
        },
        {
            name: 'condition',
            label: 'Kondisi Fisik',
            type: 'select',
            options: [
                { label: 'Baik', value: 'good' },
                { label: 'Cukup', value: 'fair' },
                { label: 'Perlu Perbaikan', value: 'repair' },
            ],
            placeholder: 'Pilih kondisi',
        },
        {
            name: 'status',
            label: 'Status',
            type: 'select',
            options: [
                { label: 'Aktif', value: 'active' },
                { label: 'Tidak Aktif', value: 'inactive' },
            ],
            placeholder: 'Pilih status',
        },
        {
            name: 'published',
            label: 'Tampil di Website Publik',
            type: 'checkbox',
        },
    ];

    return (
        <Dialog open={isOpen('create') || isOpen('edit')} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? 'Edit Data Fasilitas' : 'Tambah Fasilitas Baru'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data sarana dan prasarana di bawah ini.'
                            : 'Lengkapi data sarana dan prasarana baru di bawah ini.'}
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
                                            defaultValue={data?.[field.name as keyof Facility]}
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