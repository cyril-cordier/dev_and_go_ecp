<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChallengeUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('challenge_users', function (Blueprint $table) {
            $table->id();
            $table->string('challengename');
            $table->string('contact');
            $table->string('ranking');
            $table->string('points');
            $table->string('nbmatchs');
            $table->string('matchaverage');
            $table->string('setaverage');
            $table->string('gameaverage');
            $table->string('visible');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('challenge_users');
    }
}
