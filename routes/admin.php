<?php
use App\Http\Controllers\Admin\OrderManager;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

Route::resource("/categories", CategoryController::class);

Route::resource("/admin/products", ProductController::class);

Route::get("/admin/orders", [OrderManager::class, "index"]);

Route::get('/admin', function () {

    return Inertia::render('DashboardPage/index', [
        'role' => request()->user()->getRoleNames()->first()
    ])->name("admin.dashboard");
});