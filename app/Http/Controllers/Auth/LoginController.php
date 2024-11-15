<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Cookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;

class LoginController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/LoginPage/index');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        Cookie::queue(Cookie::make('user_id', auth()->user()->id, 0));

        $roleName = request()->user()->getRoleNames()->first();

        if ($roleName == "admin") {
            return redirect()->route("admin.dashboard");
        }

        if (strstr($roleName, ',', true) == "delivery") {
            return redirect()->route("deliveries.index");
        }

        return redirect()->route("shops.index");
    }
}
