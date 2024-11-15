<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'products' => $this->product->map(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'thumbnail' => $product->thumbnail,
                    'price_value' => $product->price->base_price - ($product->price->base_price * $product->price->sales / 100),
                    'category' => $product->category,
                    'stock' => $product->stock,
                    'quantity' => $product->pivot->quantity, // Lấy giá trị pivot quantity
                ];
            }),
        ];
    }
}
