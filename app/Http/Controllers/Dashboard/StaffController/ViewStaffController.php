<?php

namespace App\Http\Controllers\Dashboard\StaffController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewStaffController
{
    public function index(Request $request): Response
    {
        $staffData = [
            [
                'id' => 1,
                'name' => 'Dr. Hj. Siti Rohmah, M.Pd.',
                'email' => 'siti.rohmah@sman1prestasi.sch.id',
                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
                'nip' => '19710418 199702 2 001',
                'nuptk' => '9452749651300022',
                'group' => 'Leadership',
                'position' => 'Kepala Sekolah',
                'subject' => 'Manajemen Pendidikan',
                'education' => 'S3 Manajemen Pendidikan',
                'education_institution' => 'Universitas Negeri Jakarta (2018)',
                'status' => 'active',
                'status_label' => 'Aktif Tampil',
            ],
            [
                'id' => 2,
                'name' => 'Bambang Sudarsono, S.Kom., M.T.',
                'email' => 'bambang.sudarsono@sman1prestasi.sch.id',
                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
                'nip' => '19780512 200312 1 002',
                'nuptk' => '6140756658200033',
                'group' => 'Leadership',
                'position' => 'Waka Bidang Kurikulum',
                'subject' => 'Informatika & Robotika',
                'education' => 'S2 Teknik Informatika',
                'education_institution' => 'Institut Teknologi Bandung (2012)',
                'status' => 'active',
                'status_label' => 'Aktif Tampil',
            ],
            [
                'id' => 3,
                'name' => 'Rina Kusumawardhani, S.Pd.',
                'email' => 'rina.kusuma@sman1prestasi.sch.id',
                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
                'nip' => '19850914 200903 2 008',
                'nuptk' => '8234763665210042',
                'group' => 'Teacher',
                'position' => 'Guru Utama Matematika',
                'subject' => 'Matematika Peminatan',
                'education' => 'S1 Pendidikan Matematika',
                'education_institution' => 'Universitas Pendidikan Indonesia (2007)',
                'status' => 'active',
                'status_label' => 'Aktif Tampil',
            ],
            [
                'id' => 4,
                'name' => 'Ahmad Fauzi, S.Pd.I.',
                'email' => 'ahmad.fauzi@sman1prestasi.sch.id',
                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
                'nip' => '19881105 201101 1 005',
                'nuptk' => '4136766667110051',
                'group' => 'Teacher',
                'position' => 'Guru Pendidikan Agama',
                'subject' => 'Pendidikan Agama & Budi Pekerti',
                'education' => 'S1 Pendidikan Agama Islam',
                'education_institution' => 'UIN Syarif Hidayatullah (2010)',
                'status' => 'on_leave',
                'status_label' => 'Cuti Studi',
            ],
            [
                'id' => 5,
                'name' => 'Drs. H. Mulyadi Saputra, M.M.',
                'email' => 'mulyadi.saputra@sman1prestasi.sch.id',
                'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
                'nip' => '19740321 199903 1 003',
                'nuptk' => '-',
                'group' => 'Staff (GTK)',
                'position' => 'Kepala Tata Usaha',
                'subject' => '- (Non-Mengajar)',
                'education' => 'S2 Manajemen',
                'education_institution' => 'Universitas Terbuka (2015)',
                'status' => 'active',
                'status_label' => 'Aktif Tampil',
            ],
        ];

        return Inertia::render('staff/page', [
            'filters' => $request->only(['search', 'position', 'sort', 'direction', 'page', 'per_page']),
            'data' => [
                'data' => $staffData,
                'current_page' => 1,
                'last_page' => 1,
                'per_page' => 15,
                'total' => count($staffData),
                'from' => 1,
                'to' => count($staffData),
            ],
            'summary' => [
                'total' => 5,
                'active_teachers' => 3,
                'staff_count' => 1,
                'leadership_count' => 2,
                'visible_count' => 4,
                'hidden_count' => 1,
            ],
        ]);
    }

    public function show(string $id): Response
    {
        return Inertia::render('staff/show', ['id' => $id]);
    }
}