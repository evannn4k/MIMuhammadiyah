import { Badge } from '@/components/ui/badge';
import { BadgeCheck, GraduationCap, Users, Eye } from 'lucide-react';

interface StaffCardSummaryProps {
    summary: {
        total: number;
        active_teachers: number;
        staff_count: number;
        leadership_count: number;
        visible_count: number;
        hidden_count: number;
    };
}

export default function StaffCardSummary({ summary }: StaffCardSummaryProps) {
    // TODO(backend): replace with real data from props
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* KPI 1 */}
            <div className="bg-card p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        Total Guru & Staf
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Users className="size-4" />
                    </div>
                </div>
                <div className="my-2">
                    <div className="text-xl font-bold tracking-tight text-foreground">
                        {summary?.total ?? 0}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            Orang
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-1 text-xs">
                    <span className="inline-flex items-center gap-1 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {summary?.active_teachers ?? 0} Guru Aktif
                    </span>
                    <span className="text-muted-foreground">
                        • {summary?.staff_count ?? 0} Staf TU & Teknis
                    </span>
                </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-card p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        Tenaga Pendidik (Teacher)
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                        <GraduationCap className="size-4" />
                    </div>
                </div>
                <div className="my-2">
                    <div className="text-xl font-bold tracking-tight text-foreground">
                        {summary?.active_teachers ?? 0}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            Pendidik
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 pt-1 text-xs">
                    <span className="inline-flex items-center gap-1 font-medium px-2 py-0.5 rounded-full bg-muted text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        100% Tersertifikasi
                    </span>
                    <span className="text-muted-foreground">PPG & Sergur</span>
                </div>
            </div>

            {/* KPI 3 */}
            <div className="bg-card p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        Pimpinan (Leadership)
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-primary">
                        <BadgeCheck className="size-4" />
                    </div>
                </div>
                <div className="my-2">
                    <div className="text-xl font-bold tracking-tight text-foreground">
                        {summary?.leadership_count ?? 0}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            Orang
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                        Kepala Sekolah
                    </span>
                    <span>&</span>
                    <span className="font-medium text-foreground">
                        5 Wakil Kepala
                    </span>
                </div>
            </div>

            {/* KPI 4 */}
            <div className="bg-card p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        Status Aktif Publik
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                        <Eye className="size-4" />
                    </div>
                </div>
                <div className="my-2">
                    <div className="text-xl font-bold tracking-tight text-emerald-600">
                        {summary?.visible_count ?? 0}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            Tampil
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-1 text-xs">
                    <span className="inline-flex items-center gap-1 font-medium px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">
                        {summary?.hidden_count ?? 0} Disembunyikan
                    </span>
                    <span className="text-muted-foreground">Cuti / Mutasi</span>
                </div>
            </div>
        </div>
    );
}
