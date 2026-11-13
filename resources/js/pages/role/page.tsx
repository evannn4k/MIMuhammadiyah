import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { useModal } from '@/hooks/use-modal';
import { summaryMock } from './mock';
import type { Role, RoleFilters } from '@/types/role';
import RoleHeaderSection from './components/role-header-section';
import RoleCardSummary from './components/role-card-summary';
import RoleFormModal from './components/role-form-modal';
import RoleCard from './components/role-card';
import PermissionPanel from './components/permission-panel';
import { sync as syncPermissionRole } from '@/routes/dashboard/role';
import { RadioGroup } from '@/components/ui/radio-group';
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Plus, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/delete-alert';
import { deleteMethod } from '@/routes/dashboard/role';

interface RolePageProps {
    filters: RoleFilters;
    roles: Role[];
    permissions: Record<string, { name: string; description: string }[]>;
}

export default function RolePage({
    filters,
    roles,
    permissions,
}: RolePageProps) {
    const modal = useModal();
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
        [],
    );
    const [pending, setPending] = useState<boolean>(false);

    const summary = summaryMock();

    const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);

    const handleSavePermission = () => {
        const roleId = selectedRoleId ?? 0;
        setPending(true);

        router.put(
            syncPermissionRole.url(roleId),
            { permissions: selectedPermissions },
            {
                onFinish: () => {
                    setPending(false);
                },
            },
        );
    };

    const handleSelectedRole = (id: number) => {
        setSelectedRoleId(id);

        const role = roles.find((r) => r.id == id);

        setSelectedPermissions(role?.permissions ? role?.permissions : []);
    };

    const handleTogglePermission = (permName: string) => {
        setSelectedPermissions((prev: string[]) =>
            prev.includes(permName)
                ? prev.filter((id) => id !== permName)
                : [...prev, permName],
        );
    };

    const handleDelete = (id: string | number) => {
        router.delete(deleteMethod(id as number), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <Head title="Peran & Hak Akses" />
            <DeleteAlert
                modal={modal}
                title="Hapus data peran"
                description="Data peran yang telah dihapus dapat dikembalikan."
                handleDelete={handleDelete}
            />
            <RoleFormModal modal={modal} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <RoleHeaderSection
                    onCreateRole={modal.openCreate}
                    onSave={handleSavePermission}
                    pending={pending}
                    selectedPermissions={selectedPermissions}
                />
                <RoleCardSummary summary={summary} />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <Card className="bg-muted/50 p-4">
                            <CardHeader className="p-0">
                                <CardTitle className="flex items-start gap-2 text-lg md:items-center">
                                    <Shield /> Daftar Peran
                                </CardTitle>
                                <CardAction>
                                    <Button
                                        size="sm"
                                        onClick={() => modal.openCreate()}
                                    >
                                        <Plus /> Tambah
                                    </Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent className="p-0">
                                <RadioGroup className="flex flex-col gap-2">
                                    {roles.map((role) => (
                                        <RoleCard
                                            key={role.id}
                                            role={role}
                                            onClick={() =>
                                                handleSelectedRole(role.id)
                                            }
                                            modal={modal}
                                        />
                                    ))}
                                    {roles.length === 0 && (
                                        <div className="p-6 text-center text-muted-foreground">
                                            Tidak ada peran ditemukan.
                                        </div>
                                    )}
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-2">
                        {selectedRoleId ? (
                            <PermissionPanel
                                summary={summary}
                                selectedPermissions={selectedPermissions}
                                togglePermission={handleTogglePermission}
                                permissions={permissions}
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center rounded-xl border bg-muted/30">
                                <p className="text-muted-foreground">
                                    Pilih peran untuk melihat izin
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

RolePage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Peran & Hak Akses',
            href: dashboardRoutes.role.index(),
        },
    ],
};
