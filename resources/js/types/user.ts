export type UserStatus = "active" | "inactive";

export interface User {
    id: string;
    name: string;
    email: string;
    email_verified_at: string | null;
    password: string;
    is_active: boolean;
    position: string | null;
    last_login_at: string | null;
    role_id?: number;
    role_name?: string;
    status: UserStatus;
    created_at: string;
    updated_at?: string;
    [key: string]: any;
}

export interface UserFilters {
    search?: string;
    status?: string;
    sort?: string;
    direction?: string;
    page?: string;
    per_page?: string;
}

export interface UserSummary {
    total: number;
    active: number;
    inactive: number;
    admin: number;
}
