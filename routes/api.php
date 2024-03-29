<?php

use App\Http\Controllers\ServiceController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/contact', [
    \App\Http\Controllers\ContactController::class,
    'submit',
]);
Route::get('/get-categories', [
    ServiceController::class,
    'getAllCategories',
]);

Route::get('/get-projects', [
    ServiceController::class,
    'getAllProjects',
]);
Route::get('/get-projects-all', [
    ServiceController::class,
    'getAllProjectsNew',
]);


Route::get('/get-project/{slug}', [
    ServiceController::class,
    'getByProject',
]);
Route::get('/get-home-slider', [
    ServiceController::class,
    'getHomeSlider',
]);
