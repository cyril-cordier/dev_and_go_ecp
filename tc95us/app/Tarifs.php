<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Tarifs extends Model
{
    use HasApiTokens, Notifiable;

    protected $table = 'tarifs';
    protected $fillable = [
    'type', 'category', 'price1', 'price2', 'price3', 'details'
    ];
}
