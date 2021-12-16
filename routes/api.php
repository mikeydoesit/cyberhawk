<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controller\WindTurbineItemsController;

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
/*
|
| The list could also be retrieved from a database.
| 
| We could set this up with a controller that returns all the Windturbineitems from a 
| corresponding Model.
| View the app/http/controllers/WindTurbineItemsController.php file 
| Route::get('/turbine_items', 'WindTurbineItemsController@index')
|
*/

// I went for a simple function that returns an array or numbers 1 to 100
Route::get('/turbine_items', function(){

    $windTurbineItems = array();

    for ($x = 1; $x <= 100; $x++) {
        array_push($windTurbineItems,$x);
      }

      return json_encode($windTurbineItems);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
