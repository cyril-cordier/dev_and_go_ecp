<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Championnats extends Model
{

    use HasApiTokens, Notifiable;

    protected $table = 'championnats';
    protected $fillable = [
    'date', 'competition', 'match', 'score'
    ];
}
