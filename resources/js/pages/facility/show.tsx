'use client';

import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { mockFacilities } from './mock';
import type { Facility } from '@/types/facility';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, CheckCircle, Wrench, Eye, MapPin } from 'lucide-react';

interface FacilityShowProps {
    id: string;
}

export default function FacilityShow({ id }: FacilityShowProps) {
    const facility = mockFacilities.find((f) => f.id === Number(id)) ?? mockFacilities[0];

    return (
        <>
            <Head title={facility.name} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0 shadow-sm">
                            <img src={facility.image_url} alt={facility.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{facility.name}</h2>
                            <p className="text-sm text-muted-foreground">{facility.slug}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Edit Data</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Building2 className="size-5" />
                                    Informasi Umum Fasilitas
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-muted-foreground">Kapasitas Ruang</label>
                                        <p className="font-semibold">{facility.capacity_label}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-muted-foreground">Kondisi Fisik</label>
                                        <Badge variant="outline">{facility.condition}</Badge>
                                    </div>
                                    <div className="space-y-1 sm:col-span-2">
                                        <label className="text-xs font-medium text-muted-foreground">Deskripsi & Spesifikasi</label>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{facility.description}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Eye className="size-5" />
                                    Status Publikasi Web
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                    <Badge variant={facility.published ? 'default' : 'outline'}>
                                        {facility.published ? 'Tampil di Publik' : 'Draft / Disembunyikan'}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Fasilitas ini dapat diakses oleh calon wali murid dan masyarakat melalui portal resmi sekolah.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

FacilityShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard().url,
        },
        {
            title: 'Manajemen Sarana & Fasilitas Sekolah',
            href: '#',
        },
        {
            title: 'Detail',
            href: '#',
        },
    ],
};