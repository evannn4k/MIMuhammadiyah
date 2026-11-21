export interface SchoolProfileFilter {
    search?: string;
    sort?: string;
    direction?: string;
    page?: string;
    per_page?: string;
}

export interface MissionItem {
    order: number;
    content: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon?: string;
}

export interface SchoolProfile {
    id: string;
    name: string;
    tagline: string | null;
    npsn: string | null;
    nsm: string | null;
    accreditation: string | null;
    accreditation_year: string | null;
    established_year: string | null;
    logo: string | null;
    history: string | null;
    vision: string | null;
    mission: MissionItem[];
    headmaster_name: string | null;
    headmaster_photo: string | null;
    headmaster_greeting: string | null;
    org_structure_image: string | null;
    address: string;
    village: string | null;
    district: string | null;
    regency: string | null;
    province: string | null;
    postal_code: string | null;
    phone: string | null;
    whatsapp: string | null;
    email: string | null;
    latitude: string | null;
    longitude: string | null;
    maps_embed_url: string | null;
    social_links: SocialLink[];
    created_at: string;
    updated_at?: string;
    [key: string]: any;
}
