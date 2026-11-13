import { Users, ShieldCheck, Key, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { RoleSummary } from '@/types/role';

interface RoleCardSummaryProps {
    summary: RoleSummary;
}

export default function RoleCardSummary({ summary }: RoleCardSummaryProps) {
    const items = [
        { label: 'Total Peran', value: summary.total_roles, icon: ShieldCheck },
        { label: 'Total Pengguna', value: summary.total_users, icon: Users },
        { label: 'Izin Aktif', value: summary.active_permissions, icon: Key },
        { label: 'Modul Dikelola', value: 8, icon: Settings },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
                <Card key={item.label} className="bg-muted/50">
                    <CardContent className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">
                                {item.label}
                            </span>
                            <span className="text-2xl font-semibold">
                                {item.value}
                            </span>
                        </div>
                        <item.icon className="size-8 text-muted-foreground" />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
