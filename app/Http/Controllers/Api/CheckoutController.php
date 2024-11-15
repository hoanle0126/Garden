<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AddressResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CityResource;
use App\Models\Address;
use App\Models\Cart;
use App\Models\Category;
use App\Models\City;
use App\Models\Product;
use Http;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('CheckoutPage/index', [
            'categories' => CategoryResource::collection(Category::all()),
            'cities' => CityResource::collection(City::all()),
            'addresses' => AddressResource::collection(Address::where('user_id', request()->user()->id)->get())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Product $product)
    {
        $cart = Cart::query()->where('user_id', $request->user()->id)->first();

        $productElement = Product::find($product);
        $hasExists = $cart->Product()->where('product_id', $product->id)->exists();

        if (!$hasExists) {
            $cart->Product()->attach($productElement, [
                "quantity" => $request->quantity
            ]);
        } else {
            $qty = $cart->Product()->select("quantity")->where("product_id", $product->id)->first()->quantity;
            $cart->Product()->updateExistingPivot($product->id, ['quantity' => $qty + $request->quantity]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $cart = Cart::query()->where('user_id', 2)->first();

        $productElement = Product::find($product);
        $hasExists = $cart->Product()->where('product_id', $product->id)->exists();

        if (!$hasExists) {
            $cart->Product()->attach($productElement, [
                "quantity" => $request->quantity
            ]);
        } else {
            $qty = $cart->Product()->select("quantity")->where("product_id", $product->id)->first()->quantity;
            $cart->Product()->updateExistingPivot($product->id, ['quantity' => $qty + $request->quantity]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
