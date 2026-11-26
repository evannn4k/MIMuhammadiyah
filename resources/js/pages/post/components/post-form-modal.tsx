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
import type { Post } from '@/types/post';

type FieldConfig = ComponentProps<typeof FormField>;

const categories = [
    { label: 'Akademik', value: 'Akademik' },
    { label: 'Kesiswaan & Ekskul', value: 'Kesiswaan & Ekskul' },
    { label: 'Pengumuman Resmi', value: 'Pengumuman Resmi' },
    { label: 'Prestasi', value: 'Prestasi' },
];

const statuses = [
    { label: 'Terbit', value: 'published' },
    { label: 'Draft', value: 'draft' },
    { label: 'Diarsipkan', value: 'archived' },
];

interface PostFormModalProps {
    modal: useModalType;
}

export default function PostFormModal({ modal }: PostFormModalProps) {
    const { isOpen, closeModal } = modal;
    const isEdit = isOpen('edit');
    const data = (modal.data ?? null) as Post | null;

    const fields: FieldConfig[] = [
        {
            name: 'title',
            label: 'Judul Artikel',
            className: 'sm:col-span-2',
            placeholder: 'Masukkan judul artikel...',
        },
        {
            name: 'category',
            label: 'Kategori',
            type: 'select',
            options: [
                { label: 'Akademik', value: 'Akademik' },
                { label: 'Kesiswaan & Ekskul', value: 'Kesiswaan & Ekskul' },
                { label: 'Pengumuman Resmi', value: 'Pengumuman Resmi' },
                { label: 'Prestasi', value: 'Prestasi' },
            ],
            placeholder: 'Pilih kategori',
        },
        {
            name: 'status',
            label: 'Status',
            type: 'select',
            options: [
                { label: 'Terbit', value: 'published' },
                { label: 'Draft', value: 'draft' },
                { label: 'Diarsipkan', value: 'archived' },
            ],
            placeholder: 'Pilih status',
        },
        {
            name: 'excerpt',
            label: 'Ringkasan',
            type: 'textarea',
            className: 'sm:col-span-2',
            placeholder: 'Tuliskan ringkasan artikel...',
        },
        {
            name: 'content',
            label: 'Konten / Isi Artikel',
            type: 'textarea',
            className: 'sm:col-span-2',
            placeholder: 'Tuliskan isi artikel lengkap...',
        },
    ];

    // TODO(backend): replace with Wayfinder action route when create/update controllers exist
    const createAction = '/dashboard/berita';
    const updateAction = (id: number) => `/dashboard/berita/${id}`;

    return (
        <Dialog
            open={isOpen('create') || isOpen('edit')}
            onOpenChange={closeModal}
        >
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit
                            ? 'Edit Berita & Informasi'
                            : 'Tulis Berita Baru'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'Perbarui data artikel berita di bawah ini.'
                            : 'Lengkapi data artikel berita baru di bawah ini.'}
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
                                    {fields.map((field) => (
                                        <FormField
                                            key={field.name}
                                            {...field}
                                            defaultValue={
                                                data?.[field.name as keyof Post]
                                            }
                                            error={errors[field.name]}
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
                            </>
                        );
                    }}
                </Form>
            </DialogContent>
        </Dialog>
    );
}
