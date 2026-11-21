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
            defaultValue: false,
        },
    ];

    // TODO(backend): replace with Wayfinder action route when create/update controllers exist
    const createAction = '/dashboard/galeri';
    const updateAction = (id: number) => `/dashboard/galeri/${id}`;

    return (
        <Dialog
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
                <Form
                    action={isEdit ? updateAction(modal.data.id) : createAction}
                    method={isEdit ? 'put' : 'post'}
                    options={{
                        preserveScroll: true,
                        preserveState: true,
                    }}
                    onBefore={() => false}
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
                                        const value =
                                            data?.[
                                                field.name as keyof GalleryItem
                                            ];
                                        return (
                                            <FormField
                                                key={field.name}
                                                {...field}
                                                defaultValue={
                                                    value !== null &&
                                                    value !== undefined
                                                        ? value
                                                        : undefined
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
                        );
                    }}
                </Form>
            </DialogContent>
        </Dialog>
    );
}