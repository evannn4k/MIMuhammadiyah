import { ShieldCheck, Plus, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';

interface RoleHeaderSectionProps {
    selectedPermissions: string[];
    pending: boolean;
    onCreateRole: () => void;
    onSave?: () => void;
}

export default function RoleHeaderSection({
    selectedPermissions,
    pending,
    onCreateRole,
    onSave,
}: RoleHeaderSectionProps) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-3xl flex-col gap-1.5">
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-semibold">
                        Sistem Keamanan & Tata Kelola
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <ShieldCheck className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                        RBAC Engine v3.2
                    </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Manajemen Pengguna & Matriks Hak Akses
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Kelola akun staf, guru, dan atur batasan kewenangan modul
                    secara granular dengan kontrol akses berbasis peran
                    (Role-Based Access Control).
                </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
                <Button variant="outline" onClick={onCreateRole}>
                    <Plus />
                    Tambah Peran Baru
                </Button>
                <Button
                    onClick={onSave}
                    disabled={pending || selectedPermissions.length <= 0}
                >
                    {!pending ? <Save /> : <Spinner />}
                    Simpan Perubahan Matriks
                </Button>
            </div>
        </div>
    );
}
