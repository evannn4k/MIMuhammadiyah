import type { Slider, SliderFilters, SliderSummary } from '@/types/slider';
import type { LaravelPagination } from '@/types/pagination';

export const mockSliders: Slider[] = [
    {
        id: 1,
        title: 'Penerimaan Peserta Didik Baru (PPDB) TA 2025/2026 Gelombang I Telah Dibuka',
        subtitle: 'Daftarkan putra-putri Anda dan raih beasiswa prestasi akademik & non-akademik di SMA 1 Prestasi unggulan.',
        image_path: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0OuW6jcoh3pq-1_zORVcjZWku-asrgkk576UW7QkY9hTU-eFuq1qWfbCt6FPpFSPUI2A_Al1X1KKZeJNTPdHV8ZeI0ccvGL_7oPfM2UxvfrN_R8ke06o-o5xwKH7XoJDus8lOvW0ooGmWN0-Ip-vCPRqfTf_t7F9iZ_D1h46vzp1cwper82xYlAglEwZ2X-q_7nWAXJQ3Z1_jydtEP3EI0KN9jT7pmpageHLjgWLp',
        cta_text: 'Daftar Sekarang',
        cta_url: '/ppdb-2025',
        sort_order: 1,
        is_active: true,
        target_device: 'all',
        starts_at: '2024-12-01T00:00:00Z',
        ends_at: '2025-01-15T23:59:59Z',
        created_at: '2024-11-20T10:00:00Z',
        updated_at: '2024-11-25T14:30:00Z',
    },
    {
        id: 2,
        title: 'Juara Umum Olimpiade Sains Nasional (OSN) 2024 Tingkat Nasional',
        subtitle: 'Selamat kepada kontingen siswa SMA 1 Prestasi yang berhasil menyabet 3 Medali Emas dan 2 Perak.',
        image_path: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfcx1gmS7Kz4kWV0zHhtXPCu6rkmMb5JBO4_5ef_BESJMur4kHBo0Wx2aGv9dC3w2eYluY-mi1nCKo4GTPVgZa3q6ar2m0feMYa4eP0-McRFwDVuovaX4-TaLPRd5HBEotqiQV5s4haXc-QyslH_HRIcMkndx6YfnYgpth6cltGWkZRmnwgXxhqn98pzdfLDkYLLXbdqHhGXgRYjaCXeBWgXcfXwifOf29IyXvMScl',
        cta_text: 'Lihat Rekam Jejak',
        cta_url: '/prestasi/osn-2024',
        sort_order: 2,
        is_active: true,
        target_device: 'all',
        starts_at: '2024-11-01T00:00:00Z',
        ends_at: undefined,
        created_at: '2024-10-15T08:00:00Z',
    },
    {
        id: 3,
        title: 'Transformasi Pembelajaran Berbasis AI & Laboratorium Digital Terpadu',
        subtitle: 'Menyiapkan talenta masa depan yang adaptif teknologi, berkarakter luhur, dan berdaya saing global.',
        image_path: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL4iEJ1WlUJE7Fg69WoUfqMAJkr2C4c67QLN68Gh0rvgJxts92fLSq9FljrwGqVh4gRN1ZZA55fkSL_Jx6UCDKirom1c69_2ZbaSTfK5aCncU7OiF1U_EDan2mHZmF-Z90lwtOoF54NeaZQV-BmdeeQIakAFdYeNhWnFXOUlz0zRG9BBg7pcPvmwpnYdpns10YSaXBi_EAUmwoGN3aOMGFv5AslSofwfUgrZHQ2YUH',
        cta_text: 'Jelajahi Fasilitas',
        cta_url: '/profil/fasilitas',
        sort_order: 3,
        is_active: true,
        target_device: 'desktop',
        starts_at: '2024-11-01T00:00:00Z',
        ends_at: '2025-04-30T23:59:59Z',
        created_at: '2024-10-20T12:00:00Z',
    },
    {
        id: 4,
        title: 'Malam Puncak Peringatan HUT SMA Negeri 1 Prestasi ke-42: Gelora Inovasi',
        subtitle: 'Rangkaian perlombaan seni budaya, pameran karya ilmiah siswa, dan temu kangen alumni lintas angkatan.',
        image_path: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc52SKQ38776hOJQ2ZeywmbQjQdU4xmZUG32KVFr3SzV5L70HwQ-blWVzlGKDL3vehJhtyGgadW5rqdvAxQ6RHiZ4gjNSMY-Is5soyhr2lEjj_UzZvtazvE0LeTuP1afcIeJ8rr2T-5vHPiyjQLv-kAKXEy9ihjmUb0YqZ9qa7ieMXHI5bhBogmjHM2a-zByQ15-9HePhLPibqcN0kZzf-brzGlmmSjwmylFp7r4eL',
        cta_text: 'Beli Tiket & Jadwal',
        cta_url: '/agenda/hut-42',
        sort_order: 4,
        is_active: false,
        target_device: 'all',
        starts_at: '2025-01-20T00:00:00Z',
        ends_at: '2025-01-30T23:59:59Z',
        created_at: '2024-12-01T09:00:00Z',
    },
    {
        id: 5,
        title: 'Klub Robotika & STEM: Perekrutan Anggota Baru Angkatan 2025',
        subtitle: 'Bangun robot impianmu dan ikuti kompetisi internasional mewakili sekolah ke Tokyo dan Seoul.',
        image_path: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIbadusXA5bCzNpjo9lsML3hMTr_lhZ_suGKWmqwIEZqXvPvY7LNs6IOHvUzUcvo1vneMWaSUX6Ci67rtBhUgCs5rDZkQFz4yewh0UIvX4mbMsJK2QbWZrURKR6tLr76Hg93oLpwdCQXz_jI18kQLXud7wYHJQzW3bnovuQsbvn3XljlKC1bfMTl7rcrLjTYlBi6XMCxHnzsIP2SHF_YTRthmm6rYg-Awfmx2niJhg',
        cta_text: 'Gabung Sekarang',
        cta_url: '/ekskul/robotik',
        sort_order: 5,
        is_active: false,
        target_device: 'mobile',
        starts_at: undefined,
        ends_at: undefined,
        created_at: '2024-11-15T16:00:00Z',
    },
];

