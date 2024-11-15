<?php

namespace App\Http\Resources;

use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'user' => $this->user,
            "products" => $this->product,
            "status" => $this->status,
            "address" => $this->address,
            "current_status" => $this->current_status,
            "total_price" => $this->total_price,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at
        ];
    }
}
