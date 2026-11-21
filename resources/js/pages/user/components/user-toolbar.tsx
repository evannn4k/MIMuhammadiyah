import { useEffect, useState } from 'react';
import { Plus, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';

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
        <Card className="bg-muted/50 p-2">
            <CardContent className="flex flex-col gap-3 p-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="w-full sm:max-w-xs">
                        <InputGroup className="max-w-xs">
                            <InputGroupAddon align="inline-start">
                                <Search className="size-4 text-muted-foreground" />
                            </InputGroupAddon>
                            <InputGroupInput
                                type="search"
                                name="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Cari nama atau email..."
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
            </CardContent>
        </Card>
    );
}
