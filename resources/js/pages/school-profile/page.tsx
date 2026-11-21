import { Head } from '@inertiajs/react';
import { Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { SchoolProfileMainForm } from './components/section-card';
import SchoolProfileSidebar from './components/sidebar';
import type { SchoolProfile } from '@/types/school-profile';
import { Building2, Edit } from 'lucide-react';
import { update } from '@/routes/dashboard/school-profile';

interface SchoolProfilePageProps {
    data: SchoolProfile;
}

export default function SchoolProfilePage({ data }: SchoolProfilePageProps) {
    return (
        <>
            <Head title="Profil Sekolah" />
            <div className="p-4">
                <Form method="put" action={update.url(Number(data.id))}>
                    {({ errors, processing }) => (
                        <>
                            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto pb-4">
                                {/* Page Header */}
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                                            <Building2 className="size-6" />
                                        </div>
                                        <div>
                                            <h1 className="text-2xl leading-tight font-semibold text-slate-900 dark:text-slate-100">
                                                {data.name}
                                            </h1>
                                            <p className="text-sm text-muted-foreground">
                                                Profil Sekolah & Identitas
                                                Lembaga
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 sm:ml-auto">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() =>
                                                window.location.reload()
                                            }
                                        >
                                            Reset
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="gap-2"
                                        >
                                            <Edit className="size-4" />
                                            {processing
                                                ? 'Menyimpan...'
                                                : 'Simpan Perubahan'}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Main Layout: 2/3 + 1/3 */}
                            <div className="grid gap-4 lg:grid-cols-12">
                                {/* Left Column - 2/3 (8 cols) */}
                                <div className="lg:col-span-8">
                                    <SchoolProfileMainForm
                                        data={data}
                                        errors={{ ...errors }}
                                    />
                                </div>

                                {/* Right Column - 1/3 (4 cols) */}
                                <div className="lg:col-span-4">
                                    <SchoolProfileSidebar
                                        data={data}
                                        errors={{ ...errors }}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}

SchoolProfilePage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Profil Sekolah',
            href: dashboardRoutes.schoolProfile.index(),
        },
    ],
};
