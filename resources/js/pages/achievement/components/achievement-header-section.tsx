import { Trophy, Plus, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AchievementHeaderSectionProps {
    onCreateAchievement: () => void;
    onExport?: () => void;
}

export default function AchievementHeaderSection({
    onCreateAchievement,
    onExport,
}: AchievementHeaderSectionProps) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-3xl flex-col gap-1.5">
                <nav className="font-label-sm text-label-sm flex items-center gap-1.5 text-muted-foreground">
                    <a
                        className="transition-colors hover:text-primary"
                        href="#"
                    >
                        Beranda
                    </a>
                    <span className="material-symbols-outlined text-xs">
                        chevron_right
                    </span>
                    <a
                        className="transition-colors hover:text-primary"
                        href="#"
                    >
                        Publikasi
                    </a>
                    <span className="material-symbols-outlined text-xs">
                        chevron_right
                    </span>
                    <span className="font-semibold text-foreground">
                        Prestasi & Penghargaan
                    </span>
                </nav>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Manajemen Prestasi & Penghargaan
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Kelola arsip rekam jejak capaian akademik, kompetisi, dan
                    penghargaan siswa, guru, serta institusi.
                </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
                <Button variant="outline" onClick={onExport} className="gap-2">
                    <Download className="size-4" />
                    <span>Ekspor Rekap (Excel/PDF)</span>
                </Button>
                <Button onClick={onCreateAchievement} className="gap-2">
                    <Plus className="size-4" />
                    <span>+ Tambah Prestasi Baru</span>
                </Button>
            </div>
        </div>
    );
}
