import { Button } from '@/components/ui/button';
import { Printer, Plus } from 'lucide-react';

interface FacilityHeaderSectionProps {
    onCreate: () => void;
}

export default function FacilityHeaderSection({ onCreate }: FacilityHeaderSectionProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-card p-6 rounded-xl shadow-sm border">
            <div className="space-y-1 max-w-3xl">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="hover:text-primary transition-colors cursor-pointer">Beranda</span>
                    <span>/</span>
                    <span className="hover:text-primary transition-colors cursor-pointer">Profil Sekolah</span>
                    <span>/</span>
                    <span className="text-foreground font-semibold">Fasilitas Sekolah</span>
                </nav>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Manajemen Sarana & Fasilitas Sekolah
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Inventarisasi dan kelola informasi ruang belajar, laboratorium, sarana olahraga, kapasitas ruang, kondisi fisik, serta status publikasi profil fasilitas pada website resmi.
                </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 self-start md:self-end">
                <Button variant="outline" size="sm" className="h-9 gap-2">
                    <Printer className="size-4" />
                    <span>Cetak Laporan Sarpras</span>
                </Button>
                <Button size="sm" className="h-9 gap-2" onClick={onCreate}>
                    <Plus className="size-4" />
                    <span>+ Tambah Fasilitas Baru</span>
                </Button>
            </div>
        </div>
    );
}