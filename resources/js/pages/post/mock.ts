import type { Post, PostFilters, PostSummary } from '@/types/post';
import type { LaravelPagination } from '@/types/pagination';

export const mockPosts: Post[] = [
    {
        id: 1,
        title: 'SMA Negeri 1 Prestasi Menjuarai Lomba Cerdas Cermat Tingkat Nasional 2025',
        slug: 'sma-1-menjuarai-lomba-cerdas-cermat-tingkat-nasional-2025',
        category: 'Prestasi',
        status: 'published',
        content: `<p>SMA Negeri 1 Prestasi berhasil menjuarai lomba Cerdas Cermat tingkat nasional yang telah berlangsung secara online di Jakarta dengan antusiasme tinggi. Tim untung berhasil meraih 98 poin dari total 100 poin yang mungkin, menjadikan mereka juara utama pertama sejak tahun 2023.</p>
<blockquote class="pl-4 py-1 italic bg-surface-container-low rounded-r-lg text-on-surface-variant">"Pendidikan bermutu melahirkan generasi berkarakter unggul dan kompetitif di kancah global."</blockquote>
<p>Kompetisi ini melibatkan 32 titik kandidat dari 17 provinsi di Indonesia, menguji kemampuan berpikir cepat, logika, pengetahuan umum, dan strategi dalam tim.</p>`,
        excerpt:
            'SMA Negeri 1 Prestasi berhasil menjuarai lomba Cerdas Cermat tingkat nasional dengan total 98 poin...',
        author_id: 1,
        author_name: 'Drs. H. Mulyadi, M.Pd.',
        author_position: 'Kepala Sekolah',
        media_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0OuW6jcoh3pq-1_zORVcjZWku-asrgkk576UW7QkY9hTU-eFuq1qWfbCt6FPpFSPUI2A_Al1X1KKZeJNTPdHV8ZeI0ccvGL_7oPfM2UxvfrN_R8ke06o-o5xwKH7XoJDus8lOvW0ooGmWN0-Ip-vCPRqfTf_t7F9iZ_D1h46vzp1cwper82xYlAglEwZ2X-q_7nWAXJQ3Z1_jydtEP3EI0KN9jT7pmpageHLjgWLp',
        published_at: '2026-11-14T08:00:00Z',
        view_count: 12543,
        comment_count: 28,
        is_published: true,
        is_scheduled: false,
        tags: ['#PrestasiSiswa', '#Nasional2025', '#Juara1'],
        created_at: '2026-11-05T10:30:00Z',
    },
    {
        id: 2,
        title: 'Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 Dibuka',
        slug: 'penerimaan-peserta-didik-baru-tahun-ajaran-20262027-dibuka',
        category: 'Pengumuman Resmi',
        status: 'published',
        content: `<p>SMK Negeri 1 Prestasi resmi membuka pangkalan pendaftaran peserta didik baru (PPDB) untuk tahun ajaran 2026/2027. PPDB dapat dilakukan secara online melalui website sekolah sejak tanggal 10 November 2026 hingga 31 Desember 2026.</p>`,
        excerpt:
            'Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 resmi dibuka mulai 10 November 2026...',
        author_id: 1,
        author_name: 'Drs. H. Mulyadi, M.Pd.',
        author_position: 'Kepala Sekolah',
        media_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfcx1gmS7Kz4kWV0zHhtXPCu6rkmMb5JBO4_5ef_BESJMur4kHBo0Wx2aGv9dC3w2eYluY-mi1nCKo4GTPVgZa3q6ar2m0feMYa4eP0-McRFwDVuovaX4-TaLPRd5HBEotqiQV5s4haXc-QyslH_HRIcMkndx6YfnYgpth6cltGWkZRmnwgXxhqn98pzdfLDkYLLXbdqHhGXgRYjaCXeBWgXcfXwifOf29IyXvMScl',
        published_at: '2026-11-10T14:00:00Z',
        view_count: 8420,
        comment_count: 45,
        is_published: true,
        is_scheduled: false,
        tags: ['#PPDB', '#PenerimaanSiswa', '#TahunAjaran2026'],
        created_at: '2026-11-08T08:45:00Z',
    },
    {
        id: 3,
        title: 'Jadwal Ujian Tengah Semester Ganjil Tahun 2026',
        slug: 'jadwal-ujian-tengah-semester-ganjil-tahun-2026',
        category: 'Akademik',
        status: 'draft',
        content: `<p>Diberitahukan kepada seluruh siswa bahwa ujian tengah semester ganjil tahun 2026 akan dilaksanakan mulai tanggal 10 Desember 2026 hingga 14 Desember 2026. Ujian ini mencakup mata pelajaran Tahap 1 dan Tahap 2.</p>`,
        excerpt:
            'Ujian Tengah Semester Ganjil akan dilaksanakan mulai 10 Desember hingga 14 Desember 2026...',
        author_id: 2,
        author_name: 'Budi Santoso, S.Pd.',
        author_position: 'Wakil Kepala Kurikulum',
        media_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL4iEJ1WlUJE7Fg69WoUfqMAJkr2C4c67QLN68Gh0rvgJxts92fLSq9FljrwGqVh4gRN1ZZA55fkSL_Jx6UCDKirom1c69_2ZbaSTfK5aCncU7OiF1U_EDan2mHZmF-Z90lwtOoF54NeaZQV-BmdeeQIakAFdYeNhWnFXOUlz0zRG9BBg7pcPvmwpnYdpns10YSaXBi_EAUmwoGN3aOMGFv5AslSofwfUgrZHQ2YUH',
        scheduled_at: '2026-11-15T12:00:00Z',
        view_count: 0,
        comment_count: 0,
        is_published: false,
        is_scheduled: true,
        tags: ['#Ujian', '#PTS', '#SemesterGanjil'],
        created_at: '2026-11-12T16:30:00Z',
    },
    {
        id: 4,
        title: 'Ekstrakurikuler Basket Tim SMA 1 Prestasi Juara 2',
        slug: 'ekstrakurikuler-basket-tim-sma-1-prestasi-juara-2',
        category: 'Kesiswaan & Ekskul',
        status: 'published',
        content: `<p>Ekskul basket SMA Negeri 1 Prestasi selamat menempati juara 2 dalam kompetisi basket tingkat provinsi setelah bertanding melawan tim dari SMA Negeri 2 dengan skor 78-82 sehingga kurang merata.</p>`,
        excerpt:
            'Tim basket SMA Negeri 1 Prestasi berhasil meraih juara 2 dalam kompetisi basket provinsi...',
        author_id: 3,
        author_name: 'Dewi Lestari, S.Pd.',
        author_position: 'Pembina OSIS & Ekskul',
        media_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc52SKQ38776hOJQ2ZeywmbQjQdU4xmZUG32KVFr3SzV5L70HwQ-blWVzlGKDL3vehJhtyGgadW5rqdvAxQ6RHiZ4gjNSMY-Is5soyhr2lEjj_UzZvtazvE0LeTuP1afcIeJ8rr2T-5vHPiyjQLv-kAKXEy9ihjmUb0YqZ9qa7ieMXHI5bhBogmjHM2a-zByQ15-9HePhLPibqcN0kZzf-brzGlmmSjwmylFp7r4eL',
        published_at: '2026-11-06T09:15:00Z',
        view_count: 5620,
        comment_count: 32,
        is_published: true,
        is_scheduled: false,
        tags: ['#Basket', '#Ekskul', '#Juara2'],
        created_at: '2026-11-04T11:00:00Z',
    },
    {
        id: 5,
        title: 'Profil Program Studi Teknik Infrastruktur',
        slug: 'profil-program-studi-teknik-infrastruktur',
        category: 'Akademik',
        status: 'archived',
        content: `<p>Program studi Teknik Infrastruktur menawarkan kurikulum komprehensif untuk melatih mahasiswa menjadi profesional teknik yang siap menghadapi tantangan infrastruktur modern. Fokus pada perencanaan, konstruksi, dan pemeliharaan infrastruktur publik.</p>`,
        excerpt: 'Program studi Teknik Infrastruktur SMK Negeri 1 Prestasi...',
        author_id: 4,
        author_name: 'Ahmad Fauzi, ST.',
        author_position: 'Kaprodi Teknik',
        media_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIbadusXA5bCzNpjo9lsML3hMTr_lhZ_suGKWmqwIEZqXvPvY7LNs6IOHvUzUcvo1vneMWaSUX6Ci67rtBhUgCs5rDZkQFz4yewh0UIvX4mbMsJK2QbWZrURKR6tLr76Hg93oLpwdCQXz_jI18kQLXud7wYHJQzW3bnovuQsbvn3XljlKC1bfMTl7rcrLjTYlBi6XMCxHnzsIP2SHF_YTRthmm6rYg-Awfmx2niJhg',
        published_at: '2026-09-15T10:00:00Z',
        view_count: 3240,
        comment_count: 12,
        is_published: true,
        is_scheduled: false,
        tags: ['#ProgramStudi', '#TeknikInfrastruktur', '#Akademik'],
        created_at: '2026-09-10T14:00:00Z',
        updated_at: '2026-10-22T10:30:00Z',
    },
    {
        id: 6,
        title: 'Skincare untuk Siswa Hafal Al-Quran Diluncurkan',
        slug: 'skincare-untuk-siswa-hafal-al-quran-diluncurkan',
        category: 'Kesiswaan & Ekskul',
        status: 'draft',
        content: `<p>Kurikulum AI dan Inovasi Digital SMK Negeri 1 Prestasi telah mengembangkan aplikasi skincare untuk siswa yang hafal Al-Quran dengan target dapat meningkatkan kepercayaan diri dan ketenangan emosi.</p>`,
        excerpt:
            'Aplikasi skincare canggih untuk siswa hafal Al-Quran telah berhasil dibuat...',
        author_id: 5,
        author_name: 'Rahma Amin, S.Kom.',
        author_position: 'Guru IT & AI',
        media_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTxuuCzqHfSJlwZQnr13Lh_aauZ5iZSILLunCC_NeEch8df3QUwswteg-dfBR_hizxxhT6I6Bb9EQhXa98EUPw0O5-osqHOpbVPfs_UxQfJ9c2cXGJojTbNu6k22ZPqK5fR5QTn8JkkU-uv54vfxq9d-tEeKfA5dSPXKe4-kATEFsT2N4r7bdzNZF2HM7eOni6CbWJKyIRrYTsq8MLzCwas6iVmBk2UuLoRsr1dRXY',
        scheduled_at: '2026-11-16T11:00:00Z',
        view_count: 0,
        comment_count: 0,
        is_published: false,
        is_scheduled: true,
        tags: ['#Skincare', '#AI', '#Inovasi'],
        created_at: '2026-11-13T13:45:00Z',
    },
];

