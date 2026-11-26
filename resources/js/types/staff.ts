export interface Staff {
    id: number;
    name: string;
    email: string;
    avatar: string;
    nip: string;
    nuptk: string;
    group: 'Leadership' | 'Teacher' | 'Staff (GTK)';
    position: string;
    subject: string;
    education: string;
    education_institution: string;
    status: 'active' | 'hidden' | 'on_leave';
    status_label: string;
}

export interface StaffFilters {
    search?: string;
    group?: string;
    subject?: string;
    status?: string;
    page?: number;
    per_page?: number;
    sort?: string;
    direction?: 'asc' | 'desc';
}
