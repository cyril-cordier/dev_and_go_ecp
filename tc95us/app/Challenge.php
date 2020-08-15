<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Challenge extends Model
{
    use HasApiTokens, Notifiable;

    protected $table = 'challenge';
    protected $fillable = [
    'winner', 'looser', 'S1W', 'S1L', 'S2W', 'S2L', 'S3W', 'S3L', 'pointsW', 'pointsL', 'details'
    ];
}
