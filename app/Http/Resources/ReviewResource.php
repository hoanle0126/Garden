<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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
            'products' => $this->product,
            'user' => new UserResource($this->user),
            'rating' => $this->rating,
            'comment' => $this->comment,
            'like' => $this->ReviewLike,
            'created_at' => $this->created_at
        ];
    }
}
