import { Link } from "@inertiajs/react";
import {
    MoreHorizontal,
    Trophy,
    Award,
    Flag,
    MapPin,
    Globe,
    Calendar,
    Medal,
    Star,
    ShieldCheck,
    Eye,
    SquarePen,
    Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { LaravelPagination } from "@/types/pagination";
import type { Achievement } from "@/types/achievement";
import { PaginationPage } from "@/components/pagination-page";
import { show as achievementShow } from "@/routes/dashboard/achievement";

interface AchievementTableProps {
    data: LaravelPagination<Achievement>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (achievement: Achievement) => void;
    onDelete: (achievement: Achievement) => void;
}

function getCategoryIcon(category: string) {
    switch (category) {
        case "Akademik":
            return <Trophy className="size-3" />;
        case "Non-Akademik":
            return <Award className="size-3" />;
        case "Olahraga":
            return <Medal className="size-3" />;
        case "Seni & Budaya":
            return <Star className="size-3" />;
        case "Keagamaan":
            return <ShieldCheck className="size-3" />;
        default:
            return <Trophy className="size-3" />;
    }
}

function getCategoryColor(category: string): string {
    switch (category) {
        case "Akademik":
            return "bg-blue-50 text-blue-700";
        case "Non-Akademik":
            return "bg-gray-100 text-gray-700";
        case "Olahraga":
            return "bg-orange-50 text-orange-700";
        case "Seni & Budaya":
            return "bg-purple-50 text-purple-700";
        case "Keagamaan":
            return "bg-green-50 text-green-700";
        default:
            return "bg-gray-50 text-gray-700";
    }
}

function getLevelIcon(level: string) {
    switch (level) {
        case "Internasional":
            return <Globe className="size-3" />;
        case "Nasional":
            return <Flag className="size-3" />;
        case "Provinsi":
            return <MapPin className="size-3" />;
        case "Kabupaten / Kota":
            return <MapPin className="size-3" />;
        case "Kecamatan":
            return <MapPin className="size-3" />;
        case "Sekolah":
            return <Award className="size-3" />;
        default:
            return <Award className="size-3" />;
    }
}

function getLevelColor(level: string): string {
    switch (level) {
        case "Internasional":
            return "bg-blue-50 text-blue-700";
        case "Nasional":
            return "bg-blue-50 text-blue-700";
        case "Provinsi":
            return "bg-gray-100 text-gray-700";
        case "Kabupaten / Kota":
            return "bg-gray-100 text-gray-700";
        case "Kecamatan":
            return "bg-gray-100 text-gray-700";
        case "Sekolah":
            return "bg-gray-100 text-gray-700";
        default:
            return "bg-gray-50 text-gray-700";
    }
}

function getRecipientColor(type: string): string {
    switch (type) {
        case "student":
            return "bg-blue-100 text-blue-700";
        case "teacher":
            return "bg-blue-500/10 text-blue-700";
        case "school":
            return "bg-green-50 text-green-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
}

function getRecipientIcon(type: string) {
    switch (type) {
        case "student":
            return <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />;
        case "teacher":
            return <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />;
        case "school":
            return <span className="h-1.5 w-1.5 rounded-full bg-green-600" />;
        default:
            return <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />;
    }
}

function getRankIcon(rank: string) {
    const lowerRank = rank.toLowerCase();
    if (
        lowerRank.includes("emas") ||
        lowerRank.includes("gold") ||
        lowerRank.includes("juara 1") ||
        lowerRank.includes("champion")
    ) {
        return <Medal className="size-4 text-amber-500" />;
    }
    if (
        lowerRank.includes("perak") ||
        lowerRank.includes("silver") ||
        lowerRank.includes("juara 2")
    ) {
        return <Medal className="size-4 text-gray-400" />;
    }
    if (
        lowerRank.includes("perunggu") ||
        lowerRank.includes("bronze") ||
        lowerRank.includes("juara 3")
    ) {
        return <Medal className="size-4 text-amber-700" />;
    }
    return <Trophy className="size-4" />;
}

export default function AchievementTable({
    data,
    query,
    updateQuery,
    onEdit,
    onDelete,
}: AchievementTableProps) {
    return (
        <div className="overflow-hidden rounded-xl shadow-sm">
            <div className="w-full overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Foto & Prestasi</TableHead>
                            <TableHead>Kategori & Tingkat</TableHead>
                            <TableHead>Penerima & Peran</TableHead>
                            <TableHead>Peringkat & Waktu</TableHead>
                            <TableHead>Publikasi</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-surface-container divide-y">
                        {data.data && data.data.length > 0 ? (
                            data.data.map((achievement: Achievement) => (
                                <TableRow
                                    key={achievement.id}
                                    className="hover:bg-surface-container-low/60 group transition-colors"
                                >
                                    <TableCell className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            {achievement.image_url ? (
                                                <div className="bg-surface-container relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border shadow-sm">
                                                    <img
                                                        src={
                                                            achievement.image_url
                                                        }
                                                        alt={achievement.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="bg-surface-container flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                                                    {getCategoryIcon(
                                                        achievement.category,
                                                    )}
                                                </div>
                                            )}
                                            <div className="flex min-w-0 flex-col">
                                                <span className="font-headline-sm text-headline-sm truncate font-semibold text-foreground transition-colors group-hover:text-primary">
                                                    {achievement.title}
                                                </span>
                                                <span className="font-body-sm text-body-sm truncate text-muted-foreground">
                                                    /prestasi/{achievement.slug}
                                                </span>
                                                <span className="font-label-sm text-label-sm mt-0.5 flex items-center gap-1 text-muted-foreground">
                                                    <MapPin className="size-3 text-muted-foreground" />
                                                    {achievement.organizer}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3">
                                        <div className="flex flex-col items-start gap-1.5">
                                            <Badge
                                                variant="outline"
                                                className={getCategoryColor(
                                                    achievement.category,
                                                )}
                                            >
                                                <span className="flex items-center gap-1">
                                                    {getCategoryIcon(
                                                        achievement.category,
                                                    )}
                                                    {achievement.category}
                                                </span>
                                            </Badge>
                                            <Badge
                                                variant="outline"
                                                className={getLevelColor(
                                                    achievement.level,
                                                )}
                                            >
                                                <span className="flex items-center gap-1">
                                                    {getLevelIcon(
                                                        achievement.level,
                                                    )}
                                                    {achievement.level}
                                                </span>
                                            </Badge>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3">
                                        <div className="flex items-center gap-2.5">
                                            <span
                                                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                                                style={{
                                                    backgroundColor:
                                                        getRecipientColor(
                                                            achievement.recipient_type,
                                                        )
                                                            .split(" ")[0]
                                                            .replace(
                                                                "bg-",
                                                                "",
                                                            ) + "10",
                                                    color: getRecipientColor(
                                                        achievement.recipient_type,
                                                    )
                                                        .split(" ")[1]
                                                        .replace("text-", ""),
                                                }}
                                            >
                                                {achievement.recipient_name.charAt(
                                                    0,
                                                )}
                                            </span>
                                            <div className="flex min-w-0 flex-col">
                                                <span className="font-headline-sm text-headline-sm truncate font-medium text-foreground">
                                                    {achievement.recipient_name}
                                                </span>
                                                <span className="font-label-sm text-label-sm inline-flex items-center gap-1 text-muted-foreground">
                                                    {getRecipientIcon(
                                                        achievement.recipient_type,
                                                    )}
                                                    {achievement.recipient_class ??
                                                        "—"}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3">
                                        <div className="flex flex-col">
                                            <span className="font-headline-sm text-headline-sm flex items-center gap-1 font-semibold text-foreground">
                                                {getRankIcon(achievement.rank)}
                                                {achievement.rank}
                                            </span>
                                            <span className="font-body-sm text-body-sm mt-0.5 text-muted-foreground">
                                                {new Date(
                                                    achievement.instituted_at,
                                                ).toLocaleDateString("id-ID", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </span>
                                            <span className="font-label-sm text-label-sm text-muted-foreground">
                                                Tahun{" "}
                                                {achievement.achievement_year}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-center">
                                        {achievement.is_published ? (
                                            <>
                                                <label className="relative inline-flex cursor-pointer items-center justify-center">
                                                    <input
                                                        checked
                                                        className="peer sr-only"
                                                        type="checkbox"
                                                    />
                                                    <div className="bg-surface-container-high peer h-5 w-9 rounded-full peer-checked:bg-green-500 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                                </label>
                                                <div className="font-label-sm text-label-sm mt-0.5 font-medium text-green-600">
                                                    Tayang Live
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Badge
                                                    variant="outline"
                                                    className="bg-surface-container-high rounded-full px-2 py-0.5 text-muted-foreground"
                                                >
                                                    Draft Arsip
                                                </Badge>
                                                <div className="font-label-sm text-label-sm mt-0.5 text-muted-foreground">
                                                    Tidak Tampil
                                                </div>
                                            </>
                                        )}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-right">
                                        <div className="inline-flex items-center gap-1">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() =>
                                                    window.open(
                                                        `/prestasi/${achievement.slug}`,
                                                        "_blank",
                                                    )
                                                }
                                            >
                                                <Eye className="size-4" />
                                            </Button>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                    >
                                                        <MoreHorizontal className="size-4" />
                                                        <span className="sr-only">
                                                            Aksi
                                                        </span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>
                                                        Aksi
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={
                                                                achievementShow(
                                                                    achievement.id,
                                                                ).url
                                                            }
                                                        >
                                                            <Eye className="mr-2 size-4" />
                                                            Detail
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            onEdit(achievement)
                                                        }
                                                    >
                                                        <SquarePen className="mr-2 size-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() =>
                                                            onDelete(
                                                                achievement,
                                                            )
                                                        }
                                                    >
                                                        <Trash2 className="mr-2 size-4" />
                                                        Hapus
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="h-24 text-center"
                                >
                                    Tidak ada data.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <PaginationPage
                updateQuery={updateQuery}
                links={data.links}
                meta={data.meta}
            />
        </div>
    );
}
