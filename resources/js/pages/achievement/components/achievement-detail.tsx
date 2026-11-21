import {
    Trophy,
    Calendar,
    MapPin,
    Globe,
    Award,
    Medal,
    Star,
    ShieldCheck,
    Flag,
    Users,
    User,
    Building2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Achievement } from '@/types/achievement';

interface AchievementDetailProps {
    id: string | number;
}

function getCategoryIcon(category: string) {
    switch (category) {
        case 'Akademik':
            return <Trophy className="size-4" />;
        case 'Non-Akademik':
            return <Award className="size-4" />;
        case 'Olahraga':
            return <Medal className="size-4" />;
        case 'Seni & Budaya':
            return <Star className="size-4" />;
        case 'Keagamaan':
            return <ShieldCheck className="size-4" />;
        default:
            return <Trophy className="size-4" />;
    }
}

function getCategoryColor(category: string): string {
    switch (category) {
        case 'Akademik':
            return 'bg-blue-50 text-blue-700';
        case 'Non-Akademik':
            return 'bg-gray-100 text-gray-700';
        case 'Olahraga':
            return 'bg-orange-50 text-orange-700';
        case 'Seni & Budaya':
            return 'bg-purple-50 text-purple-700';
        case 'Keagamaan':
            return 'bg-green-50 text-green-700';
        default:
            return 'bg-gray-50 text-gray-700';
    }
}

function getLevelIcon(level: string) {
    switch (level) {
        case 'Internasional':
            return <Globe className="size-4" />;
        case 'Nasional':
            return <Flag className="size-4" />;
        case 'Provinsi':
            return <MapPin className="size-4" />;
        case 'Kabupaten / Kota':
            return <MapPin className="size-4" />;
        case 'Kecamatan':
            return <MapPin className="size-4" />;
        case 'Sekolah':
            return <Award className="size-4" />;
        default:
            return <Award className="size-4" />;
    }
}

function getLevelColor(level: string): string {
    switch (level) {
        case 'Internasional':
            return 'bg-blue-50 text-blue-700';
        case 'Nasional':
            return 'bg-blue-50 text-blue-700';
        case 'Provinsi':
            return 'bg-gray-100 text-gray-700';
        case 'Kabupaten / Kota':
            return 'bg-gray-100 text-gray-700';
        case 'Kecamatan':
            return 'bg-gray-100 text-gray-700';
        case 'Sekolah':
            return 'bg-gray-100 text-gray-700';
        default:
            return 'bg-gray-50 text-gray-700';
    }
}

function getRecipientIcon(type: string) {
    switch (type) {
        case 'student':
            return <User className="size-4" />;
        case 'teacher':
            return <Users className="size-4" />;
        case 'school':
            return <Building2 className="size-4" />;
        default:
            return <User className="size-4" />;
    }
}

