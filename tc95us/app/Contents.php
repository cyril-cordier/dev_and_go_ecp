<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Contents extends Model
{

    use HasApiTokens, Notifiable;

    protected $table = 'contents';
    protected $fillable = [
    'title', 'content', 'name', 'fonction', 'image', 'image_name'
];
}
