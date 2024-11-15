<?php

use App\Http\Controllers\Api\DeliveryController;
use App\Http\Controllers\Api\ShippingController;

Route::resource('/deliveries', ShippingController::class);