'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, BadgeCheck, GraduationCap, Briefcase, BookOpen, Eye, MapPin, Calendar, Award } from 'lucide-react';
import type { Staff } from '@/types/staff';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const groupBadgeVariants: Record<string, 'default' | 'secondary' | 'outline'> = {
    Leadership: 'default',
    Teacher: 'secondary',
    'Staff (GTK)': 'outline',
};

const statusBadgeVariants: Record<string, 'default' | 'outline' | 'destructive'> = {
    active: 'default',
    hidden: 'outline',
    on_leave: 'destructive',
};

interface StaffDetailProps {
    staff: Staff;
}

export default function StaffDetail({ staff }: StaffDetailProps) {
    // TODO(backend): replace with real data from props
    const mockStaff: Staff = {
        id: staff.id,
        name: 'Dr. Hj. Siti Rohmah, M.Pd.',
        email: 'siti.rohmah@sman1prestasi.sch.id',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBPpdrX0FY5-juafsu8bEBC4ghDSAxtiOgR3tn3jgHPkis7ipJD15jnghV2z4qC5UsCaFwhYqmaYnKHUWblDXirpQdIyeAvVZc5KWPU_IAcFjVs3VHzmPRNq_XLl_vrEW-1ZijyFWPZN68Qyx7G6uo3BI2OlqD61Eou6PyZjsiXcTF6BW2ZMlkeywCxAz0t236d1nfPQBSEVbcKWJzcC6Mlsn89Nfjs2SYKEUExK6T',
        nip: '19710418 199702 2 001',
        nuptk: '9452749651300022',
        group: 'Leadership',
        position: 'Kepala Sekolah',
        subject: 'Manajemen Pendidikan',
        education: 'S3 Manajemen Pendidikan',
        education_institution: 'Universitas Negeri Jakarta (2018)',
        status: 'active',
        status_label: 'Aktif Tampil',
    };

    const s = mockStaff;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0 shadow-sm">
                        <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{s.name}</h2>
                        <p className="text-muted-foreground flex items-center gap-2">
                            <Mail className="size-4" />
                            {s.email}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" className="gap-2">
                        <FileDown className="size-4" />
                        Export Profil
                    </Button>
                    <Button size="sm" className="gap-2">
                        Edit Data
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BadgeCheck className="size-5" />
                                Identitas & Kepegawaian
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">NIP / NIPPPK</label>
                                    <p className="font-mono font-semibold">{s.nip}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">NUPTK</label>
                                    <p className="font-mono font-semibold">{s.nuptk}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Kelompok</label>
                                    <Badge variant={groupBadgeVariants[s.group] ?? 'outline'}>
                                        {s.group}
                                    </Badge>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Jabatan / Posisi</label>
                                    <p className="font-medium">{s.position}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <GraduationCap className="size-5" />
                                Bidang Studi & Tugas Mengajar
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Mata Pelajaran Utama</label>
                                    <p className="font-medium">{s.subject}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Tugas Tambahan</label>
                                    <p className="text-muted-foreground">Koordinator Olimpiade Sains, Pembina OSIS</p>
                                </div>
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-xs font-medium text-muted-foreground">Kelas yang Diampu</label>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">XI MIPA 1</Badge>
                                        <Badge variant="outline">XI MIPA 2</Badge>
                                        <Badge variant="outline">XII MIPA 1</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="size-5" />
                                Riwayat Pendidikan
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Award className="size-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{s.education}</p>
                                        <p className="text-sm text-muted-foreground">{s.education_institution}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <BookOpen className="size-4 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">S2 Manajemen Pendidikan</p>
                                        <p className="text-sm text-muted-foreground">Universitas Negeri Jakarta (2012)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="size-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">S1 Pendidikan Matematika</p>
                                        <p className="text-sm text-muted-foreground">Universitas Pendidikan Indonesia (2007)</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Briefcase className="size-5" />
                                Riwayat Jabatan & Sertifikasi
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="border-l-2 border-primary/20 pl-4 space-y-4">
                                <div>
                                    <p className="font-semibold">Kepala Sekolah</p>
                                    <p className="text-sm text-muted-foreground">2020 - Sekarang</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Wakil Kepala Sekolah Bidang Kurikulum</p>
                                    <p className="text-sm text-muted-foreground">2016 - 2020</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Guru Matematika Peminatan</p>
                                    <p className="text-sm text-muted-foreground">2008 - 2016</p>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Sertifikasi Guru (2014)</Badge>
                                <Badge variant="secondary">PPG Daljab (2018)</Badge>
                                <Badge variant="secondary">Pelatihan Kepemimpinan LPDP</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Eye className="size-5" />
                                Status Visibilitas Portal
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                <Badge variant={statusBadgeVariants[s.status] ?? 'outline'} className="text-base px-3 py-1.5">
                                    {s.status === 'active' && (
                                        <>
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 inline-block" />
                                            Aktif Tampil di Publik
                                        </>
                                    )}
                                    {s.status === 'hidden' && (
                                        <>
                                            <span className="w-2 h-2 rounded-full bg-muted mr-2 inline-block" />
                                            Disembunyikan
                                        </>
                                    )}
                                    {s.status === 'on_leave' && (
                                        <>
                                            <span className="w-2 h-2 rounded-full bg-destructive mr-2 inline-block" />
                                            Cuti / Mutasi
                                        </>
                                    )}
                                </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Hanya guru & staf berstatus <strong>Aktif Tampil</strong> yang akan muncul
                                pada menu direktori portal resmi sekolah yang dapat diakses oleh publik dan wali murid.
                            </p>
                            <Button variant="outline" className="w-full gap-2" asChild>
                                <a href="#" target="_blank">
                                    <Eye className="size-4" />
                                    Buka Halaman Direktori Publik
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MapPin className="size-5" />
                                Informasi Kontak Sekolah
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="size-4 flex-shrink-0" />
                                <span>Jl. Pendidikan No. 1, Kecamatan Prestasi, Kota Cerdas</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="size-4 flex-shrink-0" />
                                <span>humas@sman1prestasi.sch.id</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Calendar className="size-4 flex-shrink-0" />
                                <span>Senin - Jumat: 07.00 - 15.00 WIB</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Award className="size-5" />
                                Prestasi & Penghargaan
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <div className="p-3 bg-muted/50 rounded-lg">
                                <p className="font-medium">Sekolah Adiwiyata Mandiri Nasional</p>
                                <p className="text-muted-foreground">Kementerian LH (2023)</p>
                            </div>
                            <div className="p-3 bg-muted/50 rounded-lg">
                                <p className="font-medium">Juara 1 Lomba Cerdas Cermat Tingkat Nasional</p>
                                <p className="text-muted-foreground">Kemdikbud (2024)</p>
                            </div>
                            <div className="p-3 bg-muted/50 rounded-lg">
                                <p className="font-medium">Guru Berprestasi Tingkat Provinsi</p>
                                <p className="text-muted-foreground">Dinas Pendidikan (2022)</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}