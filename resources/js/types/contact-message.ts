export interface Message {
    id: number;
    sender_name: string;
    sender_email: string;
    subject: string;
    message_body: string;
    created_at: string;
    is_read: boolean;
    is_new: boolean;
}

export interface ContactMessageFilters {
    search?: string;
    is_read?: 'read' | 'unread' | 'all';
    page?: number;
    per_page?: number;
    sort?: string;
    direction?: 'asc' | 'desc';
}

export interface ContactMessageSummary {
    total_messages: number;
    unread_count: number;
    read_count: number;
}