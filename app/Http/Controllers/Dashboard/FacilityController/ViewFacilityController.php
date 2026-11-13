<?php

namespace App\Http\Controllers\Dashboard\FacilityController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewFacilityController
{
    public function index(Request $request): Response
    {
        return Inertia::render('facility/page', [
            'filters' => $request->only(['search', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $facility): Response
    {
        return Inertia::render('facility/show', ['id' => $facility]);
    }
}
