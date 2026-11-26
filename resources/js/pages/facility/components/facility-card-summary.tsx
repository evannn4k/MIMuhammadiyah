import { Building2, CircleCheck, CircleX, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FacilityCardSummaryProps {
    summary: {
        total: number;
        good: number;
        repair: number;
        active_web: number;
    };
}

export default function FacilityCardSummary({
    summary,
}: FacilityCardSummaryProps) {
    const items = [
        { label: "Total Fasilitas", value: summary.total, icon: Building2 },
        { label: "Kondisi Baik", value: summary.good, icon: CircleCheck },
        { label: "Butuh Perbaikan", value: summary.repair, icon: CircleX },
        { label: "Tampil di Web", value: summary.active_web, icon: Eye },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
                <Card key={item.label} className="bg-muted/50">
                    <CardContent className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">
                                {item.label}
                            </span>
                            <span className="text-2xl font-semibold">
                                {item.value}
                            </span>
                        </div>
                        <item.icon className="size-8 text-muted-foreground" />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
