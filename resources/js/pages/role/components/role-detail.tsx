import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import type { Role } from '@/types/role';

interface RoleDetailProps {
    role: Role;
}

const tierLabels: Record<string, string> = {
    root: 'Root Access',
    editorial: 'Editorial',
    education: 'Edukasi',
};

export default function RoleDetail({ role }: RoleDetailProps) {
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{role.name}</CardTitle>
                        <Badge variant="outline">
                            {tierLabels[role.tier] ?? role.tier}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div>
                        <span className="text-sm text-muted-foreground">
                            Deskripsi
                        </span>
                        <p className="text-base font-medium text-foreground">
                            {role.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-sm text-muted-foreground">
                                Total Pengguna
                            </span>
                            <p className="text-lg font-semibold">
                                {role.user_count}
                            </p>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-muted-foreground">
                                Total Izin
                            </span>
                            <p className="text-lg font-semibold">
                                {role.permission_count}
                            </p>
                        </div>
                    </div>

                    <div>
                        <span className="text-sm text-muted-foreground">
                            Fitur & Kewenangan
                        </span>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {role.features.map((feature, idx) => (
                                <li key={idx}>
                                    <Badge variant="secondary">{feature}</Badge>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-xs text-muted-foreground">
                        Dibuat pada {formatDate(role.created_at)}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
