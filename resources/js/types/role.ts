export interface Role {
    id: number;
    name: string;
    description: string;
    permission_count: number;
    user_count: number;
    permissions?: string[];
    is_system: boolean;
    created_at: string;
    updated_at?: string;
}

export interface RoleFilters {
    search?: string;
    tier?: string;
    sort?: string;
    direction?: string;
    page?: string;
    per_page?: string;
}

export interface RoleSummary {
    total_roles: number;
    total_users: number;
    active_permissions: number;
}

export interface RoleName {
    id: number;
    name: string;
}
