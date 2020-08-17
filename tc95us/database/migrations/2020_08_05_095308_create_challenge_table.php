<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChallengeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('challenge', function (Blueprint $table) {
            $table->id();
            $table->string('winner');
            $table->string('looser');
            $table->integer('S1W');
            $table->integer('S1L');
            $table->integer('S2W')->nullable();
            $table->integer('S2L')->nullable();
            $table->integer('S3W')->nullable();
            $table->integer('S3L')->nullable();
            $table->integer('pointsW');
            $table->integer('pointsL');
            $table->string('details')->nullable();
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
        Schema::dropIfExists('challenge');
    }
}
