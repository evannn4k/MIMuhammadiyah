<?php

namespace App\Http\Controllers\Dashboard\StaffController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewStaffController
{
    public function index(Request $request): Response
    {
        return Inertia::render('staff/page', [
            'filters' => $request->only(['search', 'position', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $staff): Response
    {
        return Inertia::render('staff/show', ['id' => $staff]);
    }
}
