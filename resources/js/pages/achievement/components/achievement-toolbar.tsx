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

interface AchievementToolbarProps {
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onCreate: () => void;
}

const categories = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'Akademik', label: 'Akademik' },
    { value: 'Non-Akademik', label: 'Non-Akademik' },
    { value: 'Olahraga', label: 'Olahraga' },
    { value: 'Seni & Budaya', label: 'Seni & Budaya' },
    { value: 'Keagamaan', label: 'Keagamaan' },
];

const levels = [
    { value: 'all', label: 'Semua Tingkat' },
    { value: 'Sekolah', label: 'Sekolah' },
    { value: 'Kecamatan', label: 'Kecamatan' },
    { value: 'Kabupaten / Kota', label: 'Kabupaten / Kota' },
    { value: 'Provinsi', label: 'Provinsi' },
    { value: 'Nasional', label: 'Nasional' },
    { value: 'Internasional', label: 'Internasional' },
];

const recipientTypes = [
    { value: 'all', label: 'Semua Penerima' },
    { value: 'student', label: 'Siswa (Student)' },
    { value: 'teacher', label: 'Guru (Teacher)' },
    { value: 'school', label: 'Sekolah (School)' },
];

const years = [
    { value: 'all', label: 'Semua Tahun' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
];

const statuses = [
    { value: 'all', label: 'Semua Status' },
    { value: 'true', label: 'Tayang di Publik' },
    { value: 'false', label: 'Draft / Arsip' },
];

export default function AchievementToolbar({
    query,
    updateQuery,
    onCreate,
}: AchievementToolbarProps) {
    const hasActiveFilters =
        query.search ||
        (query.category && query.category !== 'all') ||
        (query.level && query.level !== 'all') ||
        (query.recipient_type && query.recipient_type !== 'all') ||
        (query.achievement_year && query.achievement_year !== 'all') ||
        (query.is_published && query.is_published !== 'all');

    return (
        <Card className="bg-muted/50 space-y-4 rounded-xl p-4">
            {/* Search and primary filter row */}
            <div className="flex flex-col items-stretch justify-between gap-3 lg:flex-row lg:items-center">
                {/* Search bar */}
                <div className="max-w-xl flex-1">
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
                            placeholder="Cari nama kompetisi, judul prestasi, atau nama siswa / guru..."
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
                {/* Meta status / Active filter pills badge count */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                        Menampilkan {query.data?.length ?? 5} dari{' '}
                        {query.meta?.total ?? 142} data
                    </span>
                    {hasActiveFilters && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                updateQuery({
                                    search: undefined,
                                    category: undefined,
                                    level: undefined,
                                    recipient_type: undefined,
                                    achievement_year: undefined,
                                    is_published: undefined,
                                    page: 1,
                                })
                            }
                            className="h-auto p-0 text-primary hover:underline"
                        >
                            <RotateCcw className="mr-1 size-3" />
                            Reset Filter
                        </Button>
                    )}
                </div>
            </div>

            {/* Advanced Filter Selectors Row */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3 lg:grid-cols-5">
                {/* Filter Kategori */}
                <div className="flex flex-col gap-1">
                    <Label className="text-xs text-muted-foreground">
                        Kategori
                    </Label>
                    <div className="relative">
                        <Select
                            value={query.category ?? 'all'}
                            onValueChange={(value) =>
                                updateQuery({
                                    category:
                                        value === 'all' ? undefined : value,
                                    page: 1,
                                })
                            }
                        >
                            <SelectTrigger
                                id="filter-category"
                                className="h-9 w-full"
                            >
                                <SelectValue placeholder="Semua Kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((cat) => (
                                    <SelectItem
                                        key={cat.value}
                                        value={cat.value}
                                    >
                                        {cat.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Filter Tingkat */}
                <div className="flex flex-col gap-1">
                    <Label className="text-xs text-muted-foreground">
                        Tingkat Lomba
                    </Label>
                    <div className="relative">
                        <Select
                            value={query.level ?? 'all'}
                            onValueChange={(value) =>
                                updateQuery({
                                    level: value === 'all' ? undefined : value,
                                    page: 1,
                                })
                            }
                        >
                            <SelectTrigger
                                id="filter-level"
                                className="h-9 w-full"
                            >
                                <SelectValue placeholder="Semua Tingkat" />
                            </SelectTrigger>
                            <SelectContent>
                                {levels.map((lvl) => (
                                    <SelectItem
                                        key={lvl.value}
                                        value={lvl.value}
                                    >
                                        {lvl.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Filter Penerima */}
                <div className="flex flex-col gap-1">
                    <Label className="text-xs text-muted-foreground">
                        Penerima
                    </Label>
                    <div className="relative">
                        <Select
                            value={query.recipient_type ?? 'all'}
                            onValueChange={(value) =>
                                updateQuery({
                                    recipient_type:
                                        value === 'all' ? undefined : value,
                                    page: 1,
                                })
                            }
                        >
                            <SelectTrigger
                                id="filter-recipient"
                                className="h-9 w-full"
                            >
                                <SelectValue placeholder="Semua Penerima" />
                            </SelectTrigger>
                            <SelectContent>
                                {recipientTypes.map((rt) => (
                                    <SelectItem key={rt.value} value={rt.value}>
                                        {rt.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Filter Tahun */}
                <div className="flex flex-col gap-1">
                    <Label className="text-xs text-muted-foreground">
                        Tahun Capaian
                    </Label>
                    <div className="relative">
                        <Select
                            value={query.achievement_year ?? 'all'}
                            onValueChange={(value) =>
                                updateQuery({
                                    achievement_year:
                                        value === 'all' ? undefined : value,
                                    page: 1,
                                })
                            }
                        >
                            <SelectTrigger
                                id="filter-year"
                                className="h-9 w-full"
                            >
                                <SelectValue placeholder="Semua Tahun" />
                            </SelectTrigger>
                            <SelectContent>
                                {years.map((yr) => (
                                    <SelectItem key={yr.value} value={yr.value}>
                                        {yr.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Filter Status Publikasi */}
                <div className="flex flex-col gap-1">
                    <Label className="text-xs text-muted-foreground">
                        Status Publikasi
                    </Label>
                    <div className="relative">
                        <Select
                            value={query.is_published ?? 'all'}
                            onValueChange={(value) =>
                                updateQuery({
                                    is_published:
                                        value === 'all' ? undefined : value,
                                    page: 1,
                                })
                            }
                        >
                            <SelectTrigger
                                id="filter-status"
                                className="h-9 w-full"
                            >
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
            </div>
        </Card>
    );
}
