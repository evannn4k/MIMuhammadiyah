<?php

namespace App\Http\Controllers\Dashboard\SchoolProfileController;

use App\Models\SchoolProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewSchoolProfileController
{
    public function index(Request $request): Response
    {
        // TODO(backend): replace with actual database query
        $schoolProfile = SchoolProfile::first();

        return Inertia::render('school-profile/page', [
            'data' => $schoolProfile,
        ]);
    }
}
