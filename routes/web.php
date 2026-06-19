<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ExperimentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Root route redirects to lab dashboard or login
Route::get('/', function () {
    return auth()->check()
        ? redirect()->route('lab.dashboard')
        : redirect()->route('login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    // Redundant dashboard redirects to lab dashboard
    Route::get('/dashboard', function () {
        return redirect()->route('lab.dashboard');
    })->name('dashboard');

    // Virtual Lab Routes
    Route::get('/lab/dashboard', [ExperimentController::class, 'index'])->name('lab.dashboard');
    Route::get('/lab/free-fall', function () {
        return Inertia::render('Lab/FreeFall');
    })->name('lab.free-fall');
    Route::post('/lab/experiments', [ExperimentController::class, 'store'])->name('lab.experiments.store');

    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
