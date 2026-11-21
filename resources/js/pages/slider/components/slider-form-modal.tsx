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
import type { Slider } from '@/types/slider';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

type FieldConfig = ComponentProps<typeof FormField>;

const categories = [
    { label: 'PPDB', value: 'PPDB' },
    { label: 'Prestasi Nasional', value: 'Prestasi Nasional' },
    { label: 'Fasilitas & Inovasi', value: 'Fasilitas & Inovasi' },
    { label: 'Acara & Dies Natalis', value: 'Acara & Dies Natalis' },
    { label: 'Ekstrakurikuler', value: 'Ekstrakurikuler' },
];

const statuses = [
    { label: 'Aktif', value: 'active' },
    { label: 'Non-Aktif', value: 'inactive' },
    { label: 'Terjadwal', value: 'scheduled' },
];

const targetDevices = [
    { label: 'Semua Perangkat (Desktop & HP)', value: 'all' },
    { label: 'Khusus Desktop PC', value: 'desktop' },
    { label: 'Khusus Layar Ponsel / Mobile', value: 'mobile' },
];

interface SliderFormModalProps {
    modal: useModalType;
}

export default function SliderFormModal({ modal }: SliderFormModalProps) {
    const { isOpen, closeModal } = modal;
    const isEdit = isOpen('edit');
    const data = (modal.data ?? null) as Slider | null;

    const fields: FieldConfig[] = [
        {
            name: 'title',
            label: 'Judul Banner Utama (Heading) *',
            className: 'sm:col-span-2',
            placeholder: 'Contoh: Penerimaan Peserta Didik Baru TA 2025/2026',
        },
        {
            name: 'subtitle',
            label: 'Teks Penjelas (Subtitle / Caption)',
            type: 'textarea',
            className: 'sm:col-span-2',
            rows: 2,
            placeholder: 'Tuliskan ringkasan singkat ajakan atau keterangan utama banner...',
        },
        {
            name: 'image_path',
            label: 'Unggah Berkas Gambar Banner (1920 × 800 px) *',
            type: 'text',
            className: 'sm:col-span-2',
            placeholder: 'URL gambar atau path file...',
        },
        {
            name: 'cta_text',
            label: 'Teks Tombol Aksi (CTA Button)',
            placeholder: 'Contoh: Daftar Sekarang',
        },
        {
            name: 'cta_url',
            label: 'Tautan URL Tujuan',
            placeholder: 'Contoh: /ppdb-2025 atau https://...',
        },
        {
            name: 'category',
            label: 'Kategori',
            type: 'select',
            options: categories,
            placeholder: 'Pilih kategori',
        },
        {
            name: 'is_active',
            label: 'Status',
            type: 'select',
            options: statuses,
            placeholder: 'Pilih status',
        },
        {
            name: 'starts_at',
            label: 'Mulai Tayang',
            type: 'date',
        },
        {
            name: 'ends_at',
            label: 'Selesai Tayang',
            type: 'date',
        },
        {
            name: 'target_device',
            label: 'Target Perangkat',
            type: 'select',
            options: targetDevices,
            placeholder: 'Pilih target perangkat',
        },
    ];

    const createAction = '/dashboard/slider';
    const updateAction = (id: number) => `/dashboard/slider/${id}`;

    return (
        <Dialog
            open={isOpen('create') || isOpen('edit')}
            onOpenChange={closeModal}
        >
            <DialogContent className="sm:max-w-2xl max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? 'Edit Banner Slider' : 'Tambah Banner Slider Beranda Baru'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data banner slider di bawah ini.'
                            : 'Lengkapi data banner slider baru di bawah ini.'}
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
                                <div className="grid gap-4 py-4">
                                    <FormFieldWrapper cols={2}>
                                        {fields.map((field) => (
                                            <FormField
                                                key={field.name}
                                                {...field}
                                                defaultValue={
                                                    data?.[field.name as keyof Slider]
                                                }
                                                error={errors[field.name]}
                                            />
                                        ))}
                                    </FormFieldWrapper>

                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Pratinjau Gambar
                                        </label>
                                        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border">
                                            {data?.image_path ? (
                                                <img
                                                    src={data.image_path}
                                                    alt={data.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-muted-foreground">
                                                    <ImageIcon className="size-8" />
                                                    <span className="ml-2">Belum ada gambar</span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Resolusi disarankan: 1920 × 800 px (rasio 16:9), format WebP/JPG/PNG, maks. 2MB
                                        </p>
                                    </div>
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
                                            : 'Publikasikan'}
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