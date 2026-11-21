import { Newspaper, Users, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { PostSummary } from '@/types/post';

interface PostCardSummaryProps {
    summary: PostSummary;
}

export default function PostCardSummary({ summary }: PostCardSummaryProps) {
    const items = [
        {
            label: 'Total Publikasi',
            value: summary.total_publications,
            icon: Newspaper,
        },
        {
            label: 'Total Pembaca',
            value: summary.total_readers.toLocaleString(),
            icon: Users,
        },
        { label: 'Draft Disiapkan', value: summary.draft_count, icon: Clock },
        {
            label: 'Interaksi Masuk',
            value: summary.comments_pending_moderation,
            icon: MessageSquare,
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
                <Card key={item.label} className="bg-muted/50">
                    <CardContent className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">
                                {item.label}
                            </span>
                            <span className="text-2xl font-semibold">
                                {item.value}
                            </span>
                        </div>
                        <item.icon className="size-8 text-muted-foreground" />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
