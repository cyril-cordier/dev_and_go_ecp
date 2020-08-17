<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Products extends Model
{
    use HasApiTokens, Notifiable;
    
    protected $table = 'products';
    protected $fillable = [
    'name', 'details', 'price','image', 'image_name'
];

}
