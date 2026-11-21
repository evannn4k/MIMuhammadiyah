import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { mockSliders } from './mock';
import type { Slider } from '@/types/slider';
import {
    Calendar,
    Clock,
    Eye,
    ArrowLeft,
    Edit,
    Trash2,
    Image as ImageIcon,
    Monitor,
    Smartphone,
    MousePointerClick,
    LayoutDashboard,
    TrendingUp,
    RotateCcw,
    CheckCircle,
    XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { index as sliderIndex, show as sliderShow } from '@/routes/dashboard/slider';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { formatDate } from '@/lib/utils';

interface SliderShowProps {
    id: string;
}

export default function SliderShow({ id }: SliderShowProps) {
    const sliderId = Number(id);
    const slider = mockSliders.find((s) => s.id === sliderId);

    if (!slider) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <div className="text-center">
                    <h1 className="text-destructive mb-2 text-2xl font-bold">
                        Slider tidak ditemukan
                    </h1>
                    <p className="mb-4 text-muted-foreground">
                        Slider dengan ID {id} tidak ditemukan.
                    </p>
                    <Button asChild onClick={() => window.history.back()}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Kembali ke Daftar
                    </Button>
                </div>
            </div>
        );
    }

    const now = new Date();
    const start = slider.starts_at ? new Date(slider.starts_at) : null;
    const end = slider.ends_at ? new Date(slider.ends_at) : null;
    const isScheduled = start && start > now;
    const isExpired = end && end < now;
    const isActive = slider.is_active && !isScheduled && !isExpired;

    const getStatusConfig = () => {
        if (isActive) {
            return {
                label: 'Aktif',
                className: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                icon: <CheckCircle className="h-3 w-3" />,
            };
        } else if (isScheduled) {
            return {
                label: 'Terjadwal',
                className: 'bg-blue-100 text-blue-800 border-blue-200',
                icon: <Clock className="h-3 w-3" />,
            };
        } else {
            return {
                label: 'Non-Aktif',
                className: 'bg-gray-100 text-gray-800 border-gray-200',
                icon: <XCircle className="h-3 w-3" />,
            };
        }
    };

    const statusConfig = getStatusConfig();
    const deviceLabels: Record<string, string> = {
        all: 'Semua Perangkat (Desktop & HP)',
        desktop: 'Khusus Desktop PC',
        mobile: 'Khusus Layar Ponsel / Mobile',
    };

    const getDeviceIcon = (device: string) => {
        switch (device) {
            case 'desktop':
                return <Monitor className="h-3 w-3" />;
            case 'mobile':
                return <Smartphone className="h-3 w-3" />;
            default:
                return (
                    <span className="flex items-center gap-1">
                        <Monitor className="h-3 w-3" />
                        <Smartphone className="h-3 w-3" />
                    </span>
                );
        }
    };

    return (
        <>
            <Head title={`${slider.title} - Detail Slider`} />
            <div className="flex h-full flex-1 flex-col gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Link
                            href={sliderIndex.url({})}
                            className="mb-2 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Kembali ke Daftar
                        </Link>
                        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                            {slider.title}
                        </h1>
                        {slider.subtitle && (
                            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                {slider.subtitle}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" asChild>
                            <Link href={sliderShow({ slider: slider.id }).url}>
                                <Eye className="mr-2 h-4 w-4" />
                                Pratinjau
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => console.log('Edit slider')}
                        >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                        </Button>
                    </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-muted">
                            <img
                                src={slider.image_path}
                                alt={slider.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h2 className="text-xl font-bold">{slider.title}</h2>
                                {slider.subtitle && (
                                    <p className="mt-1 opacity-90">{slider.subtitle}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="secondary" className="gap-1.5">
                                {statusConfig.icon}
                                {statusConfig.label}
                            </Badge>
                            <Badge variant="outline" className="gap-1.5 flex items-center">
                                <ImageIcon className="h-3 w-3" />
                                Slider Banner
                            </Badge>
                            <Badge variant="outline" className="gap-1.5 flex items-center">
                                {getDeviceIcon(slider.target_device)}
                                {deviceLabels[slider.target_device] || 'Semua Perangkat'}
                            </Badge>
                            <Badge variant="outline" className="gap-1.5 text-primary border-primary">
                                <MousePointerClick className="h-3 w-3" />
                                CTR: 14.2% (estimasi)
                            </Badge>
                            <Badge variant="outline" className="gap-1.5">
                                <LayoutDashboard className="h-3 w-3" />
                                Posisi #{slider.sort_order}
                            </Badge>
                        </div>

                        <Separator />

                        {slider.cta_text && slider.cta_url && (
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Call to Action</h3>
                                <div className="flex items-center gap-2 rounded-lg bg-primary/10 p-3 border border-primary/20">
                                    <MousePointerClick className="size-5 text-primary flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-foreground">{slider.cta_text}</p>
                                        <p className="text-sm text-muted-foreground truncate">{slider.cta_url}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="border-t pt-4">
                            <h3 className="font-medium text-foreground mb-3">Jadwal Tayang</h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Calendar className="size-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Mulai Tayang</p>
                                        <p className="font-medium">
                                            {slider.starts_at
                                                ? formatDate(slider.starts_at)
                                                : 'Tanpa batas (Langsung)'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Clock className="size-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Selesai Tayang</p>
                                        <p className="font-medium">
                                            {slider.ends_at
                                                ? formatDate(slider.ends_at)
                                                : 'Tanpa batas (Selamanya)'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div className="grid gap-4 sm:grid-cols-3">
                            <Card className="bg-muted/50">
                                <CardContent className="flex items-center justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Total Tayangan</span>
                                        <span className="text-2xl font-semibold">42.8K</span>
                                    </div>
                                    <Eye className="size-8 text-muted-foreground" />
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/50">
                                <CardContent className="flex items-center justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Total Klik</span>
                                        <span className="text-2xl font-semibold">6,072</span>
                                    </div>
                                    <MousePointerClick className="size-8 text-muted-foreground" />
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/50">
                                <CardContent className="flex items-center justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Rata-Rata CTR</span>
                                        <span className="text-2xl font-semibold text-primary">14.2%</span>
                                    </div>
                                    <TrendingUp className="size-8 text-primary" />
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Konfigurasi Carousel</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Auto-play</span>
                                    <Badge variant="secondary">Aktif (5 detik/slide)</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Efek Transisi</span>
                                    <Badge variant="outline">Slide Smooth</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Navigasi Panah</span>
                                    <Badge variant="secondary">Tampil</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Indikator Dots</span>
                                    <Badge variant="secondary">Tampil</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Max Slot</span>
                                    <span className="font-semibold">7 Slot</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Slot Terpakai</span>
                                    <span className="font-semibold">5 Slot</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Informasi Sistem</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <LayoutDashboard className="size-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Slider Banner</p>
                                        <p className="text-sm text-muted-foreground">Manajemen Beranda</p>
                                    </div>
                                </div>
                                <div className="border-t pt-3 space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Dibuat pada</span>
                                        <span className="font-medium">{formatDate(slider.created_at)}</span>
                                    </div>
                                    {slider.updated_at && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Diperbarui</span>
                                            <span className="font-medium">{formatDate(slider.updated_at)}</span>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-destructive">
                            <CardHeader>
                                <CardTitle className="text-base text-destructive">Zona Bahaya</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    Menghapus slider akan menghapus permanen data dan tidak dapat dikembalikan.
                                </p>
                                <Button
                                    variant="destructive"
                                    className="w-full"
                                    onClick={() => console.log('Delete slider')}
                                >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Hapus Slider Ini
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

SliderShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Manajemen Slider & Banner Beranda',
            href: dashboardRoutes.slider.index(),
        },
        {
            title: 'Detail Slider',
        },
    ],
};