<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressResource extends JsonResource
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
            'city' => $this->city,
            'district' => $this->district,
            'ward' => $this->ward,
            'address' => $this->address,
            'type' => $this->type,
            'default' => $this->default == 1 ? true : false
        ];
    }
}
