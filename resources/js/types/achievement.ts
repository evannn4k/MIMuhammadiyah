export interface Achievement {
    id: number;
    title: string;
    category: AchievementCategory;
    level: AchievementLevel;
    recipient_type: RecipientType;
    recipient_name: string;
    recipient_class?: string;
    rank: string;
    instituted_at: string;
    organizer: string;
    image_url: string | null;
    slug: string;
    is_published: boolean;
    achievement_year: number;
    created_at: string;
    updated_at?: string;
}

export type AchievementCategory =
    | 'Akademik'
    | 'Non-Akademik'
    | 'Olahraga'
    | 'Seni & Budaya'
    | 'Keagamaan';

export type AchievementLevel =
    | 'Sekolah'
    | 'Kecamatan'
    | 'Kabupaten / Kota'
    | 'Provinsi'
    | 'Nasional'
    | 'Internasional';

export type RecipientType = 'student' | 'teacher' | 'school';

export interface AchievementFilters {
    search?: string;
    category?: string;
    level?: string;
    recipient_type?: string;
    achievement_year?: string;
    is_published?: string;
    sort?: string;
    direction?: 'asc' | 'desc';
    page?: string;
    per_page?: string;
}

export interface AchievementSummary {
    total: number;
    national_international: number;
    national_count: number;
    international_count: number;
    recipient_students: number;
    recipient_teachers: number;
    recipient_schools: number;
    published_count: number;
    total_count: number;
    sync_percentage: number;
    draft_count: number;
}
