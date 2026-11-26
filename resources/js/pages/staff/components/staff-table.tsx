'use client';

import { Link } from '@inertiajs/react';
import { FileText, MoreHorizontal, SquarePen, Trash2, Eye, EyeOff } from 'lucide-react';
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
import type { Staff } from '@/types/staff';
import { show } from '@/routes/dashboard/staff';
import { PaginationPage } from '@/components/pagination-page';
import { LaravelPagination } from '@/types/pagination';

const groupBadgeVariants: Record<string, 'default' | 'secondary' | 'outline'> = {
    Leadership: 'default',
    Teacher: 'secondary',
    'Staff (GTK)': 'outline',
};

const statusBadgeVariants: Record<string, 'default' | 'outline' | 'destructive'> = {
    active: 'default',
    hidden: 'outline',
    on_leave: 'destructive',
};

interface StaffTableProps {
    data: LaravelPagination<Staff>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (staff: Staff) => void;
    onDelete: (staff: Staff) => void;
}

export default function StaffTable({
    data,
    query,
    updateQuery,
    onEdit,
    onDelete,
}: StaffTableProps) {
    return (
        <div className="overflow-hidden rounded-xl shadow-sm border">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-12 text-center">
                                <input type="checkbox" className="size-4 rounded border-input" />
                            </TableHead>
                            <TableHead>Pendidik / Tenaga Kependidikan</TableHead>
                            <TableHead>Identitas NIP / NUPTK</TableHead>
                            <TableHead>Kelompok & Jabatan</TableHead>
                            <TableHead>Bidang Studi (Mapel)</TableHead>
                            <TableHead>Pendidikan Terakhir</TableHead>
                            <TableHead className="text-center">Status Portal</TableHead>
                            <TableHead className="text-right pr-4">Aksi Cepat</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.data.map((staff: Staff) => (
                            <TableRow key={staff.id} className="hover:bg-muted/50 transition-colors">
                                <TableCell className="text-center">
                                    <input type="checkbox" className="size-4 rounded border-input" />
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0 shadow-sm">
                                            <img
                                                src={staff.avatar}
                                                alt={staff.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <div className="flex items-center gap-1.5">
                                                <span className="font-semibold truncate hover:text-primary transition-colors">
                                                    {staff.name}
                                                </span>
                                                {staff.nuptk && staff.nuptk !== '-' && (
                                                    <span className="text-secondary" title="Profil Terverifikasi Resmi">
                                                        ✓
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs text-muted-foreground truncate">
                                                {staff.email}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-mono font-semibold text-sm tracking-tight">
                                            {staff.nip}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <span className="px-1.5 py-0.5 rounded text-xs bg-muted text-muted-foreground font-medium">
                                                NUPTK: {staff.nuptk}
                                            </span>
                                            <span className="px-1.5 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                                                Internal
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <Badge variant={groupBadgeVariants[staff.group] ?? 'outline'}>
                                            {staff.group}
                                        </Badge>
                                        <span className="text-sm font-medium truncate">
                                            {staff.position}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">{staff.subject}</span>
                                        <span className="text-xs text-muted-foreground">
                                            Koordinator Olimpiade Sains
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">{staff.education}</span>
                                        <span className="text-xs text-muted-foreground">
                                            {staff.education_institution}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Badge variant={statusBadgeVariants[staff.status] ?? 'outline'}>
                                        {staff.status === 'active' && (
                                            <>
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 inline-block" />
                                                Aktif Tampil
                                            </>
                                        )}
                                        {staff.status === 'hidden' && (
                                            <>
                                                <span className="w-1.5 h-1.5 rounded-full bg-muted mr-1.5 inline-block" />
                                                Disembunyikan
                                            </>
                                        )}
                                        {staff.status === 'on_leave' && (
                                            <>
                                                <span className="w-1.5 h-1.5 rounded-full bg-destructive mr-1.5 inline-block" />
                                                Cuti Studi
                                            </>
                                        )}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right pr-4">
                                    <div className="flex items-center justify-end gap-1">
                                        <Link href={show(staff.id)}>
                                            <Button variant="ghost" size="icon" title="Lihat Tampilan Profil Publik">
                                                {staff.status === 'active' ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                                            </Button>
                                        </Link>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" title="Menu Opsi">
                                                    <MoreHorizontal className="size-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem asChild>
                                                    <Link href={show(staff.id)}>
                                                        <FileText className="size-4 mr-2" />
                                                        Detail
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => onEdit(staff)}>
                                                    <SquarePen className="size-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem variant="destructive" onClick={() => onDelete(staff)}>
                                                    <Trash2 className="size-4 mr-2" />
                                                    Hapus
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {data.data.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={8} className="h-24 text-center">
                                    Tidak ada data.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="p-4 bg-muted/50 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Tampilkan</span>
                        <select
                            value={query.per_page ?? '10'}
                            onChange={(e) => {
                                const params = { ...query, per_page: e.target.value === '10' ? undefined : e.target.value, page: 1 };
                                updateQuery(params);
                            }}
                            className="h-8 px-2 rounded bg-background text-sm border shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span className="text-sm text-muted-foreground">baris per halaman</span>
                    </div>
                    <span className="hidden md:inline text-muted-foreground text-xs">|</span>
                    <span className="text-sm text-muted-foreground">
                        Menampilkan <strong>{data.meta.from}</strong> - <strong>{data.meta.to}</strong> dari <strong>{data.meta.total}</strong> data Guru & Staf
                    </span>
                </div>
                <PaginationPage
                    updateQuery={updateQuery}
                    links={data.links}
                    meta={data.meta}
                />
            </div>
        </div>
    );
}