import { Link } from '@inertiajs/react';
import {
    BookOpen,
    Building2,
    FolderGit2,
    GalleryThumbnails,
    GraduationCap,
    Images,
    LayoutGrid,
    Mail,
    Newspaper,
    School,
    Settings,
    Share2,
    ShieldCheck,
    Trophy,
    Users,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import type { NavItem } from '@/types';

const homeNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const managementNavItems: NavItem[] = [
    {
        title: 'Pengguna',
        href: dashboardRoutes.user.index(),
        icon: Users,
    },
    {
        title: 'Peran',
        href: dashboardRoutes.role.index(),
        icon: ShieldCheck,
    },
];

const contentNavItems: NavItem[] = [
    {
        title: 'Berita',
        href: dashboardRoutes.post.index(),
        icon: Newspaper,
    },
    {
        title: 'Prestasi',
        href: dashboardRoutes.achievement.index(),
        icon: Trophy,
    },
    {
        title: 'Galeri',
        href: dashboardRoutes.gallery.index(),
        icon: Images,
    },
    {
        title: 'Slider',
        href: dashboardRoutes.slider.index(),
        icon: GalleryThumbnails,
    },
];

const schoolNavItems: NavItem[] = [
    {
        title: 'Guru & Staff',
        href: dashboardRoutes.staff.index(),
        icon: GraduationCap,
    },
    {
        title: 'Fasilitas',
        href: dashboardRoutes.facility.index(),
        icon: Building2,
    },
    {
        title: 'Profil Sekolah',
        href: dashboardRoutes.schoolProfile.index(),
        icon: School,
    },
];

const systemNavItems: NavItem[] = [
    {
        title: 'Pesan',
        href: dashboardRoutes.contactMessage.index(),
        icon: Mail,
    },
    {
        title: 'Media Sosial',
        href: dashboardRoutes.socialLink.index(),
        icon: Share2,
    },
    {
        title: 'Pengaturan',
        href: dashboardRoutes.setting.index(),
        icon: Settings,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={homeNavItems} label="Beranda" />
                <NavMain items={managementNavItems} label="Manajemen" />
                <NavMain items={contentNavItems} label="Konten" />
                <NavMain items={schoolNavItems} label="Profil Sekolah" />
                <NavMain items={systemNavItems} label="Lainnya" />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
