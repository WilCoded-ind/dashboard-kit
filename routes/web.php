<?php

use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// auth mengarah ke login bukan welcome
Route::inertia('/', 'auth/login', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // route - dashboard
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // route - user
    Route::inertia('users', 'users/index')->name('users.index');
    Route::inertia('users/create', 'users/create')->name('users.create');
    Route::inertia('users/{user}/edit', 'users/edit')->name('users.edit');
    Route::inertia('users/{user}', 'users/show')->name('users.show');

    // route - role
    Route::get('roles', [RoleController::class, 'index'])->name('roles.index');
    Route::get('roles/create', [RoleController::class, 'create'])->name('roles.create');
    Route::post('roles', [RoleController::class, 'store'])->name('roles.store');
    Route::get('roles/{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
    Route::put('roles/{role}', [RoleController::class, 'update'])->name('roles.update');
    Route::delete('roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
    Route::get('roles/{role}/permissions', [RoleController::class, 'permission'])->name('roles.permissions');
    Route::put('roles/{role}/permissions', [RoleController::class, 'updatePermission'])->name('roles.permissions.update');

    // route - permission
    Route::inertia('permissions', 'permissions/index')->name('permissions.index');

    // route - menu
    Route::inertia('menus', 'menus/index')->name('menus.index');
    Route::inertia('menus/create', 'menus/create')->name('menus.create');
    Route::inertia('menus/{menu}/edit', 'menus/edit')->name('menus.edit');
    Route::inertia('menus/{menu}', 'menus/show')->name('menus.show');
});

require __DIR__.'/settings.php';
