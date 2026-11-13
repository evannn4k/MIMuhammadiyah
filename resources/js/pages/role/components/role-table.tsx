import { ArrowUpDown, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
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
import type { Role } from '@/types/role';
import type { Paginated } from '@/types/pagination';

const tierLabels: Record<string, string> = {
    root: 'Root',
    editorial: 'Editorial',
    education: 'Edukasi',
};

interface RoleTableProps {
    paginated: Paginated<Role>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (role: Role) => void;
    onDelete: (role: Role) => void;
}

export default function RoleTable({
    paginated,
    query,
    updateQuery,
    onEdit,
    onDelete,
}: RoleTableProps) {
    const sortColumn = query.sort ?? 'name';
    const sortDirection = query.direction === 'asc' ? 'asc' : 'desc';

    const sortBy = (column: string) => {
        updateQuery({
            sort: column,
            direction:
                column === sortColumn && sortDirection === 'asc'
                    ? 'desc'
                    : 'asc',
            page: 1,
        });
    };

    const sortableHeader = (label: string, column: string) => (
        <button
            type="button"
            onClick={() => sortBy(column)}
            className="flex items-center gap-1"
        >
            {label}
            {column === sortColumn ? (
                sortDirection === 'asc' ? (
                    <ArrowUpDown className="size-4" />
                ) : (
                    <ArrowUpDown className="size-4 fill-current" />
                )
            ) : (
                <ArrowUpDown className="size-4" />
            )}
        </button>
    );

    return (
        <div className="rounded-md border">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                {sortableHeader('Nama', 'name')}
                            </TableHead>
                            <TableHead>
                                {sortableHeader('Tier', 'tier')}
                            </TableHead>
                            <TableHead>
                                {sortableHeader('Pengguna', 'user_count')}
                            </TableHead>
                            <TableHead>
                                {sortableHeader('Izin', 'permission_count')}
                            </TableHead>
                            <TableHead>
                                {sortableHeader('Bypass', 'is_bypass_lock')}
                            </TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginated.data.map((role) => (
                            <TableRow key={role.id}>
                                <TableCell>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="font-medium text-foreground">
                                            {role.name}
                                        </span>
                                        <span className="line-clamp-1 text-xs text-muted-foreground">
                                            {role.description}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">
                                        {tierLabels[role.tier] ?? role.tier}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                    {role.user_count}
                                </TableCell>
                                <TableCell className="text-center">
                                    {role.permission_count}
                                </TableCell>
                                <TableCell className="text-center">
                                    <Badge
                                        variant={
                                            role.is_bypass_lock
                                                ? 'default'
                                                : 'secondary'
                                        }
                                    >
                                        {role.is_bypass_lock
                                            ? 'Bypass Lock'
                                            : 'Standard'}
                                    </Badge>
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
                                            <DropdownMenuItem
                                                onClick={() => onEdit(role)}
                                            >
                                                <Pencil />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                variant="destructive"
                                                onClick={() => onDelete(role)}
                                            >
                                                <Trash2 />
                                                Hapus
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {paginated.data.length === 0 && (
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
        </div>
    );
}
