<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Events extends Model
{
    use HasApiTokens, Notifiable;
    
    protected $table = 'events';
    protected $fillable = [
    'title', 'details', 'place', 'date', 'hour', 'price','image'
];
}