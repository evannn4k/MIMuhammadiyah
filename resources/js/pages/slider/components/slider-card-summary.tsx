import { LayoutDashboard, Eye, TrendingUp, RotateCcw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import type { SliderSummary } from '@/types/slider';

interface SliderCardSummaryProps {
    summary: SliderSummary;
}

export default function SliderCardSummary({ summary }: SliderCardSummaryProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* KPI 1: Total Slider Aktif */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Total Slider Aktif
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <LayoutDashboard className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl leading-none font-bold text-foreground">
                            {summary.total_active}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium">/ {summary.max_slots} Max Slot</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1 border-t border-border/20">
                        <Badge className="gap-0.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                            <CheckCircle className="size-3" />
                            Kapasitas optimal
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 2: Total Tayangan */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Total Tayangan
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <Eye className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl leading-none font-bold text-foreground">
                            42.8K
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium">Tayang</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1 border-t border-border/20">
                        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-xs font-medium text-green-600">+18.4% 30 hari terakhir</span>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 3: Rata-Rata CTR */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Rata-Rata CTR
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <TrendingUp className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl leading-none font-bold text-foreground">
                            14.2%
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium">Rasio Klik</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1 border-t border-border/20">
                        <CheckCircle className="size-3 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground truncate">
                            PPDB & Prestasi terpopuler
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 4: Durasi Auto-Play */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Durasi Auto-Play
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <RotateCcw className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl leading-none font-bold text-foreground">
                            5 Detik
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium">/ Slide</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1 border-t border-border/20">
                        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-xs font-medium text-muted-foreground truncate">
                            Status: Otomatis Berganti
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}