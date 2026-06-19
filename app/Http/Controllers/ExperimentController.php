<?php

namespace App\Http\Controllers;

use App\Models\Experiment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperimentController extends Controller
{
    public function index()
    {
        $experiments = Experiment::where('user_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Lab/Dashboard', [
            'experiments' => $experiments
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string',
            'parameters' => 'required|array',
            'result' => 'required|array',
        ]);

        Experiment::create([
            'user_id' => auth()->id(),
            'type' => $validated['type'],
            'parameters' => $validated['parameters'],
            'result' => $validated['result'],
        ]);

        return back();
    }
}
