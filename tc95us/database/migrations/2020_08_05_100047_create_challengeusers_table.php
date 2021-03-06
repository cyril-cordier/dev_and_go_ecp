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
        Schema::create('challengeusers', function (Blueprint $table) {
            $table->id();
            $table->string('challengename');
            $table->string('contact');
            $table->string('ranking');
            $table->integer('points');
            $table->integer('nbmatchs');
            $table->integer('matchaverage');
            $table->integer('setaverage');
            $table->integer('gameaverage');
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
        Schema::dropIfExists('challengeusers');
    }
}
