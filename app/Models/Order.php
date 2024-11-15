<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "current_status",
        "total_price",
        "product_id",
        "address_id",
        "payment"
    ];

    protected $attributes = [
        'total_price' => "1"
    ];

    protected $dateFormat = 'Y-m-d H:i:s';

    public static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->id = strtoupper(random_int(0, 999999));
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function status()
    {
        return $this->hasMany(Status::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function product()
    {
        return $this->belongsToMany(Product::class, "order_product")->with('price')->withPivot('quantity');
    }
}
