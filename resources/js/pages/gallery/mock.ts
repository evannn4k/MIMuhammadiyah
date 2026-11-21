import type {
    GalleryItem,
    GalleryFilters,
    GallerySummary,
} from '@/types/gallery';
import type { LaravelPagination } from '@/types/pagination';

export const mockGalleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'Hari_Pahlawan_Pentas_Budaya_01.jpg',
        category: 'Seni & Budaya',
        format: 'JPG / JPEG',
        file_size: '2.8 MB',
        dimensions: '1920 × 1080 px',
        status: 'Tampil Publik',
        period: 'TA 2024/2025',
        uploaded_at: '2024-11-10',
        uploaded_by: 'Tim Media',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxN8x9zPQlSxjx5H86z6bdmp3lLwCx43jnTKI4Ylte-fVfROBnSUy-YARHNhCmo3xtGO3g6OcrPMUMbucqplB2m6mT1ibYexMCtgYKUpvWWh92ZKZGe1HcCPTdzk9BTI__YIEIGmStRKx7dgUVRFPu9dpbsG_zHkee81iJ_e16bCBQUBj7Uw2FASlK6X8zo2M4L7iJ8VME_8Q9GRBqowPh9EL69hcCdv_M57GQMfBc',
        is_published: true,
    },
    {
        id: 2,
        title: 'Futsal_Provinsi_Final_Match.png',
        category: 'Ekstrakurikuler',
        format: 'PNG',
        file_size: '3.4 MB',
        dimensions: '2400 × 1600 px',
        status: 'Tampil Publik',
        period: 'TA 2024/2025',
        uploaded_at: '2024-10-18',
        uploaded_by: 'Pembina Olahraga',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcVhQi1izbXmlRhunzZfoYOkQSeGmm95_NbZGYeRtx18-UDULLt8y5njToPy4WrKMoSOGlLaiFwBiEFK2SLp6XhJmVvybKEVAvJgPVOzwnCKNMKklwVqPnFiSt-JfaAw0Tc9RV6jhx4hyqD23RBcW7AULJpH-Sf5zTfx-0P6I38iPaehbwNDGcyJX8nvQjefhE2IPasaKEcwO5Pquugo4OYf4vBwVWG-ggy5Udf5PB',
        is_published: true,
    },
    {
        id: 3,
        title: 'Wisuda_Angkatan_XXVIII_Panggung.webp',
        category: 'Upacara & Resmi',
        format: 'WebP',
        file_size: '1.9 MB',
        dimensions: '2048 × 1365 px',
        status: 'Tampil Publik',
        period: 'TA 2023/2024',
        uploaded_at: '2024-05-25',
        uploaded_by: 'Kesiswaan',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjMzbw-L1rYHebE8H5f7aOQKe0VvNIPMHMEDUOdPpWGalqqZV3VlgQc70Tcd5Ux6USLO9ZCVPZ4eOPWIYLcqq2Ek6S1gMkGy0lDFEhb0yWvcz9NsIYVV3Su-gE0ifA2d5zL5W_izrq1L8uxyZOCbedu--ctYE7Ohc9h2ZIcU9PhabqdApwUxiz3fc_C40eqvwjZrQy53FGU9TbxWIXHY6Mta2x-oZrx59ya4FKeQ_u',
        is_published: true,
    },
    {
        id: 4,
        title: 'BRIN_Lab_Observasi_Mikroskop.jpg',
        category: 'Kunjungan Edukasi',
        format: 'JPG / JPEG',
        file_size: '4.1 MB',
        dimensions: '3000 × 2000 px',
        status: 'Draft Lampiran',
        period: 'TA 2024/2025',
        uploaded_at: '2024-09-12',
        uploaded_by: 'Guru Biologi',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7QpwCFsG3mE8HVX0p072xmZQtMIEwiyYYDPQfC9i3XaEBb0G2ed2m-6Ob70cn6LcdqkSf93hLFsWDU6XnCKqsWLUO-78orIM7Mx3nBLaElCexRhd2gDyWChXZs_noHe2BRxA58Scwn7-TbMUB2zqlAJ5Yj-5t0YQ9JE6qWlE8obHj5twgN0hXVv_oAY5dU_yXiK9Xo3WKP0rlRIt9TvWJ6IBxTctQKwnzaato3J2E',
        is_published: false,
    },
    {
        id: 5,
        title: 'LDKS_OSIS_TeamBuilding_HuluCai.webp',
        category: 'Kepemimpinan',
        format: 'WebP',
        file_size: '1.5 MB',
        dimensions: '1920 × 1280 px',
        status: 'Tampil Publik',
        period: 'TA 2024/2025',
        uploaded_at: '2024-08-28',
        uploaded_by: 'Pembina OSIS',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzZbFe5axC0FTwt3BunRt0-dG4LGhKQVZIjT_zdCMai586u8eSxcBSyxKmaQkfto48h0CFJnG0k5lXHZABdsW7py31hnDEGsEs-WH-qIMwCYUQ3GwUqTdbzbnf00E-l0NpruwzyaSmbCBAwx_x3z7H_OKToIqebsq4u-wSxWhpbElxjD0vTU70JahNU607JDy2p6KYaNdKa7vQCI93EPNeX6hA0bZi7dn8D3LFFdmj',
        is_published: true,
    },
    {
        id: 6,
        title: 'Lab_Sains_Baru_Ruang_Praktik.png',
        category: 'Fasilitas Sekolah',
        format: 'PNG',
        file_size: '2.2 MB',
        dimensions: '2560 × 1440 px',
        status: 'Tampil Publik',
        period: 'TA 2023/2024',
        uploaded_at: '2024-08-15',
        uploaded_by: 'Sarpras',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVqpvGQrTyfHkIjnQjw1DBrXgt0UKLVdHdc3N-cYGYU5sNaf_miftcRnRb2AVBxjlkFR-qF_32FieDZPqyv1WrqNClvt2e70YgqQDKjE3cY0MRqpZfsYM8Ii-v2zDryYtnwNtWGfMbdfX-LSqCue2SW1O6z-J37sevzo6qwMTn2VvQOoo3zIvixnUGt54IpOeCLBE9udrYndjDIMFF9JbR3aVtLAe4oXuBKv3Bx56V',
        is_published: true,
    },
];

