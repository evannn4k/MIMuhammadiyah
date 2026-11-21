import { Plus, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PostHeaderSectionProps {
    onCreatePost: () => void;
    onOpenCategoryManager: () => void;
}

export default function PostHeaderSection({
    onCreatePost,
    onOpenCategoryManager,
}: PostHeaderSectionProps) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-3xl flex-col gap-1.5">
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-semibold">
                        Portal Publikasi
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Newspaper className="size-3.5 text-primary" />
                        CMS v2.4
                    </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Manajemen Berita & Informasi
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Kelola artikel, siaran pers, dan pengumuman resmi website
                    sekolah untuk SMA Negeri 1 Prestasi.
                </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
                <Button variant="outline" onClick={onOpenCategoryManager}>
                    Kelola Kategori
                </Button>
                <Button onClick={onCreatePost}>
                    <Plus />
                    Tulis Berita Baru
                </Button>
            </div>
        </div>
    );
}
