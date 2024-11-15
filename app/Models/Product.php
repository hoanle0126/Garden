<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "description",
        "thumbnail",
        'avg_rating',
        'category_id',
        'feature'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function image()
    {
        return $this->hasMany(Image::class);
    }

    public function price()
    {
        return $this->hasOne(Price::class);
    }

    public function cart()
    {
        return $this->belongsToMany(Cart::class, 'cart_product')->withPivot("quantity");
    }

    public function stock()
    {
        return $this->hasOne(Stock::class);
    }

    public function feature()
    {
        return $this->hasOne(Feature::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class)->with("user");
    }

    public function order()
    {
        return $this->belongsToMany(Order::class, "order_product");
    }
}
