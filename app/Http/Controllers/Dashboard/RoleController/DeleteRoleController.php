<?php

namespace App\Http\Controllers\Dashboard\RoleController;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;

class DeleteRoleController extends Controller
{
    public function __invoke(Request $request, Role $role)
    {
        try {
            if ($role->is_system == true) {
                return redirect()
                    ->back()
                    ->with(
                        'error',
                        'Role '.$role->name.' tidak bisa dihapus.',
                    );
            }

            $existsUser = User::isActive()->role($role)->exists();

            if ($existsUser) {
                return redirect()
                    ->back()
                    ->with(
                        'error',
                        'Role '.$role->name.' memiliki user aktif.',
                    );
            }

            $role->delete();

            return redirect()
                ->back()
                ->with('success', 'Berhasil menghapus role.');
        } catch (\Exception $e) {
            Log::error('Error : '.$e->getMessage());

            return redirect()
                ->back()
                ->with(
                    'error',
                    'terjadi kesalahan sistem. Silahkan coba lagi.',
                );
        }
    }
}
