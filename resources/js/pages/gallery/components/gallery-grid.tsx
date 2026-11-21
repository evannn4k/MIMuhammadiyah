import { Link } from "@inertiajs/react";
import {
    MoreHorizontal,
    Eye,
    Link as LinkIcon,
    Download,
    Trash2,
    Calendar,
    Image as ImageIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { LaravelPagination } from "@/types/pagination";
import type { GalleryItem } from "@/types/gallery";
import { PaginationPage } from "@/components/pagination-page";
import { show as galleryShow } from "@/routes/dashboard/gallery";

interface GalleryGridProps {
    data: LaravelPagination<GalleryItem>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (item: GalleryItem) => void;
    onDelete: (item: GalleryItem) => void;
    onView: (item: GalleryItem) => void;
}

function getStatusBadge(status: GalleryItem["status"]) {
    switch (status) {
        case "Tampil Publik":
            return (
                <Badge
                    variant="default"
                    className="bg-green-50 text-green-700 rounded-full px-2 py-0.5"
                >
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Tampil Publik
                    </span>
                </Badge>
            );
        case "Draft Lampiran":
            return (
                <Badge
                    variant="outline"
                    className="bg-muted text-muted-foreground rounded-full px-2 py-0.5"
                >
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-border" />
                        Draft Lampiran
                    </span>
                </Badge>
            );
        case "Terarsip":
            return (
                <Badge
                    variant="outline"
                    className="bg-muted text-muted-foreground rounded-full px-2 py-0.5"
                >
                    Terarsip
                </Badge>
            );
        default:
            return <Badge variant="outline">{status}</Badge>;
    }
}

function getCategoryColor(category: string): string {
    switch (category) {
        case "Seni & Budaya":
            return "text-primary";
        case "Ekstrakurikuler":
            return "text-blue-600";
        case "Upacara & Resmi":
            return "text-green-600";
        case "Kunjungan Edukasi":
            return "text-orange-600";
        case "Kepemimpinan":
            return "text-purple-600";
        case "Fasilitas Sekolah":
            return "text-gray-600";
        default:
            return "text-foreground";
    }
}

export default function GalleryGrid({
    data,
    query,
    updateQuery,
    onEdit,
    onDelete,
    onView,
}: GalleryGridProps) {
    return (
        <Card className="overflow-hidden bg-muted/50 pb-0">
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {data.data && data.data.length > 0 ? (
                        data.data.map((item: GalleryItem) => (
                            <Card
                                key={item.id}
                                className="gap-0 flex flex-col overflow-hidden bg-muted/50 p-0 h-full"
                            >
                                {/* Image section - full width, larger */}
                                <div className="relative aspect-video overflow-hidden bg-muted">
                                    {item.image_url ? (
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                            alt={item.title}
                                            src={item.image_url}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <ImageIcon className="size-12 text-muted-foreground/50" />
                                        </div>
                                    )}
                                    {/* Format badge on image */}
                                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-bold text-white uppercase">
                                        {item.format.split(" ")[0]}
                                    </span>
                                    {/* Status badge on image */}
                                    <div className="absolute top-2 left-2">
                                        {getStatusBadge(item.status)}
                                    </div>

                                    <div className="absolute top-2 right-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 shrink-0 bg-muted/50"
                                                    title="Aksi Lainnya"
                                                >
                                                    <MoreHorizontal className="size-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                    Aksi
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={
                                                            galleryShow({
                                                                gallery:
                                                                    item.id,
                                                            }).url
                                                        }
                                                    >
                                                        <Eye className="mr-2 size-4" />
                                                        Detail
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() => onEdit(item)}
                                                >
                                                    <LinkIcon className="mr-2 size-4" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    variant="destructive"
                                                    onClick={() =>
                                                        onDelete(item)
                                                    }
                                                >
                                                    <Trash2 className="mr-2 size-4" />
                                                    Hapus
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>

                                {/* Content section - below image */}
                                <CardContent className="p-4 space-y-1 flex-1">
                                    <h3
                                        className="font-medium text-foreground line-clamp-2 text-wrap"
                                        title={item.title}
                                    >
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span
                                            className={`font-medium ${getCategoryColor(item.category)}`}
                                        >
                                            {item.category}
                                        </span>
                                        <span>•</span>
                                        <span>{item.dimensions}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="size-3" />
                                            {item.uploaded_at}
                                        </span>
                                        <span className="font-medium">
                                            {item.file_size}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <span className="truncate">
                                            Uploaded By : {item.uploaded_by}
                                        </span>
                                    </div>
                                </CardContent>

                                {/* Actions footer */}
                                <CardFooter className="flex items-center justify-between gap-1 border-t p-2">
                                    <div className="flex flex-1 items-center justify-between gap-1">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 px-2 text-xs"
                                            onClick={() => onView(item)}
                                            title="Lihat Foto"
                                        >
                                            <Eye className="size-3.5" />
                                            <span className="hidden lg:inline">
                                                Preview
                                            </span>
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 px-2 text-xs"
                                            title="Salin Tautan"
                                        >
                                            <LinkIcon className="size-3.5" />
                                            <span className="hidden lg:inline">
                                                Tautan
                                            </span>
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 px-2 text-xs"
                                            title="Unduh Foto"
                                        >
                                            <Download className="size-3.5" />
                                            <span className="hidden lg:inline">
                                                Unduh
                                            </span>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full h-64 flex items-center justify-center">
                            <p className="text-muted-foreground">
                                Tidak ada data.
                            </p>
                        </div>
                    )}
                </div>
            </CardContent>
            {/* Pagination */}
            <PaginationPage
                updateQuery={updateQuery}
                links={data.links}
                meta={data.meta}
            />
        </Card>
    );
}
