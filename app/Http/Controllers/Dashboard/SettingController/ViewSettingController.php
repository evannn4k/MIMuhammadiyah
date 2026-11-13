<?php

namespace App\Http\Controllers\Dashboard\SettingController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewSettingController
{
    public function index(Request $request): Response
    {
        return Inertia::render('setting/page', [
            'filters' => $request->only(['search', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }
}
