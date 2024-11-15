<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(Carbon::class, function (Container $container) {
            return new Carbon('now', 'Asia/Ho_Chi_Minh');
        });
    }
}
