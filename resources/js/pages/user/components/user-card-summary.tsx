import { ShieldCheck, UserCheck, UserX, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { UserSummary } from '@/types/user';

interface UserCardSummaryProps {
    summary: UserSummary;
}

export default function UserCardSummary({ summary }: UserCardSummaryProps) {
    const items = [
        { label: 'Total Pengguna', value: summary.total, icon: Users },
        { label: 'Pengguna Aktif', value: summary.active, icon: UserCheck },
        { label: 'Pengguna Nonaktif', value: summary.inactive, icon: UserX },
        { label: 'Admin', value: summary.admin, icon: ShieldCheck },
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
