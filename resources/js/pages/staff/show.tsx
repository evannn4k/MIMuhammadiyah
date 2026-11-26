import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { mockStaff } from './mock';
import StaffDetail from './components/staff-detail';
import type { Staff } from '@/types/staff';

interface StaffShowProps {
    id: string;
}

export default function StaffShow({ id }: StaffShowProps) {
    // TODO(backend): replace with real data from props
    const staff = mockStaff.find((s) => s.id === Number(id)) ?? mockStaff[0];

    return (
        <>
            <Head title={staff.name} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <StaffDetail staff={staff} />
            </div>
        </>
    );
}

StaffShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Manajemen Guru & Staf',
            href: dashboardRoutes.staff.index(),
        },
        {
            title: 'Detail',
            href: '#',
        },
    ],
};