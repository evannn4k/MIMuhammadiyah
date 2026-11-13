import type { User, UserFilters, UserSummary } from '@/types/user';
import type { Paginated } from '@/types/pagination';

// TODO(backend): replace with Inertia props
export const mockUsers: User[] = [
    {
        id: 'usr-1',
        name: 'Ahmad Dahlan',
        email: 'ahmad.dahlan@mimuhammadiyah.sch.id',
        email_verified_at: '2026-01-05T08:00:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Kepala Sekolah',
        last_login_at: '2026-11-10T08:00:00Z',
        role: 'admin',
        status: 'active',
        created_at: '2026-01-05T08:00:00Z',
    },
    {
        id: 'usr-2',
        name: 'Siti Walidah',
        email: 'siti.walidah@mimuhammadiyah.sch.id',
        email_verified_at: '2026-01-08T09:30:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Wakil Kepala Sekolah',
        last_login_at: '2026-11-11T09:30:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-01-08T09:30:00Z',
    },
    {
        id: 'usr-3',
        name: 'Budi Santoso',
        email: 'budi.santoso@mimuhammadiyah.sch.id',
        email_verified_at: '2026-01-12T11:15:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-12T11:15:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-01-12T11:15:00Z',
    },
    {
        id: 'usr-4',
        name: 'Dewi Rahmawati',
        email: 'dewi.rahmawati@mimuhammadiyah.sch.id',
        email_verified_at: '2026-01-15T14:20:00Z',
        password: '$2y$10$hashedpassword',
        is_active: false,
        position: 'Staff TU',
        last_login_at: null,
        role: 'staff',
        status: 'inactive',
        created_at: '2026-01-15T14:20:00Z',
    },
    {
        id: 'usr-5',
        name: 'Eko Prasetyo',
        email: 'eko.prasetyo@mimuhammadiyah.sch.id',
        email_verified_at: '2026-01-20T10:00:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-13T10:00:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-01-20T10:00:00Z',
    },
    {
        id: 'usr-6',
        name: 'Fauzi Abdullah',
        email: 'fauzi.abdullah@mimuhammadiyah.sch.id',
        email_verified_at: '2026-01-25T07:30:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Kepala Sekolah',
        last_login_at: '2026-11-10T07:30:00Z',
        role: 'admin',
        status: 'active',
        created_at: '2026-01-25T07:30:00Z',
    },
    {
        id: 'usr-7',
        name: 'Hadiyah Suharti',
        email: 'hadiyah.suharti@mimuhammadiyah.sch.id',
        email_verified_at: '2026-02-01T16:45:00Z',
        password: '$2y$10$hashedpassword',
        is_active: false,
        position: 'Staff TU',
        last_login_at: null,
        role: 'staff',
        status: 'inactive',
        created_at: '2026-02-01T16:45:00Z',
    },
    {
        id: 'usr-8',
        name: 'Irjani Mawardi',
        email: 'irjani.mawardi@mimuhammadiyah.sch.id',
        email_verified_at: '2026-02-05T09:15:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-12T09:15:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-02-05T09:15:00Z',
    },
    {
        id: 'usr-9',
        name: 'Joko Susilo',
        email: 'joko.susilo@mimuhammadiyah.sch.id',
        email_verified_at: '2026-02-10T13:00:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-11T13:00:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-02-10T13:00:00Z',
    },
    {
        id: 'usr-10',
        name: 'Khadijah Rahma',
        email: 'khadijah.rahma@mimuhammadiyah.sch.id',
        email_verified_at: '2026-02-14T08:45:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-10T08:45:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-02-14T08:45:00Z',
    },
    {
        id: 'usr-11',
        name: 'Lukman Hakim',
        email: 'lukman.hakim@mimuhammadiyah.sch.id',
        email_verified_at: '2026-02-18T10:30:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Staff TU',
        last_login_at: '2026-11-12T10:30:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-02-18T10:30:00Z',
    },
    {
        id: 'usr-12',
        name: 'Maryam Sholeha',
        email: 'maryam.sholeha@mimuhammadiyah.sch.id',
        email_verified_at: '2026-02-22T15:10:00Z',
        password: '$2y$10$hashedpassword',
        is_active: false,
        position: 'Guru',
        last_login_at: null,
        role: 'editor',
        status: 'inactive',
        created_at: '2026-02-22T15:10:00Z',
    },
    {
        id: 'usr-13',
        name: 'Nur Hidayah',
        email: 'nur.hidayah@mimuhammadiyah.sch.id',
        email_verified_at: '2026-03-01T09:00:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Kepala Sekolah',
        last_login_at: '2026-11-11T09:00:00Z',
        role: 'admin',
        status: 'active',
        created_at: '2026-03-01T09:00:00Z',
    },
    {
        id: 'usr-14',
        name: 'Osama Bin Muchtar',
        email: 'osama.muchtar@mimuhammadiyah.sch.id',
        email_verified_at: '2026-03-04T11:40:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Staff TU',
        last_login_at: '2026-11-10T11:40:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-03-04T11:40:00Z',
    },
    {
        id: 'usr-15',
        name: 'Putri Anggraini',
        email: 'putri.anggraini@mimuhammadiyah.sch.id',
        email_verified_at: '2026-03-09T08:20:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-12T08:20:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-03-09T08:20:00Z',
    },
    {
        id: 'usr-16',
        name: 'Qomaruddin',
        email: 'qomaruddin@mimuhammadiyah.sch.id',
        email_verified_at: '2026-03-13T14:55:00Z',
        password: '$2y$10$hashedpassword',
        is_active: false,
        position: 'Staff TU',
        last_login_at: null,
        role: 'staff',
        status: 'inactive',
        created_at: '2026-03-13T14:55:00Z',
    },
    {
        id: 'usr-17',
        name: 'Rahmat Firdaus',
        email: 'rahmat.firdaus@mimuhammadiyah.sch.id',
        email_verified_at: '2026-03-17T10:05:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-11T10:05:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-03-17T10:05:00Z',
    },
    {
        id: 'usr-18',
        name: 'Sumarni Wibowo',
        email: 'sumarni.wibowo@mimuhammadiyah.sch.id',
        email_verified_at: '2026-03-21T09:25:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-10T09:25:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-03-21T09:25:00Z',
    },
    {
        id: 'usr-19',
        name: 'Taufik Hidayat',
        email: 'taufik.hidayat@mimuhammadiyah.sch.id',
        email_verified_at: '2026-03-26T13:35:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-12T13:35:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-03-26T13:35:00Z',
    },
    {
        id: 'usr-20',
        name: 'Umi Kulsum',
        email: 'umi.kulsum@mimuhammadiyah.sch.id',
        email_verified_at: '2026-04-02T08:10:00Z',
        password: '$2y$10$hashedpassword',
        is_active: false,
        position: 'Kepala Sekolah',
        last_login_at: null,
        role: 'admin',
        status: 'inactive',
        created_at: '2026-04-02T08:10:00Z',
    },
    {
        id: 'usr-21',
        name: 'Vina Oktaviani',
        email: 'vina.oktaviani@mimuhammadiyah.sch.id',
        email_verified_at: '2026-04-07T15:45:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Staff TU',
        last_login_at: '2026-11-11T15:45:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-04-07T15:45:00Z',
    },
    {
        id: 'usr-22',
        name: 'Wahyu Nugroho',
        email: 'wahyu.nugroho@mimuhammadiyah.sch.id',
        email_verified_at: '2026-04-12T10:50:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-10T10:50:00Z',
        role: 'editor',
        status: 'active',
        created_at: '2026-04-12T10:50:00Z',
    },
    {
        id: 'usr-23',
        name: 'Xena Amalia',
        email: 'xena.amalia@mimuhammadiyah.sch.id',
        email_verified_at: '2026-04-18T09:05:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Guru',
        last_login_at: '2026-11-12T09:05:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-04-18T09:05:00Z',
    },
    {
        id: 'usr-24',
        name: 'Yusuf Mansur',
        email: 'yusuf.mansur@mimuhammadiyah.sch.id',
        email_verified_at: '2026-04-23T11:55:00Z',
        password: '$2y$10$hashedpassword',
        is_active: false,
        position: 'Guru',
        last_login_at: null,
        role: 'editor',
        status: 'inactive',
        created_at: '2026-04-23T11:55:00Z',
    },
    {
        id: 'usr-25',
        name: 'Zahra Aulia',
        email: 'zahra.aulia@mimuhammadiyah.sch.id',
        email_verified_at: '2026-04-28T14:15:00Z',
        password: '$2y$10$hashedpassword',
        is_active: true,
        position: 'Staff TU',
        last_login_at: '2026-11-11T14:15:00Z',
        role: 'staff',
        status: 'active',
        created_at: '2026-04-28T14:15:00Z',
    },
];

// TODO(backend): replace with the paginated Inertia prop
export function queryMock(filters: UserFilters): Paginated<User> {
    let data = [...mockUsers];

    if (filters.search) {
        const search = filters.search.toLowerCase();
        data = data.filter(
            (user) =>
                user.name.toLowerCase().includes(search) ||
                user.email.toLowerCase().includes(search),
        );
    }

    if (filters.status) {
        data = data.filter((user) => user.status === filters.status);
    }

    const sort = filters.sort ?? 'created_at';
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
    const perPage = Math.max(Number(filters.per_page) || 10, 1);
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
            first: '/dashboard/user?page=1',
            prev: page > 1 ? `/dashboard/user?page=${page - 1}` : null,
            next: page < lastPage ? `/dashboard/user?page=${page + 1}` : null,
            last: `/dashboard/user?page=${lastPage}`,
        },
    };
}

// TODO(backend): replace with the summary Inertia prop
export function summaryMock(): UserSummary {
    return {
        total: mockUsers.length,
        active: mockUsers.filter((user) => user.status === 'active').length,
        inactive: mockUsers.filter((user) => user.status === 'inactive').length,
        admin: mockUsers.filter((user) => user.role === 'admin').length,
    };
}
