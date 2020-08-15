<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');



Route::group(['middleware' => 'auth:api'], function(){
        Route::post('update', 'UserController@updateUser');
        Route::delete('delete', 'UserController@destroy');
        Route::get('users/me','UserController@details');
        Route::put('update', 'UserController@update');
        Route::resource('users','UserController');
        Route::post('users/me','UserController@updateUser'); 
        Route::resource('products','ProductController');
        Route::resource('contents','ContentController');
        Route::resource('events','EventController');
        Route::resource('championnats','ChampionnatController');
        Route::resource('challengeusers','ChallengeUserController');
        Route::resource('challengeresults','ChallengeResultController');
        Route::resource('tarifs','TarifController');
        Route::resource('office','OfficeController');




});