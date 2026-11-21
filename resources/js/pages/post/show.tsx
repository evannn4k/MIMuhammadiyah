import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { mockPosts } from './mock';
import type { Post } from '@/types/post';
import {
    Calendar,
    Clock,
    Eye,
    User,
    ArrowLeft,
    Edit,
    Trash2,
    Tag,
    CheckCircle2,
    Archive,
    HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { index as postIndex, show as postShow } from '@/routes/dashboard/post';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';

interface PostShowProps {
    id: string;
}

export default function PostShow({ id }: PostShowProps) {
    const postId = Number(id);
    const post = mockPosts.find((p) => p.id === postId);

    if (!post) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <div className="text-center">
                    <h1 className="text-error mb-2 text-2xl font-bold">
                        Artikel tidak ditemukan
                    </h1>
                    <p className="mb-4 text-muted-foreground">
                        Artikel dengan ID {id} tidak ditemukan.
                    </p>
                    <Button asChild onClick={() => window.history.back()}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Kembali ke Daftar
                    </Button>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getStatusConfig = (status: string) => {
        switch (status) {
            case 'published':
                return {
                    label: 'Terbit',
                    className:
                        'bg-emerald-50 text-emerald-800 border-emerald-200',
                    icon: <CheckCircle2 className="h-3 w-3" />,
                };
            case 'draft':
                return {
                    label: 'Draft',
                    className: 'bg-amber-50 text-amber-800 border-amber-200',
                    icon: <Clock className="h-3 w-3" />,
                };
            case 'archived':
                return {
                    label: 'Diarsipkan',
                    className: 'bg-slate-100 text-slate-700 border-slate-200',
                    icon: <Archive className="h-3 w-3" />,
                };
            default:
                return {
                    label: status,
                    className: 'bg-gray-50 text-gray-800 border-gray-200',
                    icon: <HelpCircle className="h-3 w-3" />,
                };
        }
    };

    const statusConfig = getStatusConfig(post.status);

    return (
        <>
            <Head title={`${post.title} - Detail Berita`} />
            <div className="flex h-full flex-1 flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Link
                            href={postIndex.url({})}
                            className="mb-2 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Kembali ke Daftar
                        </Link>
                        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                            {post.title}
                        </h1>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                            {post.excerpt}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" asChild>
                            <Link href={postShow({ post: post.id }).url}>
                                <Eye className="mr-2 h-4 w-4" />
                                Pratinjau
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => console.log('Edit post')}
                        >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                        </Button>
                    </div>
                </div>

                <Separator />

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Article Content */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Status & Meta */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="secondary" className="gap-1.5">
                                {statusConfig.icon}
                                {statusConfig.label}
                            </Badge>
                            <Badge variant="outline" className="gap-1.5">
                                <Tag className="h-3 w-3" />
                                {post.category}
                            </Badge>
                            <Badge variant="outline" className="gap-1.5">
                                <Eye className="h-3 w-3" />
                                {post.view_count.toLocaleString()} pembaca
                            </Badge>
                        </div>

                        {/* Author & Date */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTxuuCzqHfSJlwZQnr13Lh_aauZ5iZSILLunCC_NeEch8df3QUwswteg-dfBR_hizxxhT6I6Bb9EQhXa98EUPw0O5-osqHOpbVPfs_UxQfJ9c2cXGJojTbNu6k22ZPqK5fR5QTn8JkkU-uv54vfxq9d-tEeKfA5dSPXKe4-kATEFsT2N4r7bdzNZF2HM7eOni6CbWJKyIRrYTsq8MLzCwas6iVmBk2UuLoRsr1dRXY"
                                    alt={post.author_name}
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium text-foreground">
                                        {post.author_name}
                                    </p>
                                    <p className="text-xs">Penulis</p>
                                </div>
                            </div>
                            {post.published_at && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                                        Dipublikasikan:{' '}
                                        {formatDate(post.published_at)}
                                    </span>
                                </div>
                            )}
                            {post.scheduled_at && (
                                <div className="flex items-center gap-2 text-secondary">
                                    <Clock className="h-4 w-4" />
                                    <span>
                                        Dijadwalkan:{' '}
                                        {formatDate(post.scheduled_at)}
                                    </span>
                                </div>
                            )}
                        </div>

                        <Separator />

                        {/* Article Body */}
                        <article className="prose prose-lg max-w-none">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />
                        </article>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="border-t pt-4">
                                <h3 className="mb-2 font-medium text-foreground">
                                    Tags:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="gap-1.5"
                                        >
                                            <Tag className="h-3 w-3" />
                                            {tag.replace('#', '')}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Statistik Publikasi
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                        Total Pembaca
                                    </span>
                                    <span className="text-2xl font-bold text-foreground">
                                        {post.view_count.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                        Total Komentar
                                    </span>
                                    <span className="text-2xl font-bold text-foreground">
                                        {post.comment_count}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                        Status Moderasi
                                    </span>
                                    <Badge
                                        variant="secondary"
                                        className="text-primary"
                                    >
                                        {post.comment_count > 0
                                            ? 'Perlu Review'
                                            : 'Bersih'}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    URL Publikasi
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex items-center gap-2 rounded-lg bg-muted p-2">
                                    <span className="flex-1 truncate text-sm text-muted-foreground">
                                        https://sman1prestasi.sch.id/berita/
                                    </span>
                                    <span className="flex-1 truncate text-sm font-semibold text-foreground">
                                        {post.slug}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Informasi Penulis
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTxuuCzqHfSJlwZQnr13Lh_aauZ5iZSILLunCC_NeEch8df3QUwswteg-dfBR_hizxxhT6I6Bb9EQhXa98EUPw0O5-osqHOpbVPfs_UxQfJ9c2cXGJojTbNu6k22ZPqK5fR5QTn8JkkU-uv54vfxq9d-tEeKfA5dSPXKe4-kATEFsT2N4r7bdzNZF2HM7eOni6CbWJKyIRrYTsq8MLzCwas6iVmBk2UuLoRsr1dRXY"
                                        alt={post.author_name}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-medium text-foreground">
                                            {post.author_name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Super Administrator
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t pt-3">
                                    <p className="text-sm text-muted-foreground">
                                        Dibuat pada:{' '}
                                        {formatDate(post.created_at)}
                                    </p>
                                    {post.updated_at && (
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Diperbarui:{' '}
                                            {formatDate(post.updated_at)}
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

PostShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Manajemen Berita & Informasi',
            href: dashboardRoutes.post.index(),
        },
        {
            title: 'Detail Berita',
        },
    ],
};