const statusOptions: GalleryItem['status'][] = ['Tampil Publik', 'Draft Lampiran', 'Terarsip'];

export function queryMock(filters: GalleryFilters): LaravelPagination<GalleryItem> {
    let data = [...mockGalleryItems];

    if (filters.search) {
        const search = filters.search.toLowerCase();
        data = data.filter(
            (item) =>
                item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                item.uploaded_by.toLowerCase().includes(search),
        );
    }

    if (filters.category && filters.category !== 'all') {
        data = data.filter((item) => item.category === filters.category);
    }

    if (filters.format && filters.format !== 'all') {
        data = data.filter((item) => item.format === filters.format);
    }

    if (filters.period && filters.period !== 'all') {
        data = data.filter((item) => item.period === filters.period);
    }

    if (filters.status && filters.status !== 'all') {
        data = data.filter((item) => item.status === filters.status);
    }

    const sort = filters.sort ?? 'uploaded_at';
    const direction = filters.direction === 'asc' ? 'asc' : 'desc';

    data.sort((a, b) => {
        const left = (a as Record<string, any>)[sort];
        const right = (b as Record<string, any>)[sort];

        if (left === right) return 0;
        return (left > right ? 1 : -1) * (direction === 'asc' ? 1 : -1);
    });

    const page = Math.max(Number(filters.page) || 1, 1);
    const perPage = Math.max(Number(filters.per_page) || 6, 1);
    const total = data.length;
    const lastPage = Math.max(Math.ceil(total / perPage), 1);
    const from = total === 0 ? null : (page - 1) * perPage + 1;
    const to = total === 0 ? null : Math.min(page * perPage, total);

    return {
        data: data.slice((page - 1) * perPage, page * perPage),
        links: {
            first: `/dashboard/galeri?page=1`,
            prev: page > 1 ? `/dashboard/galeri?page=${page - 1}` : null,
            next: page < lastPage ? `/dashboard/galeri?page=${page + 1}` : null,
            last: `/dashboard/galeri?page=${lastPage}`,
        },
        meta: {
            current_page: page,
            from,
            last_page: lastPage,
            links: [
                { url: `/dashboard/galeri?page=1`, label: '1', active: page === 1 },
                ...(page > 1
                    ? [{ url: `/dashboard/galeri?page=${page - 1}`, label: 'Previous', active: false }]
                    : []),
                ...(page < lastPage
                    ? [{ url: `/dashboard/galeri?page=${page + 1}`, label: 'Next', active: false }]
                    : []),
                { url: `/dashboard/galeri?page=${lastPage}`, label: String(lastPage), active: page === lastPage },
            ],
            path: '/dashboard/galeri',
            per_page: perPage,
            to,
            total,
        },
    };
}

export function mockSummary(): GallerySummary {
    const total = mockGalleryItems.length;
    const active = mockGalleryItems.filter((i) => i.is_published).length;
    const uploadedThisMonth = mockGalleryItems.filter((i) =>
        i.uploaded_at.startsWith('2024-11') || i.uploaded_at.startsWith('2024-10'),
    ).length;

    return {
        total_attachments: total,
        active_attachments: active,
        top_formats: 'WEBP & JPG',
        storage_used: '14.8 GB',
        storage_total: '50 GB',
        storage_percentage: 29.6,
        uploaded_this_month: uploadedThisMonth,
    };
}