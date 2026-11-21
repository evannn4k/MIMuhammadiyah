import { Plus, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SliderHeaderSectionProps {
    onCreateSlider: () => void;
}

export default function SliderHeaderSection({ onCreateSlider }: SliderHeaderSectionProps) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-3xl flex-col gap-1.5">
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-semibold">
                        Portal Beranda
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <LayoutDashboard className="size-3.5 text-primary" />
                        Carousel v2.0
                    </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Manajemen Slider & Banner Beranda
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Atur urutan banner slide utama, jadwal tayang, CTA tautan, dan visibilitas pada
                    halaman beranda portal web sekolah SMA Negeri 1 Prestasi.
                </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
                <Button variant="outline" onClick={() => console.log('Preview web beranda')}>
                    Pratinjau Web Beranda
                </Button>
                <Button onClick={onCreateSlider}>
                    <Plus className="mr-2 h-4 w-4" />
                    + Tambah Banner Slide
                </Button>
            </div>
        </div>
    );
}