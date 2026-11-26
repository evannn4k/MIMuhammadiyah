import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { useModal } from '@/hooks/use-modal';
import { useQueryParams } from '@/hooks/use-query-params';
import { mockStaff, summaryMock } from './mock';
import type { Staff } from '@/types/staff';
import { LaravelPagination } from '@/types/pagination';
import StaffHeaderSection from './components/staff-header-section';
import StaffCardSummary from './components/staff-card-summary';
import StaffToolbar from './components/staff-toolbar';
import StaffTable from './components/staff-table';
import StaffFormModal from './components/staff-form-modal';
import StaffDeleteModal from './components/staff-delete-modal';

interface StaffPageProps {
    data: LaravelPagination<Staff>;
    summary: typeof summaryMock;
}

export default function StaffPage({ data, summary }: StaffPageProps) {
    const modal = useModal();

    const { query, updateQuery } = useQueryParams(
        dashboardRoutes.staff.index.url(),
    );

    return (
        <>
            <Head title="Manajemen Guru & Staf" />
            <StaffFormModal modal={modal} />
            <StaffDeleteModal modal={modal} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <StaffHeaderSection onCreate={modal.openCreate} />

                <StaffCardSummary summary={summary} />

                <StaffToolbar
                    query={query}
                    updateQuery={updateQuery}
                    onCreate={modal.openCreate}
                />

                <StaffTable
                    data={data}
                    query={query}
                    updateQuery={updateQuery}
                    onEdit={modal.openEdit}
                    onDelete={modal.openDelete}
                />
            </div>
        </>
    );
}

StaffPage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Manajemen Guru & Staf',
            href: dashboardRoutes.staff.index(),
        },
    ],
};