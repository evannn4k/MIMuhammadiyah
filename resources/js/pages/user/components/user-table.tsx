import { Link } from '@inertiajs/react';
import { FileText, MoreHorizontal, SquarePen, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatDate, getInitials } from '@/lib/utils';
import type { User } from '@/types/user';
import { show } from '@/routes/dashboard/user';
import { PaginationPage } from '@/components/pagination-page';
import { LaravelPagination } from '@/types/pagination';

const statusLabels: Record<string, string> = {
    active: 'Aktif',
    inactive: 'Nonaktif',
};

interface UserTableProps {
    data: LaravelPagination<User>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (user: User) => void;
    onDelete: (user: User) => void;
}

export default function UserTable({
    data,
    query,
    updateQuery,
    onEdit,
    onDelete,
}: UserTableProps) {
    return (
        <div className="overflow-hidden rounded-xl shadow-sm">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Nama</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Peran</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Dibuat</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.data.map((user: User) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                                            {getInitials(user.name)}
                                        </div>
                                        {user.name}
                                    </div>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Badge variant="secondary">
                                        {user.role_name ?? '-'}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            user.status === 'active'
                                                ? 'default'
                                                : 'outline'
                                        }
                                    >
                                        {statusLabels[user.status] ??
                                            user.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {formatDate(user.created_at)}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal />
                                                <span className="sr-only">
                                                    Aksi
                                                </span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>
                                                Aksi
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                                <Link href={show(user.id)}>
                                                    <FileText />
                                                    Detail
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => onEdit(user)}
                                            >
                                                <SquarePen />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                variant="destructive"
                                                onClick={() => onDelete(user)}
                                            >
                                                <Trash2 />
                                                Hapus
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {data.data.length === 0 && (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="h-24 text-center"
                                >
                                    Tidak ada data.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <PaginationPage
                updateQuery={updateQuery}
                links={data.links}
                meta={data.meta}
            />
        </div>
    );
}
