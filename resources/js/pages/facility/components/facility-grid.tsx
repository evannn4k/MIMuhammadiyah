import { Link } from '@inertiajs/react';
import {
    Eye,
    MoreHorizontal,
    Edit,
    Trash2,
    Image,
    RefreshCw,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/use-modal';
import type { Facility } from '@/types/facility';
import { show as facilityShow } from '@/routes/dashboard/facility';
import { PaginationPage } from '@/components/pagination-page';
import { LaravelPagination } from '@/types/pagination';

const conditionBadgeClass: Record<'good' | 'fair' | 'repair', string> = {
    good: 'bg-emerald-500 text-emerald-100',
    fair: 'bg-amber-500 text-amber-100',
    repair: 'bg-destructive text-destructive-100',
};

interface FacilityGridProps {
    data: LaravelPagination<Facility>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (facility: Facility) => void;
    onDelete: (facility: Facility) => void;
    onView: (facility: Facility) => void;
}

export default function FacilityGrid({
    data,
    query,
    updateQuery,
    onEdit,
    onDelete,
    onView,
}: FacilityGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.data && data.data.length > 0 ? (
                data.data.map((facility: Facility) => (
                    <Card
                        key={facility.id}
                        className="gap-0 flex flex-col overflow-hidden bg-muted/50 p-0 h-full border rounded-xl"
                    >
                        {/* Image section */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                            <img
                                src={facility.image_url}
                                alt={facility.name}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                            {/* Status badge */}
                            <Badge
                                className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold ${conditionBadgeClass[facility.condition]}`}
                            >
                                {facility.condition}
                            </Badge>
                            {/* Publication status */}
                            <Badge
                                className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/20 text-secondary"
                            >
                                {facility.published ? 'Tampil' : 'Draft'}
                            </Badge>
                        </div>

                        {/* Content area */}
                        <CardContent className="p-4 flex-1 flex flex-col space-y-2">
                            <h3
                                className="font-medium text-foreground line-clamp-2 text-sm truncate"
                            >
                                {facility.name}
                            </h3>

                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <span className="font-medium">{facility.capacity_label}</span>
                                <span>•</span>
                                <span>{facility.condition}</span>
                            </div>

                            <p className="font-sm text-muted-foreground line-clamp-2">
                                {facility.description}
                            </p>
                        </CardContent>

                        {/* Action footer */}
                        <CardFooter className="flex items-center justify-between gap-2 p-3 border-t">
                            <div className="flex items-center gap-1.5">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 px-1.5 text-xs"
                                    title="Lihat Detail"
                                    onClick={() => onView(facility)}
                                >
                                    <Eye className="size-3.5" />
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-7 px-1.5 text-xs"
                                            title="Menu Opsi"
                                        >
                                            <MoreHorizontal className="size-3.5" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild>
                                            <Link href={facilityShow({ facility: facility.id }).url}>
                                                <Edit className="size-3.5 mr-1" />
                                                Edit
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            variant="destructive"
                                            onClick={() => onDelete(facility)}
                                        >
                                            <Trash2 className="size-3.5 mr-1" />
                                            Hapus
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            {/* View status pill */}
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                {facility.published ? (
                                    <span>
                                        <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" />
                                        Publik
                                    </span>
                                ) : (
                                    <span>
                                        <span className="w-1 h-1 rounded-full bg-muted inline-block" />
                                        Draft
                                    </span>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                ))
            ) : (
                <div className="col-span-full h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Tidak ada data.</p>
                </div>
            )}
        </div>
    );
}