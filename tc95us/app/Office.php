<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Office extends Model
{

    use HasApiTokens, Notifiable;

    protected $table = 'office';
    protected $fillable = [
    'name', 'function','image', 'image_name'
];
}
