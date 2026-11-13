<?php

namespace App\Http\Controllers\Dashboard\UserController;

use App\Http\Resources\User\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class ViewUserController
{
    public function index(Request $request): Response
    {
        $roles = Role::select('id', 'name')->get();

        $users = User::with("roles:id,name")->when($request->search, function ($query, $value) {
            $query
                ->where("name", "ilike", "%$value%")
                ->orWhere("email", "ilike", "%$value%");
        })
            ->when($request->role, function ($query, $value) {
                $query->whereHas("roles", function ($q) use ($value) {
                    $q->where("name", $value);
                });
            })
            ->when($request->status, function ($query, $value) {
                $query->where("is_active", $value == "active");
            })
            ->orderBy("created_at", "desc")
            ->paginate($request->per_page ?? 10)
            ->withQueryString();

        $summary = User::toBase()
            ->selectRaw("
                COUNT(*) as total,
                COUNT(CASE WHEN is_active = true THEN 1 END) as active,
                COUNT(CASE WHEN is_active = false THEN 1 END) as inactive
            ")
            ->selectSub(User::role("admin")->selectRaw('COUNT(*)'), "admin")->first();

        return Inertia::render('user/page', [
            'roles' => $roles,
            'data' => UserResource::collection($users),
            'summary' => $summary,
        ]);
    }

    public function show(User $user): Response
    {
        return Inertia::render('user/show', ["user" => $user]);
    }
}
