import { Link } from "@inertiajs/react";
import {
    GripVertical,
    Image,
    Monitor,
    Smartphone,
    MousePointerClick,
    Calendar,
    Clock,
    Maximize2,
    Copy,
    Edit,
    Trash2,
    CheckCircle,
    AlertCircle,
    XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import type { Slider } from "@/types/slider";
import type { LaravelPagination } from "@/types/pagination";
import { show as showSlider } from "@/routes/dashboard/slider";
import { PaginationPage } from "@/components/pagination-page";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

interface SliderListProps {
    data: LaravelPagination<Slider>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (slider: Slider) => void;
    onDelete: (slider: Slider) => void;
    onView: (slider: Slider) => void;
}

const deviceLabels: Record<string, string> = {
    all: "Desktop & Mobile",
    desktop: "Desktop Khusus",
    mobile: "Mobile Khusus",
};

function getStatusConfig(slider: Slider) {
    const now = new Date();
    const start = slider.starts_at ? new Date(slider.starts_at) : null;
    const end = slider.ends_at ? new Date(slider.ends_at) : null;
    const isScheduled = start && start > now;
    const isExpired = end && end < now;
    const isActive = slider.is_active && !isScheduled && !isExpired;

    if (isActive) {
        return {
            label: "Aktif",
            className: "bg-emerald-100 text-emerald-800 border-emerald-200",
            icon: <CheckCircle className="h-3 w-3" />,
            toggleColor: "bg-emerald-500",
        };
    } else if (isScheduled) {
        return {
            label: "Terjadwal",
            className: "bg-blue-100 text-blue-800 border-blue-200",
            icon: <Clock className="h-3 w-3" />,
            toggleColor: "bg-blue-500",
        };
    } else {
        return {
            label: "Non-Aktif",
            className: "bg-gray-100 text-gray-800 border-gray-200",
            icon: <XCircle className="h-3 w-3" />,
            toggleColor: "bg-gray-400",
        };
    }
}

function getDeviceIcon(device: string) {
    switch (device) {
        case "desktop":
            return <Monitor className="h-3 w-3" />;
        case "mobile":
            return <Smartphone className="h-3 w-3" />;
        default:
            return (
                <span className="flex items-center gap-1">
                    <Monitor className="h-3 w-3" />
                    <Smartphone className="h-3 w-3" />
                </span>
            );
    }
}

export default function SliderList({
    data,
    query,
    updateQuery,
    onEdit,
    onDelete,
    onView,
}: SliderListProps) {
    return (
        <div className="space-y-4">
            {data.data.map((slider: Slider) => {
                const statusConfig = getStatusConfig(slider);
                const deviceLabel =
                    deviceLabels[slider.target_device] || "Semua Perangkat";

                return (
                    <Card key={slider.id} className="bg-muted/50">
                        <CardContent>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 group">
                                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-3 min-w-0">
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing rounded hover:bg-muted transition-colors"
                                            title="Tahan dan geser untuk ubah urutan"
                                        >
                                            <GripVertical className="size-5" />
                                        </Button>
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-semibold flex items-center justify-center">
                                            #{slider.sort_order}
                                        </span>
                                    </div>

                                    <div className="relative w-full md:w-64 h-36 rounded-lg overflow-hidden flex-shrink-0 shadow-sm bg-muted">
                                        <img
                                            src={slider.image_path}
                                            alt={slider.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white">
                                            1920 × 800 px
                                        </span>
                                        <span
                                            className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 shadow-sm ${
                                                statusConfig.label === "Aktif"
                                                    ? "bg-emerald-500 text-white"
                                                    : statusConfig.label ===
                                                        "Terjadwal"
                                                      ? "bg-blue-500 text-white"
                                                      : "bg-gray-500 text-white"
                                            }`}
                                        >
                                            {statusConfig.label === "Aktif" && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                            )}
                                            {statusConfig.label}
                                        </span>
                                    </div>

                                    <div className="flex flex-col min-w-0 space-y-1.5 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge
                                                variant="outline"
                                                className="gap-1.5"
                                            >
                                                <Image className="h-3 w-3" />
                                                Slider Banner
                                            </Badge>
                                            <Badge
                                                variant="outline"
                                                className="gap-1.5 flex items-center"
                                            >
                                                {getDeviceIcon(
                                                    slider.target_device,
                                                )}
                                                {deviceLabel}
                                            </Badge>
                                        </div>
                                        <Link
                                            href={
                                                showSlider({
                                                    slider: slider.id,
                                                }).url
                                            }
                                            className="block truncate font-semibold text-lg text-foreground hover:text-primary"
                                        >
                                            {slider.title}
                                        </Link>
                                        {slider.subtitle && (
                                            <p className="text-sm text-muted-foreground line-clamp-1">
                                                {slider.subtitle}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap items-center gap-3 pt-1">
                                            {slider.cta_text &&
                                                slider.cta_url && (
                                                    <div className="flex items-center gap-1 text-primary bg-primary/10 px-2.5 py-1 rounded-md text-sm font-medium">
                                                        <MousePointerClick className="size-3.5" />
                                                        <span>
                                                            CTA:{" "}
                                                            <strong>
                                                                {
                                                                    slider.cta_text
                                                                }
                                                            </strong>{" "}
                                                            → {slider.cta_url}
                                                        </span>
                                                    </div>
                                                )}
                                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                                <Calendar className="size-3.5" />
                                                <span>
                                                    {slider.starts_at
                                                        ? `Mulai: ${formatDate(slider.starts_at)}`
                                                        : "Tanpa batas awal"}
                                                    {slider.ends_at && (
                                                        <>
                                                            {" "}
                                                            –{" "}
                                                            {slider.ends_at
                                                                ? `Selesai: ${formatDate(slider.ends_at)}`
                                                                : "Tanpa batas akhir"}
                                                        </>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 flex-shrink-0 pt-2 lg:pt-0">
                                    <div className="flex flex-col gap-2">
                                        <FieldLabel htmlFor="switch-share" className="overflow-hidden">
                                            <Field
                                                orientation="horizontal"
                                                className="!py-2 bg-background dark:bg-input/30"
                                            >
                                                <FieldContent>
                                                    <FieldTitle>
                                                        Aktif
                                                    </FieldTitle>
                                                </FieldContent>
                                                <Switch id="switch-share" />
                                            </Field>
                                        </FieldLabel>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() => onView(slider)}
                                                title="Pratinjau Layar Penuh"
                                            >
                                                <Maximize2 className="size-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() => onEdit(slider)}
                                                title="Edit Konten Banner"
                                            >
                                                <Edit className="size-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8 text-destructive hover:bg-destructive/10"
                                                onClick={() => onDelete(slider)}
                                                title="Hapus Slide"
                                            >
                                                <Trash2 className="size-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}

            {data.data.length === 0 && (
                <Card className="py-12 text-center">
                    <CardContent>
                        <Image className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                        <h3 className="text-lg font-medium text-foreground mb-1">
                            Tidak ada slider ditemukan
                        </h3>
                        <p className="text-muted-foreground">
                            Coba ubah filter pencarian atau tambah slider baru.
                        </p>
                    </CardContent>
                </Card>
            )}

            <PaginationPage
                updateQuery={updateQuery}
                links={data.links}
                meta={data.meta}
                className="rounded-xl"
            />
        </div>
    );
}
