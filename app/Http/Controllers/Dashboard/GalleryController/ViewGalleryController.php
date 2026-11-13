<?php

namespace App\Http\Controllers\Dashboard\GalleryController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewGalleryController
{
    public function index(Request $request): Response
    {
        return Inertia::render('gallery/page', [
            'filters' => $request->only(['search', 'category', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $gallery): Response
    {
        return Inertia::render('gallery/show', ['id' => $gallery]);
    }
}
