export interface Slider {
    id: number;
    title: string;
    subtitle?: string;
    category: string;
    image_path: string;
    cta_text?: string;
    cta_url?: string;
    sort_order: number;
    is_active: boolean;
    target_device: SliderTargetDevice;
    starts_at?: string;
    ends_at?: string;
    created_at: string;
    updated_at?: string;
}

export type SliderTargetDevice = 'all' | 'desktop' | 'mobile';

export interface SliderFilters {
    search?: string;
    status?: 'all' | 'active' | 'inactive' | 'scheduled';
    sort?: string;
    direction?: 'asc' | 'desc';
    page?: string;
    per_page?: string;
}

export interface SliderSummary {
    total_active: number;
    total_inactive: number;
    total_scheduled: number;
    max_slots: number;
}