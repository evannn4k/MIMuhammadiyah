import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { mockUsers } from './mock';
import UserDetail from './components/user-detail';
import type { User } from '@/types/user';

interface UserShowProps {
    user: User;
}

export default function UserShow({ user }: UserShowProps) {

    return (
        <>
            <Head title={user ? user.name : 'Pengguna'} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <UserDetail user={user} />
            </div>
        </>
    );
}

UserShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Pengguna',
            href: dashboardRoutes.user.index(),
        },
        {
            title: 'Detail',
            href: "#"
        },
    ],
};
