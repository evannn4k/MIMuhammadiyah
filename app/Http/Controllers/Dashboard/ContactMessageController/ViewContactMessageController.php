<?php

namespace App\Http\Controllers\Dashboard\ContactMessageController;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewContactMessageController
{
    public function index(Request $request): Response
    {
        return Inertia::render('contact-message/page', [
            'filters' => $request->only(['search', 'status', 'sort', 'direction', 'page', 'per_page']),
        ]);
    }

    public function show(string $contact_message): Response
    {
        return Inertia::render('contact-message/show', ['id' => $contact_message]);
    }
}
