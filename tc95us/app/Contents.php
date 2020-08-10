<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contents extends Model
{
    protected $table = 'contents';
    protected $fillable = [
    'title', 'content', 'name', 'function', 'image'
];
}
