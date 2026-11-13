<?php

namespace App\Http\Controllers\Dashboard\SocialLinkController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewSocialLinkController
{
    public function index(Request $request): Response
    {
        return Inertia::render('social-link/page', [
            'filters' => $request->only(['search', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $social_link): Response
    {
        return Inertia::render('social-link/show', ['id' => $social_link]);
    }
}
