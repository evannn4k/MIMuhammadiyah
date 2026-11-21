import { Upload, ImagePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryHeaderSectionProps {
    onBulkUpload: () => void;
    onCreate: () => void;
}

export default function GalleryHeaderSection({
    onBulkUpload,
    onCreate,
}: GalleryHeaderSectionProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                    <a className="transition-colors hover:text-primary" href="#">
                        Beranda
                    </a>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <a className="transition-colors hover:text-primary" href="#">
                        Publikasi
                    </a>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="font-semibold text-foreground">Lampiran Foto</span>
                </nav>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Manajemen Lampiran Foto & Dokumentasi
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Kelola lampiran foto, arsip berkas visual dokumentasi kegiatan, dan aset gambar
                    publikasi sekolah tanpa sistem galeri/album bertingkat.
                </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap self-start md:self-auto">
                <Button variant="outline" onClick={onBulkUpload} className="gap-2 h-9 px-4 rounded-xl">
                    <Upload className="size-4" />
                    <span>Unggah Massal</span>
                </Button>
                <Button onClick={onCreate} className="gap-2 h-9 px-4 rounded-xl">
                    <ImagePlus className="size-4" />
                    <span>+ Unggah Foto / Lampiran</span>
                </Button>
            </div>
        </div>
    );
}