export function queryMock(filters: SliderFilters): LaravelPagination<Slider> {
    let data = [...mockSliders];

    if (filters.search) {
        const search = filters.search.toLowerCase();
        data = data.filter(
            (slider) =>
                slider.title.toLowerCase().includes(search) ||
                slider.subtitle?.toLowerCase().includes(search),
        );
    }

    if (filters.status && filters.status !== 'all') {
        const now = new Date();
        data = data.filter((slider) => {
            const start = slider.starts_at ? new Date(slider.starts_at) : null;
            const end = slider.ends_at ? new Date(slider.ends_at) : null;
            const isScheduled = start && start > now;
            const isExpired = end && end < now;
            const isActive = slider.is_active && !isScheduled && !isExpired;

            switch (filters.status) {
                case 'active':
                    return isActive;
                case 'inactive':
                    return !slider.is_active || isExpired;
                case 'scheduled':
                    return isScheduled;
                default:
                    return true;
            }
        });
    }

    const sort = filters.sort ?? 'sort_order';
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
        links: {
            first: `/dashboard/slider?page=1`,
            prev: page > 1 ? `/dashboard/slider?page=${page - 1}` : null,
            next: page < lastPage ? `/dashboard/slider?page=${page + 1}` : null,
            last: `/dashboard/slider?page=${lastPage}`,
        },
        meta: {
            current_page: page,
            from,
            last_page: lastPage,
            links: [
                {
                    url: `/dashboard/slider?page=1`,
                    label: '1',
                    active: page === 1,
                },
                ...(page > 1
                    ? [
                          {
                              url: `/dashboard/slider?page=${page - 1}`,
                              label: 'Previous',
                              active: false,
                          },
                      ]
                    : []),
                ...(page < lastPage
                    ? [
                          {
                              url: `/dashboard/slider?page=${page + 1}`,
                              label: 'Next',
                              active: false,
                          },
                      ]
                    : []),
                {
                    url: `/dashboard/slider?page=${lastPage}`,
                    label: String(lastPage),
                    active: page === lastPage,
                },
            ],
            path: '/dashboard/slider',
            per_page: perPage,
            to,
            total,
        },
    };
}

export function mockSummary(): SliderSummary {
    const now = new Date();
    let totalActive = 0;
    let totalInactive = 0;
    let totalScheduled = 0;

    mockSliders.forEach((slider) => {
        const start = slider.starts_at ? new Date(slider.starts_at) : null;
        const end = slider.ends_at ? new Date(slider.ends_at) : null;
        const isScheduled = start && start > now;
        const isExpired = end && end < now;
        const isActive = slider.is_active && !isScheduled && !isExpired;

        if (isActive) {
            totalActive++;
        } else if (isScheduled) {
            totalScheduled++;
        } else {
            totalInactive++;
        }
    });

    return {
        total_active: totalActive,
        total_inactive: totalInactive,
        total_scheduled: totalScheduled,
        max_slots: 7,
    };
}