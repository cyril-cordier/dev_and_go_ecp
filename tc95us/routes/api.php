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
Route::get('products','ProductController@index');
Route::get('products','ProductController@show');
Route::get('contents','ContentController@index');
Route::get('contents','ContentController@show');
Route::get('events','EventController@index');
Route::get('events','EventController@show');
Route::get('championnats','ChampionnatController@index');
Route::get('championnats','ChampionnatController@show');
Route::get('challengeresults','ChallengeResultController@index');
Route::get('challengeresults','ChallengeResultController@show');
Route::get('tarifs','TarifController@index');
Route::get('tarifs','TarifController@show');
Route::get('office','OfficeController@index');
Route::get('office','OfficeController@show');
Route::resource('products','ProductController');
Route::resource('contents','ContentController');
Route::resource('events','EventController');
Route::resource('championnats','ChampionnatController');
Route::resource('challengeusers','ChallengeUserController');
Route::resource('challengeresults','ChallengeResultController');
Route::resource('tarifs','TarifController');
Route::resource('office','OfficeController');


Route::group(['middleware' => 'auth:api'], function(){
        Route::post('update', 'UserController@updateUser');
        Route::delete('delete', 'UserController@destroy');
        Route::get('users/me','UserController@details');
        Route::put('update', 'UserController@update');
        Route::resource('users','UserController');
        Route::post('users/me','UserController@updateUser'); 
        Route::post('products','ProductController@store');
        Route::put('products','ProductController@update');
        //Route::get('products','ProductController@edit');
        Route::delete('products','ProductController@destroy');
        //Route::get('products','ProductController@create');


        /* Route::resource('products','ProductController');
        Route::resource('contents','ContentController');
        Route::resource('events','EventController');
        Route::resource('championnats','ChampionnatController');
        Route::resource('challengeusers','ChallengeUserController');
        Route::resource('challengeresults','ChallengeResultController');
        Route::resource('tarifs','TarifController');
        Route::resource('office','OfficeController');
 */



});