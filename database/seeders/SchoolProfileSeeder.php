<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchoolProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("school_profiles")->updateOrInsert(
            ["id" => 1],
            [
                "name" => "SMA Negeri 1 Harapan Bangsa",
                "tagline" => "Berprestasi, Berkarakter, dan Berwawasan Global",
                "npsn" => "20300001",
                "nsm" => null,
                "accreditation" => "A",
                "accreditation_year" => 2023,
                "established_year" => 1985,
                "logo" => "images/school/logo.png",
                "history" =>
                    "<p>Didirikan pada tahun 1985 untuk memperluas akses pendidikan menengah berkualitas di daerah.</p>",
                "vision" =>
                    "Mewujudkan lulusan yang unggul dalam prestasi, berakhlak mulia, dan adaptif terhadap perkembangan zaman.",
                "mission" => json_encode([
                    "Menyelenggarakan pembelajaran yang aktif, kreatif, dan berbasis teknologi.",
                    "Menumbuhkan budaya disiplin, kejujuran, dan kepedulian sosial.",
                    "Mengembangkan potensi minat dan bakat peserta didik di bidang akademik maupun non-akademik.",
                ]),
                "headmaster_name" => "Drs. Hendra Wijaya, M.Pd.",
                "headmaster_photo" => "images/school/headmaster.jpg",
                "headmaster_greeting" =>
                    "<p>Selamat datang di website resmi sekolah kami. Semoga informasi yang disajikan bermanfaat bagi siswa, orang tua, dan masyarakat.</p>",
                "org_structure_image" => "images/school/org-structure.png",
                "address" => "Jl. Pendidikan No. 10",
                "village" => "Langensari",
                "district" => "Ungaran Barat",
                "regency" => "Kabupaten Semarang",
                "province" => "Jawa Tengah",
                "postal_code" => "50517",
                "phone" => "(024) 6920000",
                "whatsapp" => "6281234567890",
                "email" => "info@sekolah.sch.id",
                "latitude" => -7.1398,
                "longitude" => 110.4051,
                "maps_embed_url" =>
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d110.4051!3d-7.1398",
                "social_links" => json_encode([
                    "instagram" => "https://instagram.com/sekolah_official",
                    "youtube" => "https://youtube.com/@sekolah_official",
                    "facebook" => "https://facebook.com/sekolah.official",
                ]),
                "created_at" => now(),
                "updated_at" => now(),
            ],
        );
    }
}
