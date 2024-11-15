<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function __construct($resource)
    {
        parent::__construct($resource);

        $this->withoutWrapping();
    }
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->withoutWrapping();
        date_default_timezone_set('Asia/Karachi');

        $quantity = 0;

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'category' => $this->category,
            'price' => $this->price,
            'price_value' => $this->price->base_price - $this->price->base_price * $this->price->sales / 100,
            'thumbnail' => $this->thumbnail,
            'images' => $this->image,
            'quantity' => $this->stock ? $this->stock->quantity : 0,
            'feature' => $this->feature,
            'review' => $this->reviews,
            "revenue" => $this->revenue,
            'avg_rating' => $this->avg_rating,
            'created_at' => $this->created_at ? $this->created_at->toDateTimeString() : "",
        ];
    }
}
