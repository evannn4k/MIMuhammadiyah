import { ArrowLeft, CalendarDays, Mail } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import dashboardRoutes from '@/routes/dashboard';
import { formatDate, getInitials } from '@/lib/utils';
import type { User } from '@/types/user';

const roleLabels: Record<string, string> = {
    admin: 'Admin',
    staff: 'Staff',
    editor: 'Editor',
};

const statusLabels: Record<string, string> = {
    active: 'Aktif',
    inactive: 'Nonaktif',
};

interface UserDetailProps {
    user: User | null;
}

export default function UserDetail({ user }: UserDetailProps) {
    if (!user) {
        return (
            <Card>
                <CardContent className="flex flex-col items-center gap-4 py-12">
                    <p className="text-muted-foreground">
                        Pengguna tidak ditemukan.
                    </p>
                    <Button variant="outline" asChild>
                        <Link href={dashboardRoutes.user.index()} prefetch>
                            <ArrowLeft />
                            Kembali ke daftar
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        );
    }

    const rows = [
        { label: 'Peran', value: roleLabels[user.role] ?? user.role },
        { label: 'Status', value: statusLabels[user.status] ?? user.status },
        { label: 'Dibuat pada', value: formatDate(user.created_at) },
        {
            label: 'Diperbarui pada',
            value: user.updated_at ? formatDate(user.updated_at) : '-',
        },
    ];

    return (
        <Card>
            <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {getInitials(user.name)}
                    </div>
                    <div className="flex flex-col gap-1">
                        <CardTitle>{user.name}</CardTitle>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Mail className="size-4" />
                            {user.email}
                        </span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Badge variant="secondary">
                        {roleLabels[user.role] ?? user.role}
                    </Badge>
                    <Badge
                        variant={
                            user.status === 'active' ? 'default' : 'outline'
                        }
                    >
                        {statusLabels[user.status] ?? user.status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <Separator />
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                    {rows.map((row) => (
                        <div key={row.label} className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">
                                {row.label}
                            </span>
                            <span className="flex items-center gap-1 text-sm font-medium">
                                {row.label === 'Dibuat pada' && (
                                    <CalendarDays className="size-4" />
                                )}
                                {row.value}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
