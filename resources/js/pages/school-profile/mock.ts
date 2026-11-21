import type {
    SchoolProfile,
    MissionItem,
    SocialLink,
} from '@/types/school-profile';

const mockMission: MissionItem[] = [
    {
        order: 1,
        content:
            "Menyelenggarakan pendidikan Islam berbasis nilai-nilai Al-Qur'an dan As-Sunnah.",
    },
    {
        order: 2,
        content:
            'Mengembangkan potensi akademis dan non-akademis peserta didik secara optimal.',
    },
    {
        order: 3,
        content:
            'Mewujudkan tata kelola madrasah yang profesional, akuntabel, dan berkeadilan.',
    },
    {
        order: 4,
        content:
            'Membangun kemitraan dengan orang tua, alumni, dan masyarakat untuk mutu pendidikan.',
    },
    {
        order: 5,
        content:
            'Menciptakan lingkungan sekolah yang aman, nyaman, dan bermartabat.',
    },
];

const mockSocialLinks: SocialLink[] = [
    {
        platform: 'facebook',
        url: 'https://facebook.com/mimuhammadiyah1pk',
        icon: 'facebook',
    },
    {
        platform: 'instagram',
        url: 'https://instagram.com/mimuhammadiyah1pk',
        icon: 'instagram',
    },
    {
        platform: 'youtube',
        url: 'https://youtube.com/@mimuhammadiyah1pk',
        icon: 'youtube',
    },
    {
        platform: 'website',
        url: 'https://mimuhammadiyah.sch.id',
        icon: 'globe',
    },
];

// TODO(backend): replace with Inertia props
export const mockSchoolProfile: SchoolProfile = {
    id: 'sch-1',
    name: 'MI Muhammadiyah 1 Program Khusus',
    tagline: 'Generasi Rabbani Berprestasi & Berkemajuan',
    npsn: '20364891',
    nsm: '123456789012',
    accreditation: 'A',
    accreditation_year: '2024',
    established_year: '2010',
    logo: '/images/logo-school.png',
    history:
        'MI Muhammadiyah 1 Program Khusus didirikan pada tahun 2010 di bawah naungan Persyarikatan Muhammadiyah. Madrasah ini lahir dari aspirasi masyarakat Surakarta yang menginginkan pendidikan dasar Islam berkualitas dengan kurikulum unggulan. Sejak berdiri, madrasah telah meluluskan ribuan siswa yang tersebar di berbagai jenjang pendidikan tinggi dan profesi. Pada tahun 2024, madrasah memperoleh akreditasi A dari BAN-S/M, sebagai bukti komitmen pengelola dalam peningkatan mutu berkelanjutan.',
    vision: 'Terwujudnya Generasi Islam yang Berakhlak Mulia, Cerdas, Mandiri, dan Berprestasi Tingkat Nasional.',
    mission: mockMission,
    headmaster_name: 'Ahmad Dahlan, S.Pd.I., M.Pd.',
    headmaster_photo: '/images/headmaster.jpg',
    headmaster_greeting:
        "Assalamu'alaikum Warahmatullahi Wabarakatuk. Puji syukur kehadirat Allah SWT. Selamat datang di website resmi MI Muhammadiyah 1 Program Khusus. Madrasah kami berkomitmen mencetak generasi yang tidak hanya cerdas intelektual, tetapi juga cerdas spiritual dan emosional. Dengan dukungan pendidik berkualitas, fasilitas memadai, dan kerjasama erat dengan orang tua, kami yakin setiap anak yang belajar di sini akan tumbuh menjadi pribadi berkarakter, berprestasi, dan siap menghadapi tantangan zaman. Wassalamu'alaikum Warahmatullahi Wabarakatuk.",
    org_structure_image: '/images/org-structure.png',
    address: 'Jl. Ahmad Dahlan No. 15',
    village: 'Jebres',
    district: 'Jebres',
    regency: 'Surakarta',
    province: 'Jawa Tengah',
    postal_code: '57132',
    phone: '(0271) 7123456',
    whatsapp: '0812-3456-7890',
    email: 'info@mimuhammadiyah.sch.id',
    latitude: '-7.5668',
    longitude: '110.8218',
    maps_embed_url:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.123456789!2d110.8218!3d-7.5668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58c8c8c8c8c8%3A0x123456789abcdef!2sMI%20Muhammadiyah%201%20Program%20Khusus!5e0!3m2!1sid!2sid!4v1234567890',
    social_links: mockSocialLinks,
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2026-11-01T10:00:00Z',
};
