import { Image, FileImage, CheckCircle, HardDrive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { GallerySummary } from "@/types/gallery";

interface GalleryCardSummaryProps {
    summary: GallerySummary;
}

export default function GalleryCardSummary({
    summary,
}: GalleryCardSummaryProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KPI 1: Total Lampiran Foto */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Total Lampiran Foto
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <Image className="size-5" />
                        </span>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl leading-none font-bold text-foreground">
                                {summary.total_attachments.toLocaleString(
                                    "id-ID",
                                )}
                            </span>
                            <span className="text-xs font-medium text-muted-foreground">
                                Berkas
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1 border-t border-border/20">
                        <Badge className="gap-0.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                            <CheckCircle className="size-3" />+
                            {summary.uploaded_this_month}
                        </Badge>
                        <span className="text-xs font-medium text-muted-foreground truncate">
                            diunggah bulan ini
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 2: Foto Terlampir Aktif */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Foto Terlampir Aktif
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <FileImage className="size-5" />
                        </span>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl leading-none font-bold text-foreground">
                                {summary.active_attachments.toLocaleString(
                                    "id-ID",
                                )}
                            </span>
                            <span className="text-xs font-medium text-muted-foreground">
                                Foto
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1 border-t border-border/20">
                        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-xs font-medium text-muted-foreground truncate">
                            {summary.active_attachments.toLocaleString("id-ID")}{" "}
                            Tampil Publik
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 3: Format Terbanyak */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Format Terbanyak
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <Image className="size-5" />
                        </span>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl leading-none font-bold text-foreground">
                                {summary.top_formats}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1 border-t border-border/20">
                        <CheckCircle className="size-3 text-green-500" />
                        <span className="text-xs font-medium text-muted-foreground truncate">
                            Kompresi Otomatis CDN Aktif
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 4: Kapasitas Terpakai */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Kapasitas Terpakai
                        </span>
                        <span className="bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg text-primary">
                            <HardDrive className="size-5" />
                        </span>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex items-baseline justify-between">
                            <span className="text-3xl leading-none font-bold text-foreground">
                                {summary.storage_used}
                            </span>
                            <span className="text-xs font-medium text-muted-foreground">
                                dari {summary.storage_total}
                            </span>
                        </div>
                        <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-full rounded-full transition-all duration-500"
                                style={{
                                    width: `${summary.storage_percentage}%`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-border/20">
                        <span className="text-xs font-medium text-muted-foreground">
                            {summary.storage_percentage}% Terpakai
                        </span>
                        <span className="text-xs font-semibold text-green-600">
                            Tersedia{" "}
                            {parseFloat(summary.storage_total) -
                                parseFloat(summary.storage_used)}{" "}
                            GB
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
