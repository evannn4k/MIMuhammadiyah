'use client';

import { useEffect, useState } from 'react';
import { Search, Filter, ChevronDown, Grid, X } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';

interface FacilityToolbarProps {
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
}

const conditionOptions = [
    { value: 'all', label: 'Semua Kondisi' },
    { value: 'good', label: 'Kondisi Baik' },
    { value: 'fair', label: 'Kondisi Cukup' },
    { value: 'repair', label: 'Perlu Perbaikan' },
];

const capacityOptions = [
    { value: 'all', label: 'Semua Kapasitas' },
    { value: 'small', label: '< 30 Siswa' },
    { value: 'medium', label: '30 - 50 Siswa' },
    { value: 'large', label: '> 50 Siswa' },
];

const statusOptions = [
    { value: 'all', label: 'Semua Status' },
    { value: 'active', label: 'Aktif / Tampil' },
    { value: 'inactive', label: 'Sembunyikan' },
];

export default function FacilityToolbar({
    query,
    updateQuery,
}: FacilityToolbarProps) {
    const [searchValue, setSearchValue] = useState(query.search ?? '');

    useEffect(() => {
        setSearchValue(query.search ?? '');
    }, [query.search]);

    useEffect(() => {
        if (searchValue === (query.search ?? '')) {
            return;
        }

        const timer = setTimeout(() => {
            updateQuery({ search: searchValue || undefined, page: 1 });
        }, 400);

        return () => clearTimeout(timer);
    }, [searchValue, query.search, updateQuery]);

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    const handleFilterChange = (key: string, value: string) => {
        const params = { ...query, [key]: value === 'all' ? undefined : value, page: 1 };
        updateQuery(params);
    };

    return (
        <Card className="bg-muted/50 p-4">
            <CardContent className="flex flex-col gap-4 p-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                    <div className="flex-1 md:max-w-sm">
                        <InputGroup className="max-w-xs">
                            <InputGroupAddon align="inline-start">
                                <Search className="size-4 text-muted-foreground" />
                            </InputGroupAddon>
                            <InputGroupInput
                                type="search"
                                name="search"
                                value={searchValue}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                placeholder="Cari nama fasilitas, slug, atau deskripsi..."
                            />
                            {searchValue && (
                                <InputGroupAddon align="inline-end">
                                    <button
                                        type="button"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        onClick={() => setSearchValue('')}
                                    >
                                        <X className="size-4" />
                                    </button>
                                </InputGroupAddon>
                            )}
                        </InputGroup>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Select
                        value={query.condition ?? 'all'}
                        onValueChange={(v) => handleFilterChange('condition', v)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Semua Kondisi" />
                        </SelectTrigger>
                        <SelectContent>
                            {conditionOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={query.capacity ?? 'all'}
                        onValueChange={(v) => handleFilterChange('capacity', v)}
                    >
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Semua Kapasitas" />
                        </SelectTrigger>
                        <SelectContent>
                            {capacityOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={query.status ?? 'all'}
                        onValueChange={(v) => handleFilterChange('status', v)}
                    >
                        <SelectTrigger className="w-[160px]">
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
                </div >
            </CardContent>
        </Card>
    );
}