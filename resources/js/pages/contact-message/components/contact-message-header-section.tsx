import { Badge } from '@/components/ui/badge';
import { Search, Mail, MessageSquare } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';
import type { ContactMessageFilters, ContactMessageSummary } from '@/types/contact-message';
import React from 'react';

interface ContactMessageHeaderSectionProps {
    summary: ContactMessageSummary;
    filters: ContactMessageFilters;
    updateQuery?: (params: Record<string, any>) => void;
    onCreate?: () => void;
}

const statusOptions = [
    { value: 'all', label: 'Semua Pesan' },
    { value: 'unread', label: 'Belum Dibaca' },
    { value: 'read', label: 'Sudah Dibaca' },
];

export default function ContactMessageHeaderSection({
    summary,
    filters,
    updateQuery,
    onCreate,
}: ContactMessageHeaderSectionProps) {
    const [search, setSearch] = React.useState(filters.search ?? '');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setTimeout(() => {
            updateQuery?.({ search: search || undefined, page: 1 });
        }, 300);
    };

    const handleStatusChange = (value: string) => {
        updateQuery?.({ is_read: value === 'all' ? undefined : value, page: 1 });
    };

    return (
        <Card className="bg-muted/50 p-4">
            <CardContent className="flex flex-col gap-4 p-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 gap-3 md:flex-col md:gap-2">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-primary text-primary font-semibold text-xs uppercase">
                            Kontak Masuk
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                            Formulir Web Publik
                        </span>
                    </div>
                    <h1 className="font-semibold text-lg text-foreground">Pesan Masuk</h1>
                    <p className="text-sm text-muted-foreground">
                        Daftar pertanyaan dan pesan kontak publik yang dikirim melalui situs web sekolah.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                        <Mail className="text-primary h-5 w-5" />
                        <div>
                            <div className="font-semibold text-foreground leading-none">{summary.total_messages}</div>
                            <div className="text-xs text-muted-foreground">Pesan Baru</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                        <MessageSquare className="text-emerald-600 h-5 w-5" />
                        <div>
                            <div className="font-semibold text-emerald-600 leading-none">{summary.read_count}</div>
                            <div className="text-xs text-muted-foreground">Telah Dibaca</div>
                        </div>
                    </div>
                    <InputGroup className="w-[180px]">
                        <InputGroupAddon align="inline-start">
                            <Search className="h-4 w-4 text-muted-foreground" />
                        </InputGroupAddon>
                        <InputGroupInput
                            type="search"
                            placeholder="Cari pengirim, subjek..."
                            value={search}
                            onChange={(e) => handleSearchChange(e)}
                        />
                    </InputGroup>
                    <Select value={filters.is_read ?? 'all'} onValueChange={handleStatusChange}>
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
                </div>
            </CardContent>
        </Card>
    );
}