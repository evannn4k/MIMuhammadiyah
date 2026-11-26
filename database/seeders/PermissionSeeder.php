<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            [
                'name' => 'role.manage',
                'description' => 'Mengelola role dan hak akses pengguna',
            ],
            [
                'name' => 'user.view',
                'description' => 'Melihat daftar dan detail akun pengguna',
            ],
            [
                'name' => 'user.create',
                'description' => 'Membuat akun pengguna baru',
            ],
            [
                'name' => 'user.edit',
                'description' => 'Mengubah informasi dan data akun pengguna',
            ],
            [
                'name' => 'user.delete',
                'description' => 'Menghapus atau menonaktifkan akun pengguna',
            ],
        ];

        foreach ($permissions as $permission) {
            Permission::updateOrCreate([
                'name' => $permission['name'],
                'description' => $permission['description'],
            ]);
        }
    }
}
