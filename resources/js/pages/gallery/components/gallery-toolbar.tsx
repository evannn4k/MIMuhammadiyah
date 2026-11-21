import { Search, X, RotateCcw } from 'lucide-react';
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

interface GalleryToolbarProps {
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
}

const categories = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'Seni & Budaya', label: 'Seni & Budaya' },
    { value: 'Ekstrakurikuler', label: 'Ekstrakurikuler' },
    { value: 'Upacara & Resmi', label: 'Upacara & Resmi' },
    { value: 'Kunjungan Edukasi', label: 'Kunjungan Edukasi' },
    { value: 'Kepemimpinan', label: 'Kepemimpinan' },
    { value: 'Fasilitas Sekolah', label: 'Fasilitas Sekolah' },
];

const formats = [
    { value: 'all', label: 'Semua Format' },
    { value: 'JPG / JPEG', label: 'JPG / JPEG' },
    { value: 'PNG', label: 'PNG' },
    { value: 'WebP', label: 'WebP' },
];

const periods = [
    { value: 'all', label: 'Semua Periode' },
    { value: 'TA 2024/2025', label: 'TA 2024/2025' },
    { value: 'TA 2023/2024', label: 'TA 2023/2024' },
    { value: 'TA 2022/2023', label: 'TA 2022/2023' },
];

const statuses = [
    { value: 'all', label: 'Semua Status' },
    { value: 'Tampil Publik', label: 'Tampil Publik' },
    { value: 'Draft Lampiran', label: 'Draft Lampiran' },
    { value: 'Terarsip', label: 'Terarsip' },
];

export default function GalleryToolbar({
    query,
    updateQuery,
}: GalleryToolbarProps) {
    const hasActiveFilters =
        query.search ||
        (query.category && query.category !== 'all') ||
        (query.format && query.format !== 'all') ||
        (query.period && query.period !== 'all') ||
        (query.status && query.status !== 'all');

    return (
        <Card className="bg-card space-y-4 rounded-xl p-4 bg-muted/50">
            {/* Search and primary filter row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-4">
                    <InputGroup className="max-w-xs">
                        <InputGroupAddon align="inline-start">
                            <Search className="size-4 text-muted-foreground" />
                        </InputGroupAddon>
                        <InputGroupInput
                            type="search"
                            name="search"
                            value={query.search ?? ''}
                            onChange={(event) =>
                                updateQuery({
                                    search: event.target.value || undefined,
                                    page: 1,
                                })
                            }
                            placeholder="Cari nama berkas, lampiran foto, atau tag kegiatan..."
                        />
                        {query.search && (
                            <InputGroupAddon align="inline-end">
                                <button
                                    type="button"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => updateQuery({ search: undefined, page: 1 })}
                                >
                                    <X className="size-4" />
                                </button>
                            </InputGroupAddon>
                        )}
                    </InputGroup>
                </div>
                <div className="md:col-span-2">
                    <Select
                        value={query.category ?? 'all'}
                        onValueChange={(value) =>
                            updateQuery({
                                category: value === 'all' ? undefined : value,
                                page: 1,
                            })
                        }
                    >
                        <SelectTrigger id="filter-category" className="h-10 w-full">
                            <SelectValue placeholder="Semua Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value}>
                                    {cat.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="md:col-span-2">
                    <Select
                        value={query.format ?? 'all'}
                        onValueChange={(value) =>
                            updateQuery({
                                format: value === 'all' ? undefined : value,
                                page: 1,
                            })
                        }
                    >
                        <SelectTrigger id="filter-format" className="h-10 w-full">
                            <SelectValue placeholder="Semua Format" />
                        </SelectTrigger>
                        <SelectContent>
                            {formats.map((fmt) => (
                                <SelectItem key={fmt.value} value={fmt.value}>
                                    {fmt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="md:col-span-2">
                    <Select
                        value={query.period ?? 'all'}
                        onValueChange={(value) =>
                            updateQuery({
                                period: value === 'all' ? undefined : value,
                                page: 1,
                            })
                        }
                    >
                        <SelectTrigger id="filter-period" className="h-10 w-full">
                            <SelectValue placeholder="Semua Periode" />
                        </SelectTrigger>
                        <SelectContent>
                            {periods.map((p) => (
                                <SelectItem key={p.value} value={p.value}>
                                    {p.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="md:col-span-2">
                    <Select
                        value={query.status ?? 'all'}
                        onValueChange={(value) =>
                            updateQuery({
                                status: value === 'all' ? undefined : value,
                                page: 1,
                            })
                        }
                    >
                        <SelectTrigger id="filter-status" className="h-10 w-full">
                            <SelectValue placeholder="Semua Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {statuses.map((st) => (
                                <SelectItem key={st.value} value={st.value}>
                                    {st.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Status filter pills */}
            <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 overflow-x-auto py-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mr-1 hidden sm:inline">
                        Berkas:
                    </span>
                    <Button
                        variant={!query.status || query.status === 'all' ? 'default' : 'outline'}
                        size="sm"
                        className="rounded-full px-3 py-1 h-8 whitespace-nowrap"
                        onClick={() => updateQuery({ status: undefined, page: 1 })}
                    >
                        Semua ({query.meta?.total ?? 1280})
                    </Button>
                    <Button
                        variant={query.status === 'Tampil Publik' ? 'default' : 'outline'}
                        size="sm"
                        className="rounded-full px-3 py-1 h-8 whitespace-nowrap"
                        onClick={() => updateQuery({ status: 'Tampil Publik', page: 1 })}
                    >
                        Tampil Publik ({query.data?.filter((d: any) => d.is_published).length ?? 1150})
                    </Button>
                    <Button
                        variant={query.status === 'Draft Lampiran' ? 'default' : 'outline'}
                        size="sm"
                        className="rounded-full px-3 py-1 h-8 whitespace-nowrap"
                        onClick={() => updateQuery({ status: 'Draft Lampiran', page: 1 })}
                    >
                        Draft ({query.data?.filter((d: any) => !d.is_published).length ?? 86})
                    </Button>
                    <Button
                        variant={query.status === 'Terarsip' ? 'default' : 'outline'}
                        size="sm"
                        className="rounded-full px-3 py-1 h-8 whitespace-nowrap"
                        onClick={() => updateQuery({ status: 'Terarsip', page: 1 })}
                    >
                        Arsip (44)
                    </Button>
                </div>

                {/* Reset filter */}
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                            updateQuery({
                                search: undefined,
                                category: undefined,
                                format: undefined,
                                period: undefined,
                                status: undefined,
                                page: 1,
                            })
                        }
                        className="h-8 px-3 text-primary hover:underline"
                    >
                        <RotateCcw className="mr-1 size-3" />
                        Reset Filter
                    </Button>
                )}
            </div>
        </Card>
    );
}