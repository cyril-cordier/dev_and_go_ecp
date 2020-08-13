<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChallengeUsers extends Model
{
    protected $table = 'challenge_users';
    protected $fillable = [
    'challengename', 'ranking', 'contact', 'points', 'nbmatchs', 'matchaverage', 'setaverage', 'gameaverage', 'visible'
];
}
