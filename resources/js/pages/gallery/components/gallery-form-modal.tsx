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
import FormFieldWrapper from '@/components/form-field-wrapper';
import type { useModalType } from '@/types/modal';
import type { GalleryItem } from '@/types/gallery';

type FieldConfig = ComponentProps<typeof FormField>;

const categories = [
    { label: 'Seni & Budaya', value: 'Seni & Budaya' },
    { label: 'Ekstrakurikuler', value: 'Ekstrakurikuler' },
    { label: 'Upacara & Resmi', value: 'Upacara & Resmi' },
    { label: 'Kunjungan Edukasi', value: 'Kunjungan Edukasi' },
    { label: 'Kepemimpinan', value: 'Kepemimpinan' },
    { label: 'Fasilitas Sekolah', value: 'Fasilitas Sekolah' },
];

const formats = [
    { label: 'JPG / JPEG', value: 'JPG / JPEG' },
    { label: 'PNG', value: 'PNG' },
    { label: 'WebP', value: 'WebP' },
];

const statuses = [
    { label: 'Tampil Publik', value: 'Tampil Publik' },
    { label: 'Draft Lampiran', value: 'Draft Lampiran' },
    { label: 'Terarsip', value: 'Terarsip' },
];

const periods = [
    { label: 'TA 2024/2025', value: 'TA 2024/2025' },
    { label: 'TA 2023/2024', value: 'TA 2023/2024' },
    { label: 'TA 2022/2023', value: 'TA 2022/2023' },
    { label: 'Semua Periode', value: 'Semua Periode' },
];

interface GalleryFormModalProps {
    modal: useModalType;
}

export default function GalleryFormModal({
    modal,
}: GalleryFormModalProps) {
    const { isOpen, closeModal } = modal;
    const isEdit = isOpen('edit');
    const data = (modal.data ?? null) as GalleryItem | null;

    const { data: form, setData, post, put, processing, errors, reset } = useForm({
        title: data?.title ?? '',
        category: data?.category ?? '',
        format: data?.format ?? '',
        status: data?.status ?? '',
        period: data?.period ?? '',
        file_size: data?.file_size ?? '',
        dimensions: data?.dimensions ?? '',
        uploaded_by: data?.uploaded_by ?? '',
        uploaded_at: data?.uploaded_at ?? '',
        image_url: data?.image_url ?? '',
        is_published: data?.is_published ?? false,
    });

    const fields: FieldConfig[] = [
        {
            name: 'title',
            label: 'Nama Berkas',
            className: 'sm:col-span-2',
            placeholder: 'Contoh: Hari_Pahlawan_Pentas_Budaya_01.jpg',
        },
        {
            name: 'category',
            label: 'Kategori',
            type: 'select',
            options: categories,
            placeholder: 'Pilih kategori',
        },
        {
            name: 'format',
            label: 'Format',
            type: 'select',
            options: formats,
            placeholder: 'Pilih format',
        },
        {
            name: 'status',
            label: 'Status',
            type: 'select',
            options: statuses,
            placeholder: 'Pilih status',
        },
        {
            name: 'period',
            label: 'Periode',
            type: 'select',
            options: periods,
            placeholder: 'Pilih periode',
        },
        {
            name: 'file_size',
            label: 'Ukuran File',
            placeholder: 'Contoh: 2.8 MB',
        },
        {
            name: 'dimensions',
            label: 'Dimensi',
            placeholder: 'Contoh: 1920 × 1080 px',
        },
        {
            name: 'uploaded_by',
            label: 'Diunggah Oleh',
            placeholder: 'Nama petugas/uploader',
        },
        {
            name: 'uploaded_at',
            label: 'Tanggal Unggah',
            type: 'date',
            placeholder: 'YYYY-MM-DD',
        },
        {
            name: 'image_url',
            label: 'URL Gambar',
            placeholder: 'https://example.com/foto.jpg',
        },
        {
            name: 'is_published',
            label: 'Tayang di Website Publik',
            type: 'checkbox',
        },
    ];

    const createAction = '/dashboard/galeri';
    const updateAction = (id: number) => `/dashboard/galeri/${id}`;

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const action = isEdit && data ? updateAction(data.id) : createAction;

        if (isEdit) {
            put(action, {
                onBefore: () => false,
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => closeModal(),
            });
        } else {
            post(action, {
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
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? 'Edit Lampiran Foto' : 'Tambah Lampiran Foto Baru'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data lampiran foto & dokumentasi di bawah ini.'
                            : 'Lengkapi data lampiran foto baru di bawah ini.'}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit}>
                    <FormFieldWrapper cols={2}>
                        {fields.map((field) => (
                            <FormField
                                key={field.name}
                                {...field}
                                value={form[field.name as keyof typeof form]}
                                onChange={(val) => setData(field.name as any, val)}
                                onCheckedChange={(checked) =>
                                    setData(field.name as any, checked)
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