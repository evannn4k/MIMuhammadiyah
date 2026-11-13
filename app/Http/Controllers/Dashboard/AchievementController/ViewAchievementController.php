<?php

namespace App\Http\Controllers\Dashboard\AchievementController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewAchievementController
{
    public function index(Request $request): Response
    {
        return Inertia::render('achievement/page', [
            'filters' => $request->only(['search', 'year', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $achievement): Response
    {
        return Inertia::render('achievement/show', ['id' => $achievement]);
    }
}
