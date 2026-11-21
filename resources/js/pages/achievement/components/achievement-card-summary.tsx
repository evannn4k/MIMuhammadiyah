import { Trophy, Users, Globe, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AchievementSummary } from "@/types/achievement";

interface AchievementCardSummaryProps {
    summary: AchievementSummary;
}

export default function AchievementCardSummary({
    summary,
}: AchievementCardSummaryProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* KPI 1: Total Prestasi Terdata */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                            Total Prestasi Terdata
                        </span>
                        <span className="bg-surface-container-high flex h-8 w-8 items-center justify-center rounded-lg text-primary">
                            <Trophy className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="text-4xl leading-none font-bold text-foreground">
                            {summary.total}
                        </div>
                        <div className="mt-2 flex items-center gap-1.5">
                            <Badge className="gap-0.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                                <TrendingUp className="size-3" />
                                +18
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                                sepanjang tahun 2024
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 2: Nasional & Internasional */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                            Nasional & Internasional
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                            <Award className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="text-4xl leading-none font-bold text-foreground">
                            {summary.national_international}{" "}
                            <span className="text-lg font-normal text-muted-foreground">
                                Gelar
                            </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-semibold text-blue-600">
                                {summary.national_count} Nasional
                            </span>
                            <span>•</span>
                            <span className="font-semibold text-primary">
                                {summary.international_count} Internasional
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 3: Distribusi Penerima */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    {" "}
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                            Distribusi Penerima
                        </span>
                        <span className="bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground">
                            <Users className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-foreground">
                                {summary.recipient_students}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                Siswa
                            </span>
                            <span className="text-muted-foreground">/</span>
                            <span className="text-xl font-semibold text-muted-foreground">
                                {summary.recipient_teachers}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                Guru
                            </span>
                            <span className="text-muted-foreground">/</span>
                            <span className="text-xl font-semibold text-muted-foreground">
                                {summary.recipient_schools}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                Sekolah
                            </span>
                        </div>
                        <div className="bg-surface-container-high mt-3 flex h-2 w-full overflow-hidden rounded-full">
                            <div
                                className="h-full bg-primary"
                                style={{
                                    width: `${Math.round((summary.recipient_students / summary.total) * 100)}%`,
                                }}
                            ></div>
                            <div
                                className="h-full bg-blue-500"
                                style={{
                                    width: `${Math.round((summary.recipient_teachers / summary.total) * 100)}%`,
                                }}
                            ></div>
                            <div
                                className="h-full bg-green-500"
                                style={{
                                    width: `${Math.round((summary.recipient_schools / summary.total) * 100)}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* KPI 4: Publikasi Portal Web */}
            <Card className="bg-muted/50">
                <CardContent className="flex flex-col justify-between h-full">
                    {" "}
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                            Publikasi Portal Web
                        </span>
                        <span className="bg-surface-container-low flex h-8 w-8 items-center justify-center rounded-lg text-green-600">
                            <Globe className="size-5" />
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-4xl leading-none font-bold text-foreground">
                                {summary.published_count}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                / {summary.total_count} Tayang
                            </span>
                        </div>
                        <div className="mt-2 flex items-center gap-1.5">
                            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
                            <span className="text-xs text-muted-foreground">
                                {summary.sync_percentage}% Sinkronisasi Live
                            </span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">
                                {summary.draft_count} Draft Arsip
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
