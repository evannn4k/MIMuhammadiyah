export interface Post {
    id: number;
    title: string;
    slug: string;
    category: string;
    status: PostStatus;
    content: string;
    excerpt: string;
    author_id: number;
    author_name: string;
    author_position: string;
    published_at?: string;
    scheduled_at?: string;
    view_count: number;
    comment_count: number;
    is_published: boolean;
    is_scheduled: boolean;
    media_url?: string;
    tags: string[];
    created_at: string;
    updated_at?: string;
}

export type PostStatus = 'published' | 'draft' | 'archived';

export interface PostFilters {
    search?: string;
    category?: string;
    status?: PostStatus;
    sort?: string;
    direction?: 'asc' | 'desc';
    page?: string;
    per_page?: string;
}

export interface PostSummary {
    total_publications: number;
    total_readers: number;
    draft_count: number;
    pending_review: number;
    comments_pending_moderation: number;
}

export interface Tag {
    id: number;
    name: string;
}
