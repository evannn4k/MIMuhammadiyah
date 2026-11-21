import { Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UserHeaderSectionProps {
    onCreateUser: () => void;
}

export default function UserHeaderSection({
    onCreateUser,
}: UserHeaderSectionProps) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-3xl flex-col gap-1.5">
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-semibold">
                        Manajemen Pengguna
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="size-3.5 text-primary" />
                        Direktori Staf & Guru
                    </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Manajemen Pengguna & Staf
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Kelola data akun staf, guru, dan administrator website
                    sekolah untuk MI Muhammadiyah.
                </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
                <Button onClick={onCreateUser}>
                    <Plus />
                    Tambah Pengguna Baru
                </Button>
            </div>
        </div>
    );
}
