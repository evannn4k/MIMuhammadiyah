import { Head, router } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { useModal } from '@/hooks/use-modal';
import { useQueryParams } from '@/hooks/use-query-params';
import { queryMock, mockSummary } from './mock';
import type {
    GalleryItem,
    GalleryFilters,
    GallerySummary,
} from '@/types/gallery';
import GalleryHeaderSection from './components/gallery-header-section';
import GalleryCardSummary from './components/gallery-card-summary';
import GalleryToolbar from './components/gallery-toolbar';
import GalleryGrid from './components/gallery-grid';
import GalleryFormModal from './components/gallery-form-modal';
import GalleryDeleteModal from './components/gallery-delete-modal';
import {
    index as galleryIndex,
    show as galleryShow,
} from '@/routes/dashboard/gallery';

interface GalleryPageProps {
    filters: GalleryFilters;
}

export default function GalleryPage({
    filters,
}: GalleryPageProps) {
    const modal = useModal();
    const indexUrl = galleryIndex.url({});
    const { query, updateQuery } = useQueryParams(indexUrl, filters);

    const LaravelPaginationData = queryMock(query);

    const handleEdit = (item: GalleryItem) => {
        modal.openEdit(item);
    };

    const handleDelete = (item: GalleryItem) => {
        modal.openDelete(item);
    };

    const handleView = (item: GalleryItem) => {
        router.visit(galleryShow({ gallery: item.id }).url);
    };

    const handleBulkUpload = () => {
        // TODO(backend): implement bulk upload
        console.log('Bulk upload');
    };

    return (
        <>
            <Head title="Manajemen Lampiran Foto & Dokumentasi" />
            <GalleryFormModal modal={modal} />
            <GalleryDeleteModal modal={modal} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <GalleryHeaderSection
                    onBulkUpload={handleBulkUpload}
                    onCreate={modal.openCreate}
                />

                <GalleryCardSummary summary={mockSummary()} />

                <GalleryToolbar
                    query={{
                        ...query,
                        data: LaravelPaginationData.data,
                        meta: LaravelPaginationData.meta,
                    }}
                    updateQuery={updateQuery}
                />

                <GalleryGrid
                    data={LaravelPaginationData}
                    query={query}
                    updateQuery={updateQuery}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onView={handleView}
                />
            </div>
        </>
    );
}

GalleryPage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard().url,
        },
        {
            title: 'Manajemen Lampiran Foto & Dokumentasi',
            href: galleryIndex().url,
        },
    ],
};