// TODO(backend): replace with Inertia props
export function queryMock(filters: PostFilters): LaravelPagination<Post> {
    let data = [...mockPosts];

    if (filters.search) {
        const search = filters.search.toLowerCase();
        data = data.filter(
            (post) =>
                post.title.toLowerCase().includes(search) ||
                post.excerpt.toLowerCase().includes(search) ||
                post.author_name.toLowerCase().includes(search) ||
                post.tags.some((tag) => tag.toLowerCase().includes(search)),
        );
    }

    if (filters.status && (filters.status as string) !== 'all') {
        data = data.filter((post) => post.status === filters.status);
    }

    if (filters.category && filters.category !== 'all') {
        data = data.filter((post) => post.category === filters.category);
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
        links: {
            first: `/dashboard/berita?page=1`,
            prev: page > 1 ? `/dashboard/berita?page=${page - 1}` : null,
            next: page < lastPage ? `/dashboard/berita?page=${page + 1}` : null,
            last: `/dashboard/berita?page=${lastPage}`,
        },
        meta: {
            current_page: page,
            from,
            last_page: lastPage,
            links: [
                {
                    url: `/dashboard/berita?page=1`,
                    label: '1',
                    active: page === 1,
                },
                ...(page > 1
                    ? [
                          {
                              url: `/dashboard/berita?page=${page - 1}`,
                              label: 'Previous',
                              active: false,
                          },
                      ]
                    : []),
                ...(page < lastPage
                    ? [
                          {
                              url: `/dashboard/berita?page=${page + 1}`,
                              label: 'Next',
                              active: false,
                          },
                      ]
                    : []),
                {
                    url: `/dashboard/berita?page=${lastPage}`,
                    label: String(lastPage),
                    active: page === lastPage,
                },
            ],
            path: '/dashboard/berita',
            per_page: perPage,
            to,
            total,
        },
    };
}

// TODO(backend): replace with the summary Inertia prop
export function mockSummary(): PostSummary {
    const published = mockPosts.filter((post) => post.status === 'published');
    const drafts = mockPosts.filter((post) => post.status === 'draft');
    const archived = mockPosts.filter((post) => post.status === 'archived');

    return {
        total_publications: published.length,
        total_readers: published.reduce(
            (sum, post) => sum + post.view_count,
            0,
        ),
        draft_count: drafts.length,
        pending_review: drafts.length,
        comments_pending_moderation: published.reduce(
            (sum, post) => sum + post.comment_count,
            0,
        ),
    };
}
