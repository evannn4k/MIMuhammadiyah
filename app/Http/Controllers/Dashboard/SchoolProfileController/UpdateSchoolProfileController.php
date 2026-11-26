<?php

namespace App\Http\Controllers\Dashboard\SchoolProfileController;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SchoolProfileRequest\UpdateSchoolProfileRequest;
use App\Models\SchoolProfile;
use Illuminate\Support\Facades\Log;

class UpdateSchoolProfileController extends Controller
{
    public function __invoke(
        UpdateSchoolProfileRequest $request,
        SchoolProfile $schoolProfile,
    ) {
        $credentials = $request->validated();

        dd($credentials);
        try {

            $schoolProfile->update($credentials);

            return redirect()
                ->back()
                ->with('success', 'Berhasil mengedit profile sekolah.');
        } catch (\Exception $e) {
            Log::error('Error : '.$e->getMessage());

            return redirect()
                ->back()
                ->with(
                    'error',
                    'terjadi kesalahan sistem. Silahkan coba lagi.',
                );
        }
    }
}
