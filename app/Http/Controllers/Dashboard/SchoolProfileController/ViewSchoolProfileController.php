<?php

namespace App\Http\Controllers\Dashboard\SchoolProfileController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewSchoolProfileController
{
    public function index(Request $request): Response
    {
        return Inertia::render('school-profile/page', [
            'filters' => $request->only(['search', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }
}
