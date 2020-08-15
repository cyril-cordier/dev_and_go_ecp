<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ChallengeUsers extends Model
{

    use HasApiTokens, Notifiable;

    protected $table = 'challengeusers';
    protected $fillable = [
    'challengename', 'ranking', 'contact', 'points', 'nbmatchs', 'matchaverage', 'setaverage', 'gameaverage', 'visible'
];
}
