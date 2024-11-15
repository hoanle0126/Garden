<?php

use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use App\Http\Resources\AddressResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CityResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Models\Address;
use App\Models\Cart;
use App\Models\Category;
use App\Models\City;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use GuzzleHttp\Client;


Route::get('/', function () {
    return Inertia::render('LandingPage/index');
});

Route::resource('/shops', ShopController::class);


Route::get('/test_api', function () {
    $address = '12 kiệt 46 Nguyễn Gia Thiều, Phường Phú Hậu, Thành phố Huế, Tỉnh Thừa Thiên Huế';
    $apiKey = 'pk.eyJ1IjoiaG9hbmxlMDEyNiIsImEiOiJjbHZyeGwzdmkwdWR5MmtwMTBwYWd3cDIyIn0.PIxdMnf3YAuUjrAqP5FSsw'; // Thay YOUR_MAPBOX_API_KEY bằng API Key của bạn

    $client = new Client();
    $response = $client->get("https://api.mapbox.com/geocoding/v5/mapbox.places/" . urlencode($address) . ".json", [
        'query' => [
            'access_token' => $apiKey
        ]
    ]);

    $data = json_decode($response->getBody()->getContents(), true);

    if (isset($data['features'][0])) {
        $lat = $data['features'][0]['geometry']['coordinates'][1];
        $lng = $data['features'][0]['geometry']['coordinates'][0];

        return response()->json([
            'latitude' => $lat,
            'longitude' => $lng
        ]);
    }

    // Trường hợp không có kết quả hoặc lỗi
    return response()->json([
        'error' => CityResource::collection(City::all()),
    ]);
});


Route::get('/user', function () {
    return new UserResource(request()->user());
});


Route::resource('/addresses', AddressController::class);
Route::resource('/reviews', ReviewController::class);


Route::get('/payment', function () {
    return Inertia::render("PaymentPage/index");
});

Route::post('/zalopay/payment', [PaymentController::class, 'createPayment'])->name('zalopay.payment');



Route::get('/checkouts', [CheckoutController::class, 'index'])->name("checkouts.index");

Route::resource('/orders', OrderController::class);

Route::delete('/user/orders/cancel/{order}', [OrderController::class, 'cancel'])->name("orders.cancel");

Route::get('/user/special-offers', function () {
    return Inertia::render("SpecialOfferPage/index");
});

Route::get('/user/auth/change-password', function () {
    return Inertia::render("ClientChangePasswordPage/index");
});

Route::get('/user/auth/banks', function () {
    return Inertia::render("ClientBankPage/index");
});

Route::get('/user/auth/profile', function () {
    return Inertia::render("ClientProfilePage/index");
})->name("client.profile");

Route::get('/user/notifications', function () {
    return Inertia::render("ClientNotificationsPage/index");
});

Route::get('/user/vouchers', function () {
    return Inertia::render("VoucherPage/index");
});


Route::get('/user/coins', function () {
    return Inertia::render("ClientCoinPage/index");
});

Route::post('/checkouts/{product}', [CheckoutController::class, 'store'])->name("checkouts.store");

Route::put('/checkouts', [CheckoutController::class, 'update'])->name("checkouts.update");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', ["logined" => Auth::check()]);
}, )->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/delivery.php';
