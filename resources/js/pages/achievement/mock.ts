import type {
    Achievement,
    AchievementFilters,
    AchievementSummary,
} from '@/types/achievement';
import type { LaravelPagination } from '@/types/pagination';

export const mockAchievements: Achievement[] = [
    {
        id: 1,
        title: 'Gold Medal International Physics Olympiad (IPhO) 2024',
        slug: 'gold-medal-ipho-2024',
        category: 'Akademik',
        level: 'Internasional',
        recipient_type: 'student',
        recipient_name: 'Muhammad Arya Pratama',
        recipient_class: 'Siswa (Kelas XII IPA 1)',
        rank: 'Medali Emas',
        instituted_at: '2024-07-18',
        organizer: 'International Physics Association, Zurich',
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDJQBFyZLlOZPHYq2grSm-0F4dZHtu4xtzIU35R3_4B1G2hxOZcrxZCdsWtRu8sB8BHWBjMXmLHQD7be5mmDxexxy_wXlsivMUBdvlyAqkoykVu52HsVEGa0YuxYG8XaRguKC_D65IbPpb9_svwku87ztoxhY8QXgmni40-YeNXG8DivtfT1Jf6H8SvnKevGJrAAVVyLRAqm9NEjsto-2YUvbiCJBzTZiKwGa8P93--',
        is_published: true,
        achievement_year: 2024,
        created_at: '2024-07-19T10:00:00.000000Z',
    },
    {
        id: 2,
        title: 'Juara 1 Olimpiade Sains Nasional (OSN) Bidang Kimia',
        slug: 'juara-1-osn-kimia-2024',
        category: 'Akademik',
        level: 'Nasional',
        recipient_type: 'student',
        recipient_name: 'Annisa Safitri',
        recipient_class: 'Siswa (Kelas XI MIPA 3)',
        rank: 'Juara 1 (Emas)',
        instituted_at: '2024-09-02',
        organizer: 'Balai Pengembangan Talenta Indonesia (BPTI)',
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD4MiE4itpEU1TvjNpQ1hjDi-GE3sob2ZHT74krm4RdCNbmmo-ws-65iznS83jHhO02smBiDr4mu0C-6zBQMfTX29tcMkIM329tlddI02XL00JiyZi0CGJGICwLLentxpogNQHBfujtkcH3e3XPFTCmmmoc1rEtZjRRCASeZ0s_JD-0Qb1dQpB-u2GY7rEi_Uw64bBb230qLg0T4AVBC7hfjVlZDDCeHYSbl23QiO2y',
        is_published: true,
        achievement_year: 2024,
        created_at: '2024-09-03T08:00:00.000000Z',
    },
    {
        id: 3,
        title: 'Guru Inspiratif & Inovatif Nasional Kemendikbudristek',
        slug: 'guru-inspiratif-nasional-2024',
        category: 'Non-Akademik',
        level: 'Nasional',
        recipient_type: 'teacher',
        recipient_name: 'Bambang Wijanarko, M.Pd.',
        recipient_class: 'Guru (Biologi)',
        rank: 'Terbaik I Nasional',
        instituted_at: '2024-11-25',
        organizer: 'Dirjen GTK Kemendikbudristek RI',
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC3AZzY_XJ2-hRV5bdVD7PoXSiIMX5c4cBFjlNv88njgZuiAZSwQM07RacKRs2xL07r0G9W6uek8c0DbVjYY-yvO2e5MSAUasAkN_XkzrJ6ZuFcub4eWhu9b79HXtVoGG04lDm07afsZMQaCpfB9WhQKDY3YBrqT_At3nIFgqaHX4xLs0Fh38xToagPv3_aFANnK1GJSHNp8cT3-iApvbidtDSXtJnHs3kijHRnHONj',
        is_published: true,
        achievement_year: 2024,
        created_at: '2024-11-26T14:00:00.000000Z',
    },
    {
        id: 4,
        title: 'Juara 1 DBL Championship Seri Jawa Barat 2024',
        slug: 'dbl-championship-jabar-2024',
        category: 'Olahraga',
        level: 'Provinsi',
        recipient_type: 'student',
        recipient_name: 'Tim Basket Putra SMA 1',
        recipient_class: 'Tim Siswa (12 Atlet)',
        rank: 'Champion (Juara 1)',
        instituted_at: '2024-10-14',
        organizer: 'DBL Indonesia & Perbasi Jabar',
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD1pAahladEyj0UMcpVnJeDhg3aNdN_ECad-btiBBhcz_VujMPr0JYg0zLBXLwexTAUpeM0i-M2rDOKNIJM-jd-A4aEobxNjkkU3CTsa4dBqp_MjxJsoXGsQGPWyWyILDxAJsTuL80-wMUl-gC4YGGTfn7tJy0ewQMrcrocHTEshtMHyPlS7jMRry1A-JWGghY4yD15LQjJDlXgjH8fPjF_e11t-CGA70rLHTk9rtpS',
        is_published: true,
        achievement_year: 2024,
        created_at: '2024-10-15T09:00:00.000000Z',
    },
    {
        id: 5,
        title: 'Penghargaan Sekolah Adiwiyata Mandiri Nasional 2024',
        slug: 'adiwiyata-mandiri-2024',
        category: 'Non-Akademik',
        level: 'Nasional',
        recipient_type: 'school',
        recipient_name: 'SMA Negeri 1 Prestasi',
        recipient_class: 'Institusi (Sekolah)',
        rank: 'Predikat Mandiri',
        instituted_at: '2024-06-05',
        organizer: 'Kementerian Lingkungan Hidup & Kehutanan',
        image_url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAKkjcvB6SSH51Def2SxftUxlgWia7cKXLCVHbU54PnW9a23kOH3XneoDiVsnLquiF6u15C5Co9hvVnm-CmKphu__YwxEnwu72MHcNi56cx6qIAM4M-w1sN9qF_4j2x-oM5ySJ75LVOgveo-GuruNbLDsriVyPXwwywfkuWByRWQq_KQrhy_MVYSIA5jme0FAMl-5GRXCqlwVKylsTKOyUN08KxkRseJJ6yJLioc5uk',
        is_published: false,
        achievement_year: 2024,
        created_at: '2024-06-06T11:00:00.000000Z',
    },
];

export function queryMock(filters: AchievementFilters): LaravelPagination<Achievement> {
    let data = [...mockAchievements];

    if (filters.search) {
        const search = filters.search.toLowerCase();
        data = data.filter(
            (achievement) =>
                achievement.title.toLowerCase().includes(search) ||
                achievement.recipient_name.toLowerCase().includes(search) ||
                achievement.category.toLowerCase().includes(search) ||
                achievement.organizer.toLowerCase().includes(search),
        );
    }

    if (filters.category && filters.category !== 'all') {
        data = data.filter(
            (achievement) => achievement.category === filters.category,
        );
    }

    if (filters.level && filters.level !== 'all') {
        data = data.filter(
            (achievement) => achievement.level === filters.level,
        );
    }

    if (filters.recipient_type && filters.recipient_type !== 'all') {
        data = data.filter(
            (achievement) =>
                achievement.recipient_type === filters.recipient_type,
        );
    }

    if (filters.achievement_year && filters.achievement_year !== 'all') {
        data = data.filter(
            (achievement) =>
                achievement.achievement_year ===
                Number(filters.achievement_year),
        );
    }

    if (filters.is_published && filters.is_published !== 'all') {
        data = data.filter((achievement) =>
            filters.is_published === 'true'
                ? achievement.is_published
                : !achievement.is_published,
        );
    }

    const sort = filters.sort ?? 'instituted_at';
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
            first: `/dashboard/prestasi?page=1`,
            prev: page > 1 ? `/dashboard/prestasi?page=${page - 1}` : null,
            next:
                page < lastPage ? `/dashboard/prestasi?page=${page + 1}` : null,
            last: `/dashboard/prestasi?page=${lastPage}`,
        },
        meta: {
            current_page: page,
            from,
            last_page: lastPage,
            links: [
                {
                    url: `/dashboard/prestasi?page=1`,
                    label: '1',
                    active: page === 1,
                },
                ...(page > 1
                    ? [
                          {
                              url: `/dashboard/prestasi?page=${page - 1}`,
                              label: 'Previous',
                              active: false,
                          },
                      ]
                    : []),
                ...(page < lastPage
                    ? [
                          {
                              url: `/dashboard/prestasi?page=${page + 1}`,
                              label: 'Next',
                              active: false,
                          },
                      ]
                    : []),
                {
                    url: `/dashboard/prestasi?page=${lastPage}`,
                    label: String(lastPage),
                    active: page === lastPage,
                },
            ],
            path: '/dashboard/prestasi',
            per_page: perPage,
            to,
            total,
        },
    };
}

export function mockSummary(): AchievementSummary {
    const total = mockAchievements.length;
    const nationalInternational = mockAchievements.filter(
        (a) => a.level === 'Nasional' || a.level === 'Internasional',
    ).length;
    const nationalCount = mockAchievements.filter(
        (a) => a.level === 'Nasional',
    ).length;
    const internationalCount = mockAchievements.filter(
        (a) => a.level === 'Internasional',
    ).length;
    const recipientStudents = mockAchievements.filter(
        (a) => a.recipient_type === 'student',
    ).length;
    const recipientTeachers = mockAchievements.filter(
        (a) => a.recipient_type === 'teacher',
    ).length;
    const recipientSchools = mockAchievements.filter(
        (a) => a.recipient_type === 'school',
    ).length;
    const publishedCount = mockAchievements.filter(
        (a) => a.is_published,
    ).length;
    const draftCount = mockAchievements.filter((a) => !a.is_published).length;

    return {
        total,
        national_international: nationalInternational,
        national_count: nationalCount,
        international_count: internationalCount,
        recipient_students: recipientStudents,
        recipient_teachers: recipientTeachers,
        recipient_schools: recipientSchools,
        published_count: publishedCount,
        total_count: total,
        sync_percentage: Math.round((publishedCount / total) * 1000) / 10,
        draft_count: draftCount,
    };
}
