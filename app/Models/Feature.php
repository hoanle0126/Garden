<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    public $timestamps = false;

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
