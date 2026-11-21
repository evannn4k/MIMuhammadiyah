import {
    Image as ImageIcon,
    Calendar,
    Tag,
    FileImage,
    HardDrive,
    Globe,
    Archive,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { GalleryItem } from '@/types/gallery';

interface GalleryDetailProps {
    id: string | number;
}

function getStatusBadge(status: GalleryItem['status']) {
    switch (status) {
        case 'Tampil Publik':
            return (
                <Badge variant="default" className="bg-green-50 text-green-700">
                    Tayang Live
                </Badge>
            );
        case 'Draft Lampiran':
            return (
                <Badge variant="outline" className="bg-muted text-muted-foreground">
                    Draft Arsip
                </Badge>
            );
        case 'Terarsip':
            return (
                <Badge variant="outline" className="bg-muted text-muted-foreground">
                    Terarsip
                </Badge>
            );
        default:
            return <Badge variant="outline">{status}</Badge>;
    }
}

function getCategoryColor(category: string): string {
    switch (category) {
        case 'Seni & Budaya':
            return 'bg-primary/10 text-primary';
        case 'Ekstrakurikuler':
            return 'bg-blue-100 text-blue-700';
        case 'Upacara & Resmi':
            return 'bg-green-100 text-green-700';
        case 'Kunjungan Edukasi':
            return 'bg-orange-100 text-orange-700';
        case 'Kepemimpinan':
            return 'bg-purple-100 text-purple-700';
        case 'Fasilitas Sekolah':
            return 'bg-gray-100 text-gray-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
}

export default function GalleryDetail({ id }: GalleryDetailProps) {
    // TODO(backend): props dari controller { item: GalleryItem }
    const item: GalleryItem = {
        id: typeof id === 'string' ? parseInt(id) : id,
        title: 'Hari_Pahlawan_Pentas_Budaya_01.jpg',
        category: 'Seni & Budaya',
        format: 'JPG / JPEG',
        file_size: '2.8 MB',
        dimensions: '1920 × 1080 px',
        status: 'Tampil Publik',
        period: 'TA 2024/2025',
        uploaded_at: '2024-11-10',
        uploaded_by: 'Tim Media',
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBxN8x9zPQlSxjx5H86z6bdmp3lLwCx43jnTKI4Ylte-fVfROBnSUy-YARHNhCmo3xtGO3g6OcrPMUMbucqplB2m6mT1ibYexMCtgYKUpvWWh92ZKZGe1HcCPTdzk9BTI__YIEIGmStRKx7dgUVRFPu9dpbsG_zHkee81iJ_e16bCBQUBj7Uw2FASlK6X8zo2M4L7iJ8VME_8Q9GRBqowPh9EL69hcCdv_M57GQMfBc',
        is_published: true,
    };

    return (
        <div className="grid gap-6 lg:grid-cols-3">
            {/* Visual Section */}
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ImageIcon />
                        Visual & Informasi Utama
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {item.image_url ? (
                        <div className="relative aspect-video overflow-hidden rounded-xl border">
                            <img
                                src={item.image_url}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ) : null}

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className={getCategoryColor(item.category)}>
                                {item.category}
                            </Badge>
                            <Badge variant="outline" className="bg-muted text-muted-foreground">
                                {item.format}
                            </Badge>
                            {getStatusBadge(item.status)}
                        </div>

                        <h3 className="text-2xl font-bold text-foreground">
                            {item.title}
                        </h3>

                        <div className="flex flex-wrap gap-4 border-t pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <FileImage className="size-4" />
                                {item.file_size}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <ImageIcon className="size-4" />
                                {item.dimensions}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Tag className="size-4" />
                                {item.period}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                            <Calendar className="size-4" />
                            {item.uploaded_at} • {item.uploaded_by}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Detail Section */}
            <div className="grid gap-4 lg:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Kategori & Format
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Tag className="size-4" />
                            </div>
                            <div>
                                <p className="font-medium">{item.category}</p>
                                <p className="text-xs text-muted-foreground">Kategori lampiran</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <FileImage className="size-4" />
                            </div>
                            <div>
                                <p className="font-medium">{item.format}</p>
                                <p className="text-xs text-muted-foreground">Format file</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                                <Calendar className="size-4" />
                            </div>
                            <div>
                                <p className="font-medium">{item.period}</p>
                                <p className="text-xs text-muted-foreground">Periode akademik</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Spesifikasi File
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-xs text-muted-foreground">Ukuran File</p>
                            <p className="font-medium">{item.file_size}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Dimensi</p>
                            <p className="font-medium">{item.dimensions}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Status & Publikasi
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-xs text-muted-foreground">Status</p>
                            <p className="font-medium">{getStatusBadge(item.status)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Visibilitas Web</p>
                            <p className="font-medium">
                                {item.is_published ? (
                                    <Badge variant="default" className="bg-green-50 text-green-700">
                                        Tayang Live
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="bg-muted text-muted-foreground">
                                        Tidak Tampil
                                    </Badge>
                                )}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Informasi Unggah
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-xs text-muted-foreground">Diunggah Oleh</p>
                            <p className="font-medium">{item.uploaded_by}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Tanggal Unggah</p>
                            <p className="flex items-center gap-1 font-medium">
                                <Calendar className="size-3 text-muted-foreground" />
                                {item.uploaded_at}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}