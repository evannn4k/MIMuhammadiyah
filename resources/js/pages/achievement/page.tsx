import { Head, router } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { useModal } from '@/hooks/use-modal';
import { useQueryParams } from '@/hooks/use-query-params';
import { queryMock, mockSummary } from './mock';
import type {
    Achievement,
    AchievementFilters,
    AchievementSummary,
} from '@/types/achievement';
import AchievementHeaderSection from './components/achievement-header-section';
import AchievementCardSummary from './components/achievement-card-summary';
import AchievementToolbar from './components/achievement-toolbar';
import AchievementTable from './components/achievement-table';
import AchievementFormModal from './components/achievement-form-modal';
import AchievementDeleteModal from './components/achievement-delete-modal';
import {
    index as achievementIndex,
    show as achievementShow,
} from '@/routes/dashboard/achievement';

interface AchievementPageProps {
    filters: AchievementFilters;
    summary: AchievementSummary;
}

export default function AchievementPage({
    filters,
    summary,
}: AchievementPageProps) {
    const modal = useModal();
    const indexUrl = achievementIndex.url({});
    const { query, updateQuery } = useQueryParams(indexUrl, filters);

    const LaravelPaginationData = queryMock(query);

    const handleEdit = (achievement: Achievement) => {
        modal.openEdit(achievement);
    };

    const handleDelete = (achievement: Achievement) => {
        modal.openDelete(achievement);
    };

    const handleView = (achievement: Achievement) => {
        router.visit(achievementShow({ achievement: achievement.id }).url);
    };

    const handleExport = () => {
        // TODO(backend): implement export
        console.log('Export achievement data');
    };

    return (
        <>
            <Head title="Manajemen Prestasi & Penghargaan" />
            <AchievementFormModal modal={modal} />
            <AchievementDeleteModal modal={modal} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <AchievementHeaderSection
                    onCreateAchievement={modal.openCreate}
                    onExport={handleExport}
                />

                <AchievementCardSummary summary={mockSummary()} />

                <AchievementToolbar
                    query={{
                        ...query,
                        data: LaravelPaginationData.data,
                        meta: LaravelPaginationData.meta,
                    }}
                    updateQuery={updateQuery}
                    onCreate={modal.openCreate}
                />

                <AchievementTable
                    data={LaravelPaginationData}
                    query={query}
                    updateQuery={updateQuery}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </>
    );
}

AchievementPage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard().url,
        },
        {
            title: 'Manajemen Prestasi & Penghargaan',
            href: achievementIndex().url,
        },
    ],
};
