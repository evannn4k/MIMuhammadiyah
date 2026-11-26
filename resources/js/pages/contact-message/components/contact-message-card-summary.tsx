import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, X, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { ContactMessageSummary } from '@/types/contact-message';

interface ContactMessageCardSummaryProps {
    summary: ContactMessageSummary;
}

export default function ContactMessageCardSummary({ summary }: ContactMessageCardSummaryProps) {
    const items = [
        { label: 'Total Pesan', value: summary.total_messages, icon: Mail },
        { label: 'Belum Dibaca', value: summary.unread_count, icon: MessageSquare },
        { label: 'Sudah Dibaca', value: summary.read_count, icon: X },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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