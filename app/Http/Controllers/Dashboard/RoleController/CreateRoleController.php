<?php

namespace App\Http\Controllers\Dashboard\RoleController;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\RoleRequest\CreateRoleRequest;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;

class CreateRoleController extends Controller
{
    public function __invoke(CreateRoleRequest $request)
    {
        $credentials = $request->validated();

        try {
            Role::create($credentials);

            return redirect()
                ->back()
                ->with('success', 'Berhasil menambah role baru.');
        } catch (\Exception $e) {
            Log::error('Error : '.$e->getMessage());

            return redirect()
                ->back()
                ->with(
                    'error',
                    'Terjadi kesalahan sistem. Silahkan coba lagi.',
                );
        }
    }
}
