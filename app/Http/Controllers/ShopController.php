<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ReviewResource;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::query();

        if ($request->query('sort')) {
            $products->orderBy($request->query('sort'), $request->query('order'));
        }

        if ($request->query('category')) {
            $products->with("category")->whereHas('category', function ($category) use ($request) {
                $category->where('name', $request->query('category'));
            });
        }

        if ($request->query('priceFrom')) {
            $products->where('price_value', '>', $request->query('priceFrom'));
            $products->where('price_value', '<', $request->query('priceTo'));
        }

        // if ($request->query('priceFrom') && $request->query('priceTo')) {
        //     $products->with('price')->whereHas('price', function ($q) use ($request) {
        //         $q->where('base_price', '>', $request->query('priceFrom'));
        //         $q->where('base_price', '<', $request->query('priceTo'));
        //     });
        // }

        return Inertia::render('ShopPage/index', [
            'categories' => CategoryResource::collection(Category::all()),
            'products' => ProductResource::collection($products->paginate(8)),
            'productsField' => ProductResource::collection(Product::all()),
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
    public function store(Request $request)
    {
        return [
            'categories' => CategoryResource::collection(Category::all()),
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show($product)
    {
        return Inertia::render('ShopProductDetailPage/index', [
            'categories' => CategoryResource::collection(Category::all()),
            'product' => new ProductResource(Product::find($product)),
            'review' => ReviewResource::collection(Review::where("product_id", $product)->orderByDesc("created_at")->get())
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
        return [
            'categories' => CategoryResource::collection(Category::all()),
            'product' => new ProductResource(Product::find($product))
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
