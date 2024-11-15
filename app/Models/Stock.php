<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'status'
    ];

    public $timestamps = false;

    public function product(){
        return $this->belongsTo(Product::class)->with('image','category','price','reviews');
    }
}
