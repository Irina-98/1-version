<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PortalController;
use App\Http\Controllers\ProleController;
use App\Http\Controllers\PpermissionController;
use App\Http\Controllers\DepartmentController;

use App\Http\Controllers\PositionController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PensionController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\DirectionController;
use App\Http\Controllers\RelationshipController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\StatusController;

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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::post('/login', [AuthController::class, 'login']);
Route::post('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
Route::post('/change_password_first', [AuthController::class, 'changePasswordFirst']);
Route::post('/change_password', [AuthController::class, 'changePassword']);
Route::post('/forgot_password', [AuthController::class, 'forgotPassword']);


Route::post('/admin/user/list', [UserController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/user/list_by_role_simple/{role}', [UserController::class, 'listByRoleSimple'])->middleware('auth:sanctum');
Route::post('/admin/user/get/{id}', [UserController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/user/create', [UserController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/user/update/{id}', [UserController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/user/delete/{id}', [UserController::class, 'delete'])->middleware('auth:sanctum');
Route::post('/admin/user/image/delete/{id}', [UserController::class, 'imageDelete'])->middleware('auth:sanctum');
Route::post('/admin/user/list_all_roles', [UserController::class, 'listAllRoles'])->middleware('auth:sanctum');
Route::post('/admin/user/get_all_default_portal_roles', [UserController::class, 'getAllDefaultPortalRoles'])->middleware('auth:sanctum');
Route::post('/user/get_my_portals', [UserController::class, 'getMyPortals'])->middleware('auth:sanctum');
Route::post('/user/get_my_portals_bookmarked', [UserController::class, 'getMyPortalsBookmarked'])->middleware('auth:sanctum');
Route::post('/user/get_my_categories', [UserController::class, 'getMyCategories'])->middleware('auth:sanctum');
Route::post('/user/get_my_portals_by_category/{id}', [UserController::class, 'getMyPortalsByCategory'])->middleware('auth:sanctum');
Route::post('/user/me/update', [UserController::class, 'meUpdate'])->middleware('auth:sanctum');
Route::post('/user/me/password', [UserController::class, 'mePassword'])->middleware('auth:sanctum');
Route::post('/user/external_login_check', [UserController::class, 'externalLoginCheck']);


Route::post('/admin/category/list', [CategoryController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/category/list_all', [CategoryController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/category/create', [CategoryController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/category/get/{id}', [CategoryController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/category/update/{id}', [CategoryController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/category/delete/{id}', [CategoryController::class, 'delete'])->middleware('auth:sanctum');
Route::post('/admin/category/image/delete/{id}', [CategoryController::class, 'imageDelete'])->middleware('auth:sanctum');


Route::post('/admin/portal/list', [PortalController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/portal/list_all', [PortalController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/portal/create', [PortalController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/portal/get/{id}', [PortalController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/portal/update/{id}', [PortalController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/portal/delete/{id}', [PortalController::class, 'delete'])->middleware('auth:sanctum');
Route::post('/admin/portal/image/delete/{id}', [PortalController::class, 'imageDelete'])->middleware('auth:sanctum');
Route::post('/admin/portal/refresh_api_key/{id}', [PortalController::class, 'refreshApiKey'])->middleware('auth:sanctum');
Route::post('/portal/change_is_bookmark', [PortalController::class, 'changeIsBookmark'])->middleware('auth:sanctum');


Route::post('/admin/department/list', [DepartmentController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/department/list_all', [DepartmentController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/department/create', [DepartmentController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/department/get/{id}', [DepartmentController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/department/update/{id}', [DepartmentController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/department/delete/{id}', [DepartmentController::class, 'delete'])->middleware('auth:sanctum');
Route::post('/department/list_all_with_employee', [DepartmentController::class, 'listAllWithEmployee'])->middleware('auth:sanctum');

Route::post('/admin/position/list', [PositionController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/position/list_all', [PositionController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/position/create', [PositionController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/position/get/{id}', [PositionController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/position/update/{id}', [PositionController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/position/delete/{id}', [PositionController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/education/list', [EducationController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/education/list_all', [EducationController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/education/create', [EducationController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/education/get/{id}', [EducationController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/education/update/{id}', [EducationController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/education/delete/{id}', [EducationController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/profile/list', [ProfileController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/profile/list_all', [ProfileController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/profile/create', [ProfileController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/profile/get/{id}', [ProfileController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/profile/update/{id}', [ProfileController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/profile/delete/{id}', [ProfileController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/pension/list', [PensionController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/pension/list_all', [PensionController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/pension/create', [PensionController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/pension/get/{id}', [PensionController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/pension/update/{id}', [PensionController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/pension/delete/{id}', [PensionController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/notification/list', [NotificationController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/notification/list_all', [NotificationController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/notification/create', [NotificationController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/notification/get/{id}', [NotificationController::class, 'get'])->middleware('auth:sanctum');
Route::post('/user/notification/list_my', [NotificationController::class, 'listMy'])->middleware('auth:sanctum');

Route::post('/admin/lesson/list', [LessonController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/lesson/list_all', [LessonController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/lesson/create', [LessonController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/lesson/get/{id}', [LessonController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/lesson/update/{id}', [LessonController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/lesson/delete/{id}', [LessonController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/country/list', [CountryController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/country/list_all', [CountryController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/country/create', [CountryController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/country/get/{id}', [CountryController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/country/update/{id}', [CountryController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/country/delete/{id}', [CountryController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/region/list', [RegionController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/region/list_all', [RegionController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/region/list_all_by_country/{id}', [RegionController::class, 'listAllByCountry'])->middleware('auth:sanctum');
Route::post('/admin/region/create', [RegionController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/region/get/{id}', [RegionController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/region/update/{id}', [RegionController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/region/delete/{id}', [RegionController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/city/list', [CityController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/city/list_all', [CityController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/city/list_all_by_region/{id}', [CityController::class, 'listAllByRegion'])->middleware('auth:sanctum');
Route::post('/admin/city/create', [CityController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/city/get/{id}', [CityController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/city/update/{id}', [CityController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/city/delete/{id}', [CityController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/direction/list', [DirectionController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/direction/list_all', [DirectionController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/direction/create', [DirectionController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/direction/get/{id}', [DirectionController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/direction/update/{id}', [DirectionController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/direction/delete/{id}', [DirectionController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/status/list', [StatusController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/status/list_all', [StatusController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/status/create', [StatusController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/status/get/{id}', [StatusController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/status/update/{id}', [StatusController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/status/delete/{id}', [StatusController::class, 'delete'])->middleware('auth:sanctum');

Route::post('/admin/relationship/list', [RelationshipController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/relationship/list_all', [RelationshipController::class, 'listAll'])->middleware('auth:sanctum');
Route::post('/admin/relationship/create', [RelationshipController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/relationship/get/{id}', [RelationshipController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/relationship/update/{id}', [RelationshipController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/relationship/delete/{id}', [RelationshipController::class, 'delete'])->middleware('auth:sanctum');


Route::post('/admin/prole/list', [ProleController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/prole/list_by_portal/{id}', [ProleController::class, 'listByPortal'])->middleware('auth:sanctum');
Route::post('/admin/prole/create', [ProleController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/prole/get/{id}', [ProleController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/prole/update/{id}', [ProleController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/prole/delete/{id}', [ProleController::class, 'delete'])->middleware('auth:sanctum');
Route::post('/prole/list_by_elk_api_key', [ProleController::class, 'listByElkApiKey']);

Route::post('/admin/ppermission/list', [PpermissionController::class, 'list'])->middleware('auth:sanctum');
Route::post('/admin/ppermission/create', [PpermissionController::class, 'create'])->middleware('auth:sanctum');
Route::post('/admin/ppermission/get/{id}', [PpermissionController::class, 'get'])->middleware('auth:sanctum');
Route::post('/admin/ppermission/update/{id}', [PpermissionController::class, 'update'])->middleware('auth:sanctum');
Route::post('/admin/ppermission/delete/{id}', [PpermissionController::class, 'delete'])->middleware('auth:sanctum');
