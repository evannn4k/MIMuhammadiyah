'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown, Grid, Table } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useQueryParams } from '@/hooks/use-query-params';
import dashboardRoutes from '@/routes/dashboard';

interface StaffToolbarProps {
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onCreate: () => void;
}

const groupOptions = [
    { value: 'all', label: 'Semua Kelompok' },
    { value: 'leadership', label: 'Leadership (Pimpinan)' },
    { value: 'teacher', label: 'Teacher (Tenaga Pendidik)' },
    { value: 'staff', label: 'Staff (Tenaga Kependidikan)' },
];

const subjectOptions = [
    { value: 'all', label: 'Bidang Studi / Mapel' },
    { value: 'matematika', label: 'Matematika' },
    { value: 'informatika', label: 'Informatika & RPL' },
    { value: 'bahasa', label: 'Bahasa Indonesia / Inggris' },
    { value: 'sains', label: 'Fisika, Biologi, Kimia' },
    { value: 'sosial', label: 'IPS & Humaniora' },
    { value: 'operasional', label: 'Tata Usaha / Lab' },
];

const statusOptions = [
    { value: 'all', label: 'Semua Status' },
    { value: 'active', label: 'Tampil (Publik)' },
    { value: 'hidden', label: 'Disembunyikan' },
];

const quickFilters = [
    { value: 'all', label: 'Semua (84)' },
    { value: 'leadership', label: 'Struktural / Pimpinan (6)' },
    { value: 'teacher_peminatan', label: 'Guru Mapel Peminatan (34)' },
    { value: 'wali_kelas', label: 'Wali Kelas Aktif (24)' },
    { value: 'staf_operasional', label: 'Staf Operasional / IT (16)' },
];

export default function StaffToolbar({
    query,
    updateQuery,
    onCreate,
}: StaffToolbarProps) {
    const [searchValue, setSearchValue] = useState(query.search ?? '');
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        const params = { ...query, search: value || undefined, page: 1 };
        updateQuery(params);
    };

    const handleFilterChange = (key: string, value: string) => {
        const params = { ...query, [key]: value === 'all' ? undefined : value, page: 1 };
        updateQuery(params);
    };

    const handlePerPageChange = (value: string) => {
        const params = { ...query, per_page: value === '10' ? undefined : value, page: 1 };
        updateQuery(params);
    };

    const handleSortChange = (sort: string) => {
        const currentSort = query.sort;
        const currentDirection = query.direction;
        let direction: 'asc' | 'desc' = 'asc';

        if (currentSort === sort) {
            direction = currentDirection === 'asc' ? 'desc' : 'asc';
        }

        const params = { ...query, sort, direction, page: 1 };
        updateQuery(params);
    };

    return (
        <div className="bg-card p-4 rounded-xl shadow-sm border space-y-4">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
                <div className="relative flex-1 min-w-[280px]">
                    <Search className="absolute left-3 top-2.5 size-5 text-muted-foreground" />
                    <Input
                        placeholder="Cari nama lengkap, gelar, NIP, atau mata pelajaran..."
                        value={searchValue}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="h-10 pl-10 pr-10 bg-muted"
                    />
                    <Button variant="ghost" size="icon" className="absolute right-2.5 top-1.5">
                        <Filter className="size-4 text-muted-foreground" />
                    </Button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Select value={query.group ?? 'all'} onValueChange={(v) => handleFilterChange('group', v)}>
                        <SelectTrigger className="w-[180px] h-10 bg-muted">
                            <SelectValue placeholder="Semua Kelompok" />
                        </SelectTrigger>
                        <SelectContent>
                            {groupOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={query.subject ?? 'all'} onValueChange={(v) => handleFilterChange('subject', v)}>
                        <SelectTrigger className="w-[200px] h-10 bg-muted">
                            <SelectValue placeholder="Bidang Studi / Mapel" />
                        </SelectTrigger>
                        <SelectContent>
                            {subjectOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={query.status ?? 'all'} onValueChange={(v) => handleFilterChange('status', v)}>
                        <SelectTrigger className="w-[160px] h-10 bg-muted">
                            <SelectValue placeholder="Semua Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {statusOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div className="flex items-center p-1 bg-muted rounded-lg">
                        <Button
                            variant={query.view === 'grid' ? 'ghost' : 'default'}
                            size="sm"
                            className="gap-1.5"
                            onClick={() => handleSortChange('view_table')}
                        >
                            <Table className="size-4" />
                            <span className="hidden md:inline">Tabel</span>
                        </Button>
                        <Button
                            variant={query.view === 'grid' ? 'default' : 'ghost'}
                            size="sm"
                            className="gap-1.5"
                            onClick={() => handleSortChange('view_grid')}
                        >
                            <Grid className="size-4" />
                            <span className="hidden md:inline">Kartu</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Filter Cepat:
                </span>
                {quickFilters.map((filter) => (
                    <Button
                        key={filter.value}
                        variant={query.quick_filter === filter.value ? 'default' : 'outline'}
                        size="sm"
                        className="rounded-full"
                        onClick={() => handleFilterChange('quick_filter', filter.value)}
                    >
                        {filter.label}
                    </Button>
                ))}
                <span className="text-muted-foreground text-xs mx-1">|</span>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-secondary hover:underline"
                    onClick={() => {
                        const params = { ...query };
                        delete params.group;
                        delete params.subject;
                        delete params.status;
                        delete params.quick_filter;
                        delete params.search;
                        updateQuery(params);
                    }}
                >
                    <ChevronDown className="size-3 mr-1" />
                    Reset Filter
                </Button>
            </div>
        </div>
    );
}