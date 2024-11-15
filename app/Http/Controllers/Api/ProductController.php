<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        date_default_timezone_set('Asia/Kolkata');

        return Inertia::render('ProductManagePage/index', [
            "products" => ProductResource::collection(Product::all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateProductPage/index', [
            "products" => ProductResource::collection(Product::all()),
            "categories" => CategoryResource::collection(Category::all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category['id'],
            'feature' => $request->feature
        ]);

        $images = $request->get('images');

        if (!empty($images)) {
            foreach ($images as $image) {
                $product->Image()->create([
                    'src' => $image['src'],
                    'product_id' => $product->id
                ]);
            }
        }

        $product->Price()->create([
            'base_price' => $request->price['base_price'],
            'sales' => $request->price['sales'],
        ]);

        $product->Stock()->create([
            'quantity' => $request->quantity,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('ViewProductPage/index', [
            "product" => new ProductResource($product),
            "categories" => CategoryResource::collection(Category::all())
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category['id'],
            'feature' => $request->feature
        ]);

        $images = $request->get('images');

        $product->Image()->delete();


        if (!empty($images)) {
            foreach ($images as $image) {
                $product->Image()->create([
                    'src' => $image['src'],
                    'product_id' => $product->id
                ]);
            }
        }

        $product->Price()->update([
            'base_price' => $request->price['base_price'],
            'sales' => $request->price['sales'],
        ]);

        $product->Stock()->update([
            'quantity' => $request->quantity,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
