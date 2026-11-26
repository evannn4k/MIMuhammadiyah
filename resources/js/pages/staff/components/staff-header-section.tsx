import { useModal } from '@/hooks/use-modal';
import { Button } from '@/components/ui/button';
import { FileDown, UserPlus } from 'lucide-react';

interface StaffHeaderSectionProps {
    onCreate: () => void;
}

export default function StaffHeaderSection({ onCreate }: StaffHeaderSectionProps) {
    return (
        <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="hover:text-primary transition-colors cursor-pointer">
                    Beranda
                </span>
                <span>/</span>
                <span className="hover:text-primary transition-colors cursor-pointer">
                    Profil Sekolah
                </span>
                <span>/</span>
                <span className="font-semibold text-foreground">
                    Direktori Guru & Staf
                </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-1">
                <div className="flex flex-col max-w-3xl">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">
                        Manajemen Direktori Guru & Tenaga Kependidikan
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Kelola data pimpinan sekolah, tenaga pengajar, dan staf
                        operasional, informasi mata pelajaran, pendidikan terakhir,
                        serta status visibilitas profil di portal publik SMA Negeri 1
                        Prestasi.
                    </p>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0">
                    <Button variant="outline" size="sm" className="h-9 gap-2">
                        <FileDown className="size-4 text-secondary" />
                        <span>Export / Unduh Data</span>
                    </Button>
                    <Button size="sm" className="h-9 gap-2" onClick={onCreate}>
                        <UserPlus className="size-4" />
                        <span>Tambah Pendidik / Staf</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
