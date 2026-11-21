export interface GalleryItem {
    id: number;
    title: string;
    category: GalleryCategory;
    format: GalleryFormat;
    file_size: string;
    dimensions: string;
    status: GalleryStatus;
    period: string;
    uploaded_at: string;
    uploaded_by: string;
    image_url: string | null;
    is_published: boolean;
}

export type GalleryCategory =
    | 'Seni & Budaya'
    | 'Ekstrakurikuler'
    | 'Upacara & Resmi'
    | 'Kunjungan Edukasi'
    | 'Kepemimpinan'
    | 'Fasilitas Sekolah';

export type GalleryFormat = 'JPG / JPEG' | 'PNG' | 'WebP';

export type GalleryStatus = 'Tampil Publik' | 'Draft Lampiran' | 'Terarsip';

export interface GalleryFilters {
    search?: string;
    category?: string;
    format?: string;
    period?: string;
    status?: string;
    sort?: string;
    direction?: 'asc' | 'desc';
    page?: string;
    per_page?: string;
}

export interface GallerySummary {
    total_attachments: number;
    active_attachments: number;
    top_formats: string;
    storage_used: string;
    storage_total: string;
    storage_percentage: number;
    uploaded_this_month: number;
}