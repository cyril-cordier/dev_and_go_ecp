<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChallengeUsers extends Model
{
    protected $table = 'challenge';
    protected $fillable = [
    'challengename', 'ranking', 'contact', 'points', 'nbmatchs', 'matchaverage', 'setaverage', 'gameaverage'
];
}
