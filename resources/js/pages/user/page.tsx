import { Head, router } from "@inertiajs/react";
import { dashboard } from "@/routes";
import dashboardRoutes from "@/routes/dashboard";
import { useModal } from "@/hooks/use-modal";
import { useQueryParams } from "@/hooks/use-query-params";
import { queryMock, summaryMock } from "./mock";
import type { User, UserSummary } from "@/types/user";
import { RoleName } from "@/types/role";
import { Pagination } from "@/types/pagination";
import { DeleteAlert } from "@/components/delete-alert";
import { deleteMethod } from "@/routes/dashboard/user";
import UserHeaderSection from "./components/user-header-section";
import UserCardSummary from "./components/user-card-summary";
import UserToolbar from "./components/user-toolbar";
import UserTable from "./components/user-table";
import UserFormModal from "./components/user-form-modal";
import UserDeleteModal from "./components/user-delete-modal";

interface UserPageProps {
    data: Pagination<User>;
    roles: RoleName[];
    summary: UserSummary;
}

export default function UserPage({ data, roles, summary }: UserPageProps) {
    const modal = useModal();

    const { query, updateQuery } = useQueryParams(
        dashboardRoutes.user.index.url(),
    );

    const handleDelete = (user: User) => {
        router.delete(deleteMethod(user), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <Head title="Manajemen Pengguna & Staf" />
            <UserFormModal
                key={modal.data?.id ?? "create"}
                roles={roles}
                modal={modal}
            />
            <UserDeleteModal modal={modal} />
            <DeleteAlert
                modal={modal}
                title="Hapus data user"
                description="Data user yang telah dihapus dapat dipulihkan."
                handleDelete={handleDelete}
            />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <UserHeaderSection onCreateUser={modal.openCreate} />

                <UserCardSummary summary={summary} />

                <UserToolbar
                    query={query}
                    updateQuery={updateQuery}
                    onCreate={modal.openCreate}
                />

                <UserTable
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

UserPage.layout = {
    breadcrumbs: [
        {
            title: "Dashboard",
            href: dashboard(),
        },
        {
            title: "Manajemen Pengguna & Staf",
            href: dashboardRoutes.user.index(),
        },
    ],
};