export default function AchievementDetail({ id }: AchievementDetailProps) {
    // TODO(backend): props dari controller { achievement: Achievement }
    const achievement: Achievement = {
        id: typeof id === 'string' ? parseInt(id) : id,
        title: 'Gold Medal International Physics Olympiad (IPhO) 2024',
        slug: 'gold-medal-ipho-2024',
        category: 'Akademik',
        level: 'Internasional',
        recipient_type: 'student',
        recipient_name: 'Muhammad Arya Pratama',
        recipient_class: 'Siswa (Kelas XII IPA 1)',
        rank: 'Medali Emas',
        instituted_at: '2024-07-18',
        organizer: 'International Physics Association, Zurich',
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDJQBFyZLlOZPHYq2grSm-0F4dZHtu4xtzIU35R3_4B1G2hxOZcrxZCdsWtRu8sB8BHWBjMXmLHQD7be5mmDxexxy_wXlsivMUBdvlyAqkoykVu52HsVEGa0YuxYG8XaRguKC_D65IbPpb9_svwku87ztoxhY8QXgmni40-YeNXG8DivtfT1Jf6H8SvnKevGJrAAVVyLRAqm9NEjsto-2YUvbiCJBzTZiKwGa8P93--',
        is_published: true,
        achievement_year: 2024,
        created_at: '2024-07-19T10:00:00.000000Z',
    };

    return (
        <div className="grid gap-6 lg:grid-cols-3">
            {/* Visual Section */}
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Trophy />
                        Visual & Informasi Utama
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {achievement.image_url ? (
                        <div className="relative aspect-video overflow-hidden rounded-xl border">
                            <img
                                src={achievement.image_url}
                                alt={achievement.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ) : null}

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge
                                variant="outline"
                                className={getCategoryColor(
                                    achievement.category,
                                )}
                            >
                                <span className="flex items-center gap-1">
                                    {getCategoryIcon(achievement.category)}
                                    {achievement.category}
                                </span>
                            </Badge>
                            <Badge
                                variant="outline"
                                className={getLevelColor(achievement.level)}
                            >
                                <span className="flex items-center gap-1">
                                    {getLevelIcon(achievement.level)}
                                    {achievement.level}
                                </span>
                            </Badge>
                            {achievement.is_published ? (
                                <Badge
                                    variant="default"
                                    className="bg-green-50 text-green-700"
                                >
                                    Tayang Live
                                </Badge>
                            ) : (
                                <Badge
                                    variant="outline"
                                    className="bg-surface-container-high text-muted-foreground"
                                >
                                    Draft Arsip
                                </Badge>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-foreground">
                            {achievement.title}
                        </h3>

                        <div className="flex flex-wrap gap-4 border-t pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="size-4" />
                                {new Date(
                                    achievement.instituted_at,
                                ).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Trophy className="size-4" />
                                {achievement.rank}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="size-4" />
                                {achievement.organizer}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                                URL Publik:
                            </span>
                            <code className="bg-surface-container rounded px-2 py-1 font-mono text-xs">
                                /prestasi/{achievement.slug}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Detail Section */}
            <div className="grid gap-4 lg:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Kategori & Tingkat
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                {getCategoryIcon(achievement.category)}
                            </div>
                            <div>
                                <p className="font-medium">
                                    {achievement.category}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Kategori prestasi
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                {getLevelIcon(achievement.level)}
                            </div>
                            <div>
                                <p className="font-medium">
                                    {achievement.level}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Tingkat kompetisi
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                                <Calendar className="size-4" />
                            </div>
                            <div>
                                <p className="font-medium">
                                    Tahun {achievement.achievement_year}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Tahun capaian
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Penerima Prestasi
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-start gap-3">
                            <div className="bg-surface-container flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                                {getRecipientIcon(achievement.recipient_type)}
                            </div>
                            <div>
                                <p className="font-medium">
                                    {achievement.recipient_name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {achievement.recipient_class ?? '—'}
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground capitalize">
                                    {achievement.recipient_type}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Peringkat & Penyelenggara
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Peringkat
                            </p>
                            <p className="flex items-center gap-1 font-medium">
                                <Trophy className="size-4 text-amber-500" />
                                {achievement.rank}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Penyelenggara
                            </p>
                            <p className="flex items-center gap-1 font-medium">
                                <MapPin className="size-3 text-muted-foreground" />
                                {achievement.organizer}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Tanggal & Status
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Tanggal Capaian
                            </p>
                            <p className="flex items-center gap-1 font-medium">
                                <Calendar className="size-3 text-muted-foreground" />
                                {new Date(
                                    achievement.instituted_at,
                                ).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Status Publikasi
                            </p>
                            <p className="font-medium">
                                {achievement.is_published ? (
                                    <Badge
                                        variant="default"
                                        className="bg-green-50 text-green-700"
                                    >
                                        Tayang Live
                                    </Badge>
                                ) : (
                                    <Badge
                                        variant="outline"
                                        className="bg-surface-container-high text-muted-foreground"
                                    >
                                        Draft Arsip
                                    </Badge>
                                )}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            Dibuat Pada
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-start gap-2">
                            <Calendar className="mt-1 size-4 flex-shrink-0 text-muted-foreground" />
                            <p className="font-medium">
                                {new Date(
                                    achievement.created_at,
                                ).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
