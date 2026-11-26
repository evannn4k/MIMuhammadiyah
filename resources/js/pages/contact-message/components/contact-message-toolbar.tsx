import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';
import type { ContactMessageFilters } from '@/types/contact-message';

const unreadStatusOptions = [
    { value: 'all', label: 'Semua' },
    { value: 'unread', label: 'Belum Dibaca' },
    { value: 'read', label: 'Sudah Dibaca' },
];

interface ContactMessageToolbarProps {
    query: ContactMessageFilters;
    updateQuery: (params: Record<string, any>) => void;
}

export default function ContactMessageToolbar({
    query,
    updateQuery,
}: ContactMessageToolbarProps) {
    const [searchValue, setSearchValue] = useState(query.search ?? '');

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        setTimeout(() => {
            updateQuery({ search: value || undefined, page: 1 });
        }, 300);
    };

    const handleStatusChange = (key: string, value: string) => {
        updateQuery({ [key]: value === 'all' ? undefined : value, page: 1 });
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <InputGroup className="max-w-xs">
                <InputGroupAddon align="inline-start">
                    <Search className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput
                    type="search"
                    name="search"
                    value={searchValue}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Cari pengirim, subjek..."
                />
                {searchValue && (
                    <InputGroupAddon align="inline-end">
                        <button
                            type="button"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => setSearchValue('')}
                        >
                            <Filter className="h-4 w-4" />
                        </button>
                    </InputGroupAddon>
                )}
            </InputGroup>

            <Select
                value={query.is_read ?? 'all'}
                onValueChange={(v) => handleStatusChange('is_read', v)}
            >
                <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Semua Status Baca" />
                </SelectTrigger>
                <SelectContent>
                    {unreadStatusOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="flex gap-1">
                <Button
                    variant={query.is_read === 'unread' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleStatusChange('is_read', 'unread')}
                >
                    <ChevronDown className="h-3 w-3" />
                    Belum Dibaca
                </Button>
                <Button
                    variant={query.is_read === 'read' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleStatusChange('is_read', 'read')}
                >
                    <ChevronDown className="h-3 w-3" />
                    Sudah Dibaca
                </Button>
            </div>
        </div>
    );
}