<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
use Inertia\Inertia;
Route::get('/lab/free-fall', function () {
    return Inertia::render('Lab/FreeFall');
})->middleware(['auth', 'verified'])->name('lab.free-fall');
use App\Http\Controllers\ExperimentController;
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/lab/dashboard', [ExperimentController::class, 'index'])->name('lab.dashboard');
    Route::post('/lab/experiments', [ExperimentController::class, 'store'])->name('lab.experiments.store');
});
