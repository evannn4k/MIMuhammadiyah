<?php

namespace App\Http\Controllers\Dashboard\RoleController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class ViewRoleController
{
    public function index(Request $request): Response
    {
        $roles = Role::orderBy('is_system', 'desc')
            ->with(['permissions', 'users'])
            ->get()
            ->map(function ($role) {
                return [
                    'id' => $role->id,
                    'name' => $role->name,
                    'description' => $role->description,
                    'permission_count' => $role->permissions->count(),
                    'user_count' => $role->users->count(),
                    'created_at' => $role->created_at?->toISOString(),
                    'permissions' => $role->permissions->pluck('name'),
                    'is_system' => $role->is_system,
                ];
            });

        $permissions = Permission::orderBy('name')->get()->map(function ($permission) {
            [$module, $action] = array_pad(explode('.', $permission->name, 2), 2, null);

            return [
                'name' => $permission->name,
                'description' => $permission->description,
                'module' => $module ?? 'general',
                'action' => $action ?? $permission->name,
            ];
        });

        $groupedPermissions = $permissions->groupBy('module')->map(function ($perms) {
            return $perms->values()->all();
        });

        return Inertia::render('role/page', [
            'roles' => $roles,
            'permissions' => $groupedPermissions,
            'filters' => $request->only(['search', 'tier', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $role): Response
    {
        return Inertia::render('role/show', ['id' => $role]);
    }
}
