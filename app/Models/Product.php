<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    protected $fillable=[
        'name',
        'selling_price',
        'featured_image',
        'status',
        'description',
        'cost_price'
    ];
}
