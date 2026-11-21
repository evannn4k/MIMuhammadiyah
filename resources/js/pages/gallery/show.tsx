import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { index as galleryIndex } from '@/routes/dashboard/gallery';
import GalleryDetail from './components/gallery-detail';

interface GalleryShowProps {
    id: number;
}

export default function GalleryShow({ id }: GalleryShowProps) {
    return (
        <>
            <Head title="Detail Lampiran Foto" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <GalleryDetail id={id} />
            </div>
        </>
    );
}

GalleryShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard().url,
        },
        {
            title: 'Manajemen Lampiran Foto & Dokumentasi',
            href: galleryIndex().url,
        },
        {
            title: 'Detail',
            href: '#',
        },
    ],
};