import type { Role, RoleFilters, RoleSummary } from '@/types/role';
import type { Paginated } from '@/types/pagination';

export const mockRoles: Role[] = [
    {
        id: 1,
        name: 'Super Admin',
        description: 'Hak akses absolut tidak terbatas ke seluruh sistem.',
        permission_count: 15,
        user_count: 2,
        created_at: '2026-01-05T08:00:00Z',
    },
    {
        id: 2,
        name: 'Admin Konten / Humas',
        description: 'Akses Berita Publik, Galeri Media, dan Slider Beranda.',
        permission_count: 6,
        user_count: 4,
        created_at: '2026-01-08T09:30:00Z',
    },
    {
        id: 3,
        name: 'Kurikulum & Guru',
        description: 'Entri Prestasi Siswa, Profil Akademik, dan Biodata.',
        permission_count: 4,
        user_count: 62,
        created_at: '2026-01-12T11:15:00Z',
    },
    {
        id: 4,
        name: 'Staff Administrasi',
        description: 'Akses Laporan Keuangan dan Manajemen Pesan Masyarakat.',
        permission_count: 3,
        user_count: 18,
        created_at: '2026-01-15T14:20:00Z',
    },
    {
        id: 5,
        name: 'Guru Pembimbing',
        description:
            'Entri Data Siswa, Evidensi Pembimbingan, dan Review Prestasi.',
        permission_count: 3,
        user_count: 35,
        created_at: '2026-02-01T16:45:00Z',
    },
];

export const mockGroupedPermissions: Record<
    string,
    { name: string; description: string }[]
> = {
    user: [
        { name: 'user.create', description: 'Tambah Pengguna' },
        { name: 'user.read', description: 'Lihat Pengguna' },
        { name: 'user.update', description: 'Edit Pengguna' },
        { name: 'user.delete', description: 'Hapus Pengguna' },
    ],
    role: [
        { name: 'role.create', description: 'Tambah Peran' },
        { name: 'role.read', description: 'Lihat Peran' },
        { name: 'role.update', description: 'Edit Peran' },
        { name: 'role.delete', description: 'Hapus Peran' },
        { name: 'role.sync-permissions', description: 'Sinkronkan Izin Peran' },
    ],
    post: [
        { name: 'post.create', description: 'Entri Berita & Artikel' },
        { name: 'post.read', description: 'Lihat Berita' },
        { name: 'post.update', description: 'Edit Berita & Artikel' },
        { name: 'post.delete', description: 'Hapus Berita & Artikel' },
        { name: 'post.publish', description: 'Publikasikan Berita' },
    ],
    gallery: [
        { name: 'gallery.create', description: 'Entri Album Foto' },
        { name: 'gallery.read', description: 'Lihat Galeri' },
        { name: 'gallery.update', description: 'Edit Album Foto' },
        { name: 'gallery.delete', description: 'Hapus Album Foto' },
    ],
    slider: [
        { name: 'slider.create', description: 'Tambah Slider' },
        { name: 'slider.read', description: 'Lihat Slider' },
        { name: 'slider.update', description: 'Edit Slider' },
        { name: 'slider.delete', description: 'Hapus Slider' },
        { name: 'slider.reorder', description: 'Urutkan Slider' },
    ],
    achievement: [
        { name: 'achievement.create', description: 'Entri Prestasi Siswa' },
        { name: 'achievement.read', description: 'Lihat Prestasi' },
        { name: 'achievement.update', description: 'Edit Prestasi Siswa' },
        { name: 'achievement.delete', description: 'Hapus Prestasi Siswa' },
        { name: 'achievement.verify', description: 'Verifikasi Prestasi' },
    ],
    staff: [
        { name: 'staff.create', description: 'Tambah Guru & Staff' },
        { name: 'staff.read', description: 'Lihat Guru & Staff' },
        { name: 'staff.update', description: 'Edit Guru & Staff' },
        { name: 'staff.delete', description: 'Hapus Guru & Staff' },
    ],
    facility: [
        { name: 'facility.create', description: 'Tambah Fasilitas' },
        { name: 'facility.read', description: 'Lihat Fasilitas' },
        { name: 'facility.update', description: 'Edit Fasilitas' },
        { name: 'facility.delete', description: 'Hapus Fasilitas' },
    ],
    'school-profile': [
        { name: 'school-profile.update', description: 'Edit Profil Sekolah' },
        { name: 'school-profile.read', description: 'Lihat Profil Sekolah' },
    ],
    'contact-message': [
        { name: 'contact-message.read', description: 'Lihat Pesan Masuk' },
        { name: 'contact-message.delete', description: 'Hapus Pesan' },
        { name: 'contact-message.reply', description: 'Balas Pesan' },
    ],
    'social-link': [
        { name: 'social-link.create', description: 'Tambah Media Sosial' },
        { name: 'social-link.read', description: 'Lihat Media Sosial' },
        { name: 'social-link.update', description: 'Edit Media Sosial' },
        { name: 'social-link.delete', description: 'Hapus Media Sosial' },
    ],
    setting: [
        { name: 'setting.read', description: 'Lihat Pengaturan' },
        { name: 'setting.update', description: 'Edit Pengaturan' },
    ],
};

// TODO(backend): replace with Inertia props
export function queryMock(filters: RoleFilters): Paginated<Role> {
    let data = [...mockRoles];

    if (filters.search) {
        const search = filters.search.toLowerCase();
        data = data.filter(
            (role) =>
                role.name.toLowerCase().includes(search) ||
                role.description.toLowerCase().includes(search),
        );
    }

    const sort = filters.sort ?? 'name';
    const direction = filters.direction === 'asc' ? 'asc' : 'desc';

    data.sort((a, b) => {
        const left = (a as Record<string, any>)[sort];
        const right = (b as Record<string, any>)[sort];

        if (left === right) {
            return 0;
        }

        return (left > right ? 1 : -1) * (direction === 'asc' ? 1 : -1);
    });

    const page = Math.max(Number(filters.page) || 1, 1);
    const perPage = Math.max(Number(filters.per_page) || 4, 1);
    const total = data.length;
    const lastPage = Math.max(Math.ceil(total / perPage), 1);
    const from = total === 0 ? null : (page - 1) * perPage + 1;
    const to = total === 0 ? null : Math.min(page * perPage, total);

    return {
        data: data.slice((page - 1) * perPage, page * perPage),
        current_page: page,
        last_page: lastPage,
        per_page: perPage,
        total,
        from,
        to,
        links: {
            first: '/dashboard/role?page=1',
            prev: page > 1 ? `/dashboard/role?page=${page - 1}` : null,
            next: page < lastPage ? `/dashboard/role?page=${page + 1}` : null,
            last: `/dashboard/role?page=${lastPage}`,
        },
    };
}

// TODO(backend): replace with the summary Inertia prop
export function summaryMock(): RoleSummary {
    return {
        total_roles: mockRoles.length,
        total_users: mockRoles.reduce((sum, role) => sum + role.user_count, 0),
        active_permissions: mockRoles.reduce(
            (sum, role) => sum + role.permission_count,
            0,
        ),
    };
}
