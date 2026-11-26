export interface Facility {
    id: number;
    name: string;
    slug: string;
    description: string;
    image_url: string;
    capacity: number;
    capacity_label: string;
    condition: 'good' | 'fair' | 'repair';
    status: 'active' | 'inactive';
    published: boolean;
}

export interface FacilityFilters {
    search?: string;
    condition?: string;
    capacity?: string;
    status?: string;
    page?: number;
    per_page?: number;
    sort?: string;
    direction?: 'asc' | 'desc';
}