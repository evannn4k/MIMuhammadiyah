import { useEffect, useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
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

interface PostToolbarProps {
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onCreate: () => void;
}

const categories = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'Akademik', label: 'Akademik' },
    { value: 'Kesiswaan & Ekskul', label: 'Kesiswaan & Ekskul' },
    { value: 'Pengumuman Resmi', label: 'Pengumuman Resmi' },
    { value: 'Prestasi', label: 'Prestasi' },
];

const statuses = [
    { value: 'all', label: 'Semua Status' },
    { value: 'published', label: 'Hanya Terbit' },
    { value: 'draft', label: 'Hanya Draft' },
    { value: 'archived', label: 'Hanya Arsip' },
];

export default function PostToolbar({
    query,
    updateQuery,
    onCreate,
}: PostToolbarProps) {
    const [search, setSearch] = useState(query.search ?? '');
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    useEffect(() => {
        setSearch(query.search ?? '');
    }, [query.search]);

    useEffect(() => {
        if (search === (query.search ?? '')) {
            return;
        }

        const timer = setTimeout(() => {
            updateQuery({ search: search || undefined, page: 1 });
        }, 400);

        return () => clearTimeout(timer);
    }, [search, query.search, updateQuery]);

    const handleCategoryChange = (value: string) => {
        updateQuery({ category: value === 'all' ? undefined : value, page: 1 });
    };

    const handleStatusChange = (value: string) => {
        updateQuery({ status: value === 'all' ? undefined : value, page: 1 });
        setIsStatusOpen(false);
    };

    return (
        <Card className="bg-muted/50 p-2">
            <CardContent className="flex flex-col gap-4 p-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                    <div className="flex-1 md:max-w-sm">
                        <InputGroup className="max-w-xs">
                            <InputGroupAddon align="inline-start">
                                <Search className="size-4 text-muted-foreground" />
                            </InputGroupAddon>
                            <InputGroupInput
                                placeholder="Cari judul artikel, penulis, atau kata kunci..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {search && (
                                <InputGroupAddon align="inline-end">
                                    <button
                                        type="button"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        onClick={() => setSearch('')}
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
                        value={query.category || 'all'}
                        onValueChange={handleCategoryChange}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Pilih Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value}>
                                    {cat.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={query.status || 'all'}
                        onValueChange={handleStatusChange}
                    >
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="Pilih Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {statuses.map((stat) => (
                                <SelectItem key={stat.value} value={stat.value}>
                                    {stat.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
}
