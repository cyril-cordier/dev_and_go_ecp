<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Championnats extends Model
{
    protected $table = 'championnats';
    protected $fillable = [
    'date', 'competition', 'match', 'score'
    ];
}
