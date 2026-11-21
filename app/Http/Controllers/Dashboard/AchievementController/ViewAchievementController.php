<?php

namespace App\Http\Controllers\Dashboard\AchievementController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewAchievementController
{
    public function index(Request $request): Response
    {
        $allowedParams = [
            'search',
            'category',
            'is_published',
            'sort',
            'direction',
            'page',
            'per_page',
        ];

        $filters = $request->only($allowedParams);

        return Inertia::render('achievement/page', [
            'filters' => $filters,
        ]);
    }

    public function show(Request $request, string $id): Response
    {
        return Inertia::render('achievement/show', [
            'id' => $id,
        ]);
    }
}
