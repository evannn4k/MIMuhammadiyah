'use client';

import { Head, router } from '@inertiajs/react';
import { dashboard } from '@/routes';
import facilityRoutes from '@/routes/dashboard/facility';
import { useModal } from '@/hooks/use-modal';
import { useQueryParams } from '@/hooks/use-query-params';
import { mockFacilities, mockFacilitySummary } from './mock';
import type { Facility } from '@/types/facility';
import { LaravelPagination } from '@/types/pagination';
import FacilityHeaderSection from './components/facility-header-section';
import FacilityCardSummary from './components/facility-card-summary';
import FacilityToolbar from './components/facility-toolbar';
import FacilityGrid from './components/facility-grid';
import FacilityFormModal from './components/facility-form-modal';
import FacilityDeleteModal from './components/facility-delete-modal';

interface FacilityPageProps {
    filters: Record<string, any>;
}

export default function FacilityPage({ filters }: FacilityPageProps) {
    const modal = useModal();

    const { query, updateQuery } = useQueryParams(
        facilityRoutes.index.url(),
    );

    const LaravelPaginationData = {
        data: mockFacilities,
        links: {
            first: null,
            last: null,
            prev: null,
            next: null,
        },
        meta: {
            current_page: 1,
            from: 1,
            last_page: 1,
            links: [],
            path: '',
            per_page: 6,
            to: mockFacilities.length,
            total: mockFacilities.length,
        },
    } as LaravelPagination<Facility>;

    const handleEdit = (facility: Facility) => {
        modal.openEdit(facility);
    };

    const handleDelete = (facility: Facility) => {
        modal.openDelete(facility);
    };

    const handleView = (facility: Facility) => {
        router.visit(facilityRoutes.show({ facility: facility.id }).url);
    };

    return (
        <>
            <Head title="Manajemen Fasilitas Sekolah" />
            <FacilityFormModal modal={modal} />
            <FacilityDeleteModal modal={modal} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <FacilityHeaderSection onCreate={modal.openCreate} />

                <FacilityCardSummary summary={mockFacilitySummary()} />

                <FacilityToolbar
                    query={query}
                    updateQuery={updateQuery}
                />

                <FacilityGrid
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

FacilityPage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard().url,
        },
        {
            title: 'Manajemen Sarana & Fasilitas Sekolah',
            href: facilityRoutes.index(),
        },
    ],
};