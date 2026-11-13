<?php

namespace App\Http\Controllers\Dashboard\PostController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewPostController
{
    public function index(Request $request): Response
    {
        return Inertia::render('post/page', [
            'filters' => $request->only(['search', 'category', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $post): Response
    {
        return Inertia::render('post/show', ['id' => $post]);
    }
}
