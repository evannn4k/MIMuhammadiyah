import { Link } from "@inertiajs/react";
import {
    Clock,
    FileText,
    MoreHorizontal,
    SquarePen,
    Trash2,
    ExternalLink,
    User,
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
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/post";
import type { LaravelPagination } from "@/types/pagination";
import { show as showPost } from "@/routes/dashboard/post";
import { PaginationPage } from "@/components/pagination-page";

const statusLabels: Record<string, string> = {
    published: "Terbit",
    draft: "Draft",
    archived: "Diarsipkan",
};

interface PostTableProps {
    data: LaravelPagination<Post>;
    query: Record<string, any>;
    updateQuery: (params: Record<string, any>) => void;
    onEdit: (post: Post) => void;
    onDelete: (post: Post) => void;
    onView: (post: Post) => void;
}

export default function PostTable({
    data,
    query,
    updateQuery,
    onEdit,
    onDelete,
    onView,
}: PostTableProps) {
    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case "published":
                return "default";
            case "draft":
                return "secondary";
            default:
                return "outline";
        }
    };

    return (
        <div className="overflow-hidden rounded-xl shadow-sm">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[320px]">Artikel</TableHead>
                            <TableHead>Kategori</TableHead>
                            <TableHead>Penulis</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Tanggal</TableHead>
                            <TableHead>Pembaca</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.data.map((post: Post) => (
                            <TableRow key={post.id}>
                                <TableCell className="max-w-[320px]">
                                    <div className="flex items-start gap-3">
                                        {post.media_url && (
                                            <Link
                                                href={showPost({ post: post.id }).url}
                                                className="relative w-20 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-muted shadow-sm"
                                            >
                                                <img
                                                    src={post.media_url}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </Link>
                                        )}
                                        <div className="min-w-0 flex-1">
                                            <Link
                                                href={showPost({ post: post.id }).url}
                                                className="block"
                                            >
                                                <h4 className="font-medium text-foreground hover:text-primary truncate">
                                                    {post.title}
                                                </h4>
                                            </Link>
                                            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                                                <ExternalLink className="size-3" />
                                                <span className="truncate">
                                                    /berita/{post.slug}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">
                                        {post.category}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <User className="size-4 text-muted-foreground" />
                                        <div>
                                            <p className="font-medium text-sm">{post.author_name}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {post.author_position}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={getStatusBadgeVariant(post.status)}
                                    >
                                        {statusLabels[post.status] ?? post.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="whitespace-nowrap">
                                    {post.published_at
                                        ? formatDate(post.published_at)
                                        : post.scheduled_at
                                        ? formatSchedule(post.scheduled_at)
                                        : "—"}
                                </TableCell>
                                <TableCell className="font-variant-numeric tabular-nums">
                                    {post.view_count.toLocaleString()}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal />
                                                <span className="sr-only">Aksi</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href={
                                                        showPost({ post: post.id }).url
                                                    }
                                                >
                                                    <FileText />
                                                    Detail
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => onEdit(post)}
                                            >
                                                <SquarePen />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                variant="destructive"
                                                onClick={() => onDelete(post)}
                                            >
                                                <Trash2 />
                                                Hapus
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {data.data.length === 0 && (
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

function formatSchedule(dateString: string) {
    return (
        <span className="flex items-center gap-1 text-secondary">
            <Clock className="size-3" />
            {formatDate(dateString)}
        </span>
    );
}