import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { useModal } from '@/hooks/use-modal';
import type { ContactMessageSummary, Message, ContactMessageFilters } from '@/types/contact-message';
import ContactMessageHeaderSection from './components/contact-message-header-section';
import ContactMessageCardSummary from './components/contact-message-card-summary';
import ContactMessageToolbar from './components/contact-message-toolbar';
import ContactMessageList from './components/contact-message-list';
import ContactMessageDetail from './components/contact-message-detail';
import { Mail, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactMessagePageProps {
    filters: ContactMessageFilters;
    messages: Message[];
    summary: ContactMessageSummary;
}

export default function ContactMessagePage({
    filters,
    messages,
    summary,
}: ContactMessagePageProps) {
    const modal = useModal();
    const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);

    const handleSelectMessage = (id: number) => {
        setSelectedMessageId(id);
    };

    const handleMarkAsRead = (id: number) => {
        // TODO(backend): mark as read via API
        // Placeholder route call - will be implemented after backend API
    };

    const handleDelete = (id: number) => {
        // TODO(backend): delete message via API
        console.log('Delete message:', id);
    };

    const selectedMessage = messages.find((m) => m.id === selectedMessageId);

    return (
        <>
            <Head title="Pesan Masuk" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <ContactMessageHeaderSection
                    summary={summary}
                    filters={filters}
                    updateQuery={(params) =>
                        router.get(
                            dashboardRoutes.contactMessage.index(),
                            params,
                            {
                                preserveState: true,
                                preserveScroll: true,
                                replace: true,
                            },
                        )
                    }
                    onCreate={modal.openCreate}
                />
                <ContactMessageCardSummary summary={summary} />
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <div className="xl:col-span-4">
                        <Card className="bg-muted/50 h-full flex flex-col">
                            <CardHeader className="p-4 pb-2">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Mail className="text-primary" /> Kotak Masuk
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 flex-1 flex flex-col">
                                <ContactMessageToolbar
                                    query={filters}
                                    updateQuery={(params) =>
                                        router.get(
                                            dashboardRoutes.contactMessage.index(),
                                            params,
                                            {
                                                preserveState: true,
                                                preserveScroll: true,
                                                replace: true,
                                            },
                                        )
                                    }
                                />
                                <div className="flex-1 overflow-y-auto p-4">
                                    <ContactMessageList
                                        messages={messages}
                                        selectedId={selectedMessageId}
                                        onSelect={handleSelectMessage}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="xl:col-span-8">
                        {selectedMessage ? (
                            <ContactMessageDetail
                                message={selectedMessage}
                                onBack={() => setSelectedMessageId(null)}
                                onMarkAsRead={handleMarkAsRead}
                                onDelete={handleDelete}
                            />
                        ) : (
                            <Card className="bg-muted/50 h-full flex items-center justify-center">
                                <CardContent className="text-center">
                                    <MessageSquare className="size-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">
                                        Pilih pesan untuk melihat detail
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

ContactMessagePage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Pesan Masuk',
            href: dashboardRoutes.contactMessage.index(),
        },
    ],
};