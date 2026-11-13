<?php

namespace App\Http\Controllers\Dashboard\SliderController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewSliderController
{
    public function index(Request $request): Response
    {
        return Inertia::render('slider/page', [
            'filters' => $request->only(['search', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $slider): Response
    {
        return Inertia::render('slider/show', ['id' => $slider]);
    }
}
