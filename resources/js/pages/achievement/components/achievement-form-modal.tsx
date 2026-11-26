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
import type { Achievement } from '@/types/achievement';

type FieldConfig = ComponentProps<typeof FormField>;

const categories = [
    { label: 'Akademik', value: 'Akademik' },
    { label: 'Non-Akademik', value: 'Non-Akademik' },
    { label: 'Olahraga', value: 'Olahraga' },
    { label: 'Seni & Budaya', value: 'Seni & Budaya' },
    { label: 'Keagamaan', value: 'Keagamaan' },
];

const levels = [
    { label: 'Sekolah', value: 'Sekolah' },
    { label: 'Kecamatan', value: 'Kecamatan' },
    { label: 'Kabupaten / Kota', value: 'Kabupaten / Kota' },
    { label: 'Provinsi', value: 'Provinsi' },
    { label: 'Nasional', value: 'Nasional' },
    { label: 'Internasional', value: 'Internasional' },
];

const recipientTypes = [
    { label: 'Siswa (Student)', value: 'student' },
    { label: 'Guru (Teacher)', value: 'teacher' },
    { label: 'Sekolah (School)', value: 'school' },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => currentYear - i).map(
    (y) => ({
        label: String(y),
        value: String(y),
    }),
);

interface AchievementFormModalProps {
    modal: useModalType;
}

export default function AchievementFormModal({
    modal,
}: AchievementFormModalProps) {
    const { isOpen, closeModal } = modal;
    const isEdit = isOpen('edit');
    const data = (modal.data ?? null) as Achievement | null;

    const { data: form, setData, post, put, processing, errors, reset } = useForm({
        title: data?.title ?? '',
        slug: data?.slug ?? '',
        category: data?.category ?? '',
        level: data?.level ?? '',
        recipient_type: data?.recipient_type ?? '',
        recipient_name: data?.recipient_name ?? '',
        recipient_class: data?.recipient_class ?? '',
        rank: data?.rank ?? '',
        organizer: data?.organizer ?? '',
        instituted_at: data?.instituted_at ?? '',
        achievement_year: data?.achievement_year ? String(data.achievement_year) : '',
        image_url: data?.image_url ?? '',
        is_published: data?.is_published ?? false,
    });

    const fields: FieldConfig[] = [
        {
            name: 'title',
            label: 'Judul Prestasi',
            className: 'sm:col-span-2',
            placeholder: 'Masukkan judul prestasi...',
        },
        {
            name: 'slug',
            label: 'Slug (URL)',
            className: 'sm:col-span-2',
            placeholder: 'Akan di-generate otomatis dari judul...',
        },
        {
            name: 'category',
            label: 'Kategori',
            type: 'select',
            options: categories,
            placeholder: 'Pilih kategori',
        },
        {
            name: 'level',
            label: 'Tingkat Lomba',
            type: 'select',
            options: levels,
            placeholder: 'Pilih tingkat',
        },
        {
            name: 'recipient_type',
            label: 'Tipe Penerima',
            type: 'select',
            options: recipientTypes,
            placeholder: 'Pilih tipe penerima',
        },
        {
            name: 'recipient_name',
            label: 'Nama Penerima',
            placeholder: 'Nama siswa / guru / institusi',
        },
        {
            name: 'recipient_class',
            label: 'Kelas / Peran',
            placeholder: 'Contoh: Siswa (Kelas XII IPA 1) / Guru (Biologi)',
        },
        {
            name: 'rank',
            label: 'Peringkat / Penghargaan',
            placeholder: 'Contoh: Juara 1, Medali Emas, Predikat Mandiri',
        },
        {
            name: 'organizer',
            label: 'Penyelenggara / Institusi Pemberi',
            placeholder: 'Nama institusi yang memberikan penghargaan',
        },
        {
            name: 'instituted_at',
            label: 'Tanggal Capaian',
            type: 'date',
            placeholder: 'YYYY-MM-DD',
        },
        {
            name: 'achievement_year',
            label: 'Tahun Capaian',
            type: 'select',
            options: years,
            placeholder: 'Pilih tahun',
        },
        {
            name: 'image_url',
            label: 'URL Gambar/Foto',
            placeholder: 'https://example.com/foto-prestasi.jpg',
        },
        {
            name: 'is_published',
            label: 'Tayang di Website Publik',
            type: 'checkbox',
        },
    ];

    const createAction = '/dashboard/prestasi';
    const updateAction = (id: number) => `/dashboard/prestasi/${id}`;

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
                        {isEdit ? 'Edit Data Prestasi' : 'Tambah Prestasi Baru'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data prestasi & penghargaan di bawah ini.'
                            : 'Lengkapi data prestasi & penghargaan baru di bawah ini.'}
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