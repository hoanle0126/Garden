<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $fillable = [
        "base_price",
        "sales",
    ];

    public $timestamps = false;

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
