<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at?->toISOString(),
            'is_active' => $this->is_active,
            'position' => $this->position,
            'last_login_at' => $this->last_login_at?->toISOString(),
            'role_id' => $this->roles->first()?->id,
            'role_name' => $this->roles->first()?->name,
            'status' => $this->is_active ? 'active' : 'inactive',
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
