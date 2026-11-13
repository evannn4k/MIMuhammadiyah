<?php

namespace App\Http\Controllers\Dashboard\RoleController;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\RoleRequest\SyncPermissionRoleRequest;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;

class SyncPermissionRoleController extends Controller
{
    public function __invoke(SyncPermissionRoleRequest $request, Role $role)
    {
        $credentials = $request->validated();

        try {
            $role->syncPermissions($credentials['permissions']);

            return redirect()
                ->back()
                ->with('success', "Berhasil merubah perizinan $role->name.");
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
