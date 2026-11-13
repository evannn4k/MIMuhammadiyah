<?php

use App\Http\Controllers\Dashboard\AchievementController\ViewAchievementController;
use App\Http\Controllers\Dashboard\ContactMessageController\ViewContactMessageController;
use App\Http\Controllers\Dashboard\FacilityController\ViewFacilityController;
use App\Http\Controllers\Dashboard\GalleryController\ViewGalleryController;
use App\Http\Controllers\Dashboard\PostController\ViewPostController;
use App\Http\Controllers\Dashboard\RoleController\CreateRoleController;
use App\Http\Controllers\Dashboard\RoleController\DeleteRoleController;
use App\Http\Controllers\Dashboard\RoleController\SyncPermissionRoleController;
use App\Http\Controllers\Dashboard\RoleController\UpdateRoleController;
use App\Http\Controllers\Dashboard\RoleController\ViewRoleController;
use App\Http\Controllers\Dashboard\SchoolProfileController\ViewSchoolProfileController;
use App\Http\Controllers\Dashboard\SettingController\ViewSettingController;
use App\Http\Controllers\Dashboard\SliderController\ViewSliderController;
use App\Http\Controllers\Dashboard\SocialLinkController\ViewSocialLinkController;
use App\Http\Controllers\Dashboard\StaffController\ViewStaffController;
use App\Http\Controllers\Dashboard\UserController\CreateUserController;
use App\Http\Controllers\Dashboard\UserController\DeleteUserController;
use App\Http\Controllers\Dashboard\UserController\UpdateUserController;
use App\Http\Controllers\Dashboard\UserController\ViewUserController;
use Illuminate\Support\Facades\Route;

// TODO(backend): auth middleware
Route::middleware(['auth', 'verified'])->group(function () {
    // User
    Route::prefix('user')->name('user.')->group(function () {
        Route::get('', [ViewUserController::class, 'index'])->name('index');
        Route::post('', CreateUserController::class)->name('create');

        Route::get('{user}', [ViewUserController::class, 'show'])->name('show');
        Route::put('{user}', UpdateUserController::class)->name('update');
        Route::delete('{user}', DeleteUserController::class)->name('delete');
    });

    // Role
    Route::prefix('role')->name('role.')->group(function () {
        Route::get('', [ViewRoleController::class, 'index'])->name('index');
        Route::get('{role}', [ViewRoleController::class, 'show'])->name('show');
        Route::post('/', CreateRoleController::class)->name('create');

        Route::put('{role}', UpdateRoleController::class)->name('update');
        Route::delete('{role}', DeleteRoleController::class)->name('delete');
        Route::put('/sync/permission/{role}', SyncPermissionRoleController::class)->name(
            'sync',
        );
    });

    // Post (News/Berita)
    Route::prefix('berita')->name('post.')->group(function () {
        Route::get('', [ViewPostController::class, 'index'])->name('index');
        Route::get('{post}', [ViewPostController::class, 'show'])->name('show');
    });

    // Achievement (Prestasi)
    Route::prefix('prestasi')->name('achievement.')->group(function () {
        Route::get('', [ViewAchievementController::class, 'index'])->name('index');
        Route::get('{achievement}', [ViewAchievementController::class, 'show'])->name('show');
    });

    // Gallery (Galeri)
    Route::prefix('galeri')->name('gallery.')->group(function () {
        Route::get('', [ViewGalleryController::class, 'index'])->name('index');
        Route::get('{gallery}', [ViewGalleryController::class, 'show'])->name('show');
    });

    // Staff (Guru & Staff)
    Route::prefix('guru-staff')->name('staff.')->group(function () {
        Route::get('', [ViewStaffController::class, 'index'])->name('index');
        Route::get('{staff}', [ViewStaffController::class, 'show'])->name('show');
    });

    // Facility (Fasilitas)
    Route::prefix('fasilitas')->name('facility.')->group(function () {
        Route::get('', [ViewFacilityController::class, 'index'])->name('index');
        Route::get('{facility}', [ViewFacilityController::class, 'show'])->name('show');
    });

    // Slider
    Route::prefix('slider')->name('slider.')->group(function () {
        Route::get('', [ViewSliderController::class, 'index'])->name('index');
        Route::get('{slider}', [ViewSliderController::class, 'show'])->name('show');
    });

    // School Profile (Profil Sekolah)
    Route::prefix('profil-sekolah')->name('school-profile.')->group(function () {
        Route::get('', [ViewSchoolProfileController::class, 'index'])->name('index');
    });

    // Contact Message (Pesan)
    Route::prefix('pesan')->name('contact-message.')->group(function () {
        Route::get('', [ViewContactMessageController::class, 'index'])->name('index');
        Route::get('{contact_message}', [ViewContactMessageController::class, 'show'])->name('show');
    });

    // Social Link (Media Sosial)
    Route::prefix('media-sosial')->name('social-link.')->group(function () {
        Route::get('', [ViewSocialLinkController::class, 'index'])->name('index');
        Route::get('{social_link}', [ViewSocialLinkController::class, 'show'])->name('show');
    });

    // Setting (Pengaturan)
    Route::prefix('pengaturan')->name('setting.')->group(function () {
        Route::get('', [ViewSettingController::class, 'index'])->name('index');
    });
});
