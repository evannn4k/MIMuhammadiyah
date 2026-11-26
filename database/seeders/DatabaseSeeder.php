<?php

namespace Database\Seeders;

use App\Models\SchoolProfile;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::firstOrCreate([
            'name' => 'admin',
            'description' => 'Akses menyeluruh terhadap kofigurasi server dan sistem.',
            'is_system' => true,
        ]);

        $role->givePermissionTo(Permission::all());

        $admin = User::firstOrCreate([
            'name' => 'SUPER ADMIN',
            'email' => 'yahyaevan8@gmail.com',
            'password' => Hash::make('123123123'),
            'email_verified_at' => now(),
            'is_active' => true,
        ]);

        $admin->assignRole($role);

        SchoolProfile::create([
            'name' => 'SMA Negeri Contoh Indonesia',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->call([SchoolProfileSeeder::class, PermissionSeeder::class]);
    }
}
