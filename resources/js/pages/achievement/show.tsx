import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { index as achievementIndex } from '@/routes/dashboard/achievement';
import type { Achievement } from '@/types/achievement';
import AchievementDetail from './components/achievement-detail';

interface AchievementShowProps {
    id: number;
}

export default function AchievementShow({ id }: AchievementShowProps) {
    return (
        <>
            <Head title="Detail Prestasi" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <AchievementDetail id={id} />
            </div>
        </>
    );
}

AchievementShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard().url,
        },
        {
            title: 'Manajemen Prestasi & Penghargaan',
            href: achievementIndex().url,
        },
        {
            title: 'Detail',
            href: '#',
        },
    ],
};
