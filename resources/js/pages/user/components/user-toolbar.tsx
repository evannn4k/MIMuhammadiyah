import { useEffect, useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface UserToolbarProps {
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onCreate: () => void;
}

export default function UserToolbar({
    query,
    updateQuery,
    onCreate,
}: UserToolbarProps) {
    const [search, setSearch] = useState(query.search ?? '');

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

    return (
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        name="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Cari nama atau email..."
                        className="pl-9"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Label
                        htmlFor="user-status-filter"
                        className="whitespace-nowrap"
                    >
                        Status
                    </Label>
                    <Select
                        value={query.status ?? 'all'}
                        onValueChange={(value) =>
                            updateQuery({
                                status: value === 'all' ? undefined : value,
                                page: 1,
                            })
                        }
                    >
                        <SelectTrigger id="user-status-filter" className="w-36">
                            <SelectValue placeholder="Semua status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua</SelectItem>
                            <SelectItem value="active">Aktif</SelectItem>
                            <SelectItem value="inactive">Nonaktif</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button onClick={onCreate}>
                <Plus />
                Tambah Pengguna
            </Button>
        </div>
    );
}
