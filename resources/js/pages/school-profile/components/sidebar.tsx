import {
    Edit,
    Camera,
    MapPin,
    ExternalLink,
    Download,
    Upload,
    Image as ImageIcon,
    Award,
    Calendar,
    Shield,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FormField from '@/components/form-field';
import type { SchoolProfile } from '@/types/school-profile';
import { logoFields } from './section-card';

interface SidebarProps {
    data: SchoolProfile;
    errors?: Record<string, string>;
}

export default function SchoolProfileSidebar({
    data,
    errors = {},
}: SidebarProps) {
    return (
        <div className="flex flex-col gap-4">
            {/* Logo Section */}
            <Card className="bg-muted/50">
                <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                            <ImageIcon className="size-5" />
                        </div>
                        <div>
                            <CardTitle className="text-lg">
                                Logo Sekolah
                            </CardTitle>
                            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                                Logo resmi untuk dokumen & website
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                    <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                        {data.logo ? (
                            <img
                                src={data.logo}
                                alt={`${data.name} Logo`}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400 dark:text-slate-500">
                                <ImageIcon className="size-12" />
                                <span className="text-sm">Belum ada logo</span>
                            </div>
                        )}
                    </div>

                    <FormField
                        {...logoFields[0]}
                        defaultValue={data.logo ?? ''}
                        error={errors.logo}
                    />

                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 gap-2"
                        >
                            <Upload className="size-4" />
                            Upload
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 gap-2"
                        >
                            <Camera className="size-4" />
                            Kamera
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Headmaster Section */}
            <Card className="bg-muted/50">
                <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                            <ImageIcon className="size-5" />
                        </div>
                        <div>
                            <CardTitle className="text-lg">
                                Kepala Sekolah
                            </CardTitle>
                            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                                Foto & sambutan kepala madrasah
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                    <div className="flex items-start gap-4">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                            {data.headmaster_photo ? (
                                <img
                                    src={data.headmaster_photo}
                                    alt={
                                        data.headmaster_name ?? 'Kepala Sekolah'
                                    }
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-slate-400 dark:text-slate-500">
                                    <ImageIcon className="size-8" />
                                </div>
                            )}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate font-medium text-slate-900 dark:text-slate-100">
                                {data.headmaster_name ?? 'Belum diisi'}
                            </p>
                            <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                                {data.headmaster_greeting ??
                                    'Belum ada sambutan'}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 gap-2"
                        >
                            <Edit className="size-4" />
                            Edit Sambutan
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 gap-2"
                        >
                            <Camera className="size-4" />
                            Ganti Foto
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-muted/50">
                <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                            <Download className="size-5" />
                        </div>
                        <div>
                            <CardTitle className="text-lg">
                                Aksi Cepat
                            </CardTitle>
                            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                                Unduh & bagikan profil sekolah
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-2 pt-2">
                    <Button className="w-full justify-center gap-2">
                        <Download className="size-4" />
                        Unduh Profil (PDF)
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full justify-center gap-2"
                    >
                        <ExternalLink className="size-4" />
                        Lihat Halaman Publik
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full justify-center gap-2"
                    >
                        <MapPin className="size-4" />
                        Buka di Google Maps
                    </Button>
                </CardContent>
            </Card>

            {/* Stats Summary */}
            <Card className="bg-muted/50">
                <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                            <Award className="size-5" />
                        </div>
                        <div>
                            <CardTitle className="text-lg">Ringkasan</CardTitle>
                            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                                Informasi singkat profil
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                    <dl className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <dt className="text-slate-500 dark:text-slate-400">
                                NPSN
                            </dt>
                            <dd className="font-medium text-slate-900 dark:text-slate-100">
                                {data.npsn ?? '-'}
                            </dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-500 dark:text-slate-400">
                                Akreditasi
                            </dt>
                            <dd className="font-medium text-slate-900 dark:text-slate-100">
                                {data.accreditation ?? '-'}
                            </dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-500 dark:text-slate-400">
                                Tahun Berdiri
                            </dt>
                            <dd className="font-medium text-slate-900 dark:text-slate-100">
                                {data.established_year ?? '-'}
                            </dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-500 dark:text-slate-400">
                                Status
                            </dt>
                            <dd className="font-medium text-slate-900 dark:text-slate-100">
                                Aktif
                            </dd>
                        </div>
                    </dl>
                </CardContent>
            </Card>
        </div>
    );
}
