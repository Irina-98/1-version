<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\DepartmentPositionUser;
use App\Models\ParentStudent;
use App\Models\EmployeeStudent;
use App\Models\PortalUser;
use App\Models\Portal;
use App\Models\Category;
use App\Models\PortalRole;
use App\Models\ProleRole;
use App\Models\PpermissionRole;

use Spatie\Permission\Models\Role;


use App\Helpers\Utilities;

class UserController extends Controller
{
    /**
     * @OA\Post(
     *  path="/api/user/list",
     *  summary="Список пользователей",
     *  tags={"user"},
     *  security={ {"bearer": {} }},
     *  @OA\Response(
     *      response=200,
     *      description="Список элементов",
     *  )
     * )
    */
    public function list(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        $users = User::with(['roles', 'portals', 'proles', 'ppermissions'])->paginate(5);
        return response()->json($users);
    }

    public function listAllRoles(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        $roles = Role::get();
        return response()->json($roles);
    }

    public function listByRoleSimple(Request $request, string $role)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        $users = User::select('id','lastname_ru', 'firstname_ru', 'middlename_ru',
        'lastname_en', 'firstname_en', 'middlename_en')->whereHas(
            'roles', function($q) use ($role) {
                $q->where('name', $role);
            }
        )->get();
        return response()->json($users);
    }


    public function get(Request $request, int $id)
    {
        $u = $request->user();
        if ($u->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $user = User::with(['roles', 'departments_positions_users', 'employees_students', 'parents_students',
            'portals', 'portals.proles', 'portals.proles.ppermissions', 'proles', 'proles.ppermissions', 'ppermissions'])
            ->find($id);
        return response()->json($user);
    }


    public function create(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $req = $request->post();

        $req = Utilities::setUserNullValuesOutOfRoles($req);

        if (is_string($req['emails'])) {
            $req['emails'] = json_decode($req['emails']);
        }
        if (is_string($req['phones'])) {
            $req['phones'] = json_decode($req['phones']);
        }
        if (is_string($req['employee_education'])) {
            $req['employee_education'] = json_decode($req['employee_education']);
        }

        $newuser = new User($req);
        $newuser->password = bcrypt($req['password']);
        $newuser->email_verified_at = date("Y-m-d H:i:s");

        $newuser->is_first = true;
        $newuser->token = Utilities::generateRandomString();
        $newuser->token_date = date("Y-m-d H:i:s");

        /*if (($request->has('password') == false) && ($user->hasRole('director'))) {
            $newuser->password = bcrypt('asdf');
        } else {
            
        }
        */
        $newuser->save();

        if ($request->hasFile('image')) {
            $newuser->addMediaFromRequest('image')->toMediaCollection('image');
        }
        $newuser->assignRole(explode(",", $req['role']));

        if (is_string($req['portals'])) { 
            $req['portals'] = Utilities::getJsonIdsFromString($req['portals']); 
            $newuser->portals()->attach($req['portals']);
            $portals = Portal::whereIn('id', $req['portals'])->where('is_bookmark', '=', true)->get();
            $pIds = $portals->pluck('id');
            $portalUsers = PortalUser::where('user_id', '=', $newuser->id)
                ->whereIn('portal_id', $pIds)->get();
            foreach($portalUsers as $p) {
                $p->is_bookmark = true;
                $p->save();
            }
        }
        

        if (is_string($req['proles'])) { 
            $req['proles'] = Utilities::getJsonIdsFromString($req['proles']); 
            $newuser->proles()->attach($req['proles']);
        }

        if (is_string($req['ppermissions'])) { 
            $req['ppermissions'] = Utilities::getJsonIdsFromString($req['ppermissions']); 
            $newuser->ppermissions()->attach($req['ppermissions']);
        }

        if (is_string($req['departments_positions_users'])) {
            $arr = json_decode($req['departments_positions_users']);
            foreach($arr as $a) {
                $el['user_id'] = $newuser->id;
                $el['position_id'] = $a->position_id;
                $el['department_id'] = $a->department_id;
                $item = new DepartmentPositionUser($el);
                $item->save();
            }
        }

        if (is_string($req['employees_students'])) {
            $arr = json_decode($req['employees_students']);
            foreach($arr as $a) {
                $el['student_id'] = $newuser->id;
                $el['employee_id'] = $a->employee_id;
                $el['type_id'] = 1;
                $item = new EmployeeStudent($el);
                $item->save();
            }
        }

        if (is_string($req['parents_students'])) {
            $arr = json_decode($req['parents_students']);
            foreach($arr as $a) {
                $el['parent_id'] = $newuser->id;
                $el['student_id'] = $a->student_id;
                $el['relationship_id'] = $a->relationship_id;
                $item = new ParentStudent($el);
                $item->save();
            }
        }

        \Mail::send('emails.welcome', [
            'fio' => $newuser->fio('ru'), 
            'role' => Utilities::getRuRoleNames($req['role']),
            'token' => $newuser->token,
        ],
            function($message) use ($newuser) {
                $message->to($newuser->email)->subject('Регистрация на портале ' . config('app.name'));
            }
        );
        
        return response()->json([
            'message '=> 'User created successfully',
            'user' => $newuser
            //'r' => print_r($request->all(), true)
        ]);
    }

    public function update(Request $request, int $id)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $req = $request->post();
        $req = Utilities::setUserNullValuesOutOfRoles($req);
        
        $item = User::find($id);
        if (isset($req['password']) && (!empty(trim($req['password'])))) {
            $req['password'] = bcrypt($req['password']);
        } else {
            unset($req['password']);
        }

        if (is_string($req['emails'])) {
            $req['emails'] = json_decode($req['emails']);
        }
        if (is_string($req['phones'])) {
            $req['phones'] = json_decode($req['phones']);
        }
        if (is_string($req['employee_education'])) {
            $req['employee_education'] = json_decode($req['employee_education']);
        }

        $fieldsInt = Utilities::getUserFieldsInt();
        foreach($fieldsInt as $f) {
            if (isset($req[$f])) {
                $req[$f] = Utilities::getNullInteger($req[$f]);
            }
        }
        
        $item->update($req);

        if (is_string($req['portals'])) {
            $req['portals'] = Utilities::getJsonIdsFromString($req['portals']);
            $item->portals()->sync($req['portals']);
        }
        

        if (is_string($req['proles'])) {
            $req['proles'] = Utilities::getJsonIdsFromString($req['proles']);
            $item->proles()->sync($req['proles']);
        }
        

        if (is_string($req['ppermissions'])) { 
            $req['ppermissions'] = Utilities::getJsonIdsFromString($req['ppermissions']); 
            $item->ppermissions()->sync($req['ppermissions']);
        }
        
        
        if ($request->hasFile('image')) {
            $item->addMediaFromRequest('image')->toMediaCollection('image');
        }

        if (is_string($req['departments_positions_users'])) {
            $arr = json_decode($req['departments_positions_users']);
            $ids = array();
            foreach($arr as $a) {
                if (isset($a->id)) {
                    $ids[] = $a->id;
                }
            }
            DepartmentPositionUser::where('user_id', '=', $item->id)->whereNotIn('id', $ids)->delete();
            foreach($arr as $a) {
                $el['user_id'] = $item->id;
                $el['position_id'] = $a->position_id;
                $el['department_id'] = $a->department_id;
                if (isset($a->id)) {
                    $hitem = DepartmentPositionUser::find($a->id);
                    $hitem->update($el);
                } else {
                    $hitem = new DepartmentPositionUser($el);
                    $hitem->save();
                }
            }
        }

        if (is_string($req['employees_students'])) {
            $arr = json_decode($req['employees_students']);
            $ids = array();
            foreach($arr as $a) {
                if (isset($a->id)) {
                    $ids[] = $a->id;
                }
            }
            EmployeeStudent::where('student_id', '=', $item->id)->whereNotIn('id', $ids)->delete();
            foreach($arr as $a) {
                $el['student_id'] = $item->id;
                $el['employee_id'] = $a->employee_id;
                $el['type_id'] = 1;
                if (isset($a->id)) {
                    $hitem = EmployeeStudent::find($a->id);
                    $hitem->update($el);
                } else {
                    $item = new EmployeeStudent($el);
                    $item->save();
                }
            }
        }

        if (is_string($req['parents_students'])) {
            $arr = json_decode($req['parents_students']);
            $ids = array();
            foreach($arr as $a) {
                if (isset($a->id)) {
                    $ids[] = $a->id;
                }
            }
            ParentStudent::where('parent_id', '=', $item->id)->whereNotIn('id', $ids)->delete();
            foreach($arr as $a) {
                $el['parent_id'] = $item->id;
                $el['student_id'] = $a->student_id;
                $el['relationship_id'] = $a->relationship_id;
                if (isset($a->id)) {
                    $hitem = ParentStudent::find($a->id);
                    $hitem->update($el);
                } else {
                    $item = new ParentStudent($el);
                    $item->save();
                }
            }
        }
        
        return response()->json([
            'message '=> 'Item updated successfully',
            'item' => $item,
        ]);
    }

    public function delete(Request $request, int $id)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $item = User::find($id);
        $item->delete($id);
        return response()->json([
            'message '=> 'Item deleted successfully',
        ]);
    }

    public function imageDelete(Request $request, int $id)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $item = User::find($id);
        $item->clearMediaCollection('image');
        return response()->json([
            'message '=> 'image deleted successfully',
        ]);
    }

    public function getMyPortals(Request $request)
    {
        $user = $request->user();
        $portals = PortalUser::with('portal')->where('user_id', '=', $user->id)->get();
        return response()->json($portals);
    }

    public function getMyPortalsBookmarked(Request $request)
    {
        $user = $request->user();
        $portals = PortalUser::with('portal')->where('user_id', '=', $user->id)
            ->where('is_bookmark', '=', true)->get();
        return response()->json($portals);
    }

    public function getMyCategories(Request $request)
    {
        $user = $request->user();
        $portalIds = PortalUser::where('user_id', '=', $user->id)->get()->pluck('portal_id');
        $categoryIds = Portal::whereIn('id', $portalIds)->get()->pluck('category_id');
        $categories = Category::whereIn('id', $categoryIds)->get();
        return response()->json($categories);
    }

    public function getMyPortalsByCategory(Request $request, int $id)
    {
        $user = $request->user();
        $hportals = PortalUser::with('portal')
            ->where('user_id', '=', $user->id)
            ->get();
        $portals = array();
        foreach($hportals as $p) {
            if ($p['portal']['category_id'] == $id) {
                $portals[] = $p;
            }
        }
        return response()->json($portals);
    }

    public function meUpdate(Request $request)
    {
        $user = $request->user();
        if ($user == null) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $user->info = $request->info;
        $user->language = $request->language;
        $user->notification_type = $request->notification_type;
        $user->save();
        return response()->json([
            'message '=> 'Me updated successfully',
        ]);
    }

    public function mePassword(Request $request)
    {
        $user = $request->user();
        if ($user == null) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        if ($request->has('password')) {
            $user->password = bcrypt($request->password);
            $user->save();
        }
        
        return response()->json([
            'message '=> 'Me updated successfully',
        ]);
    }

    public function getAllDefaultPortalRoles(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }

        $roles = Role::get();
        $portals = PortalRole::get();
        $proles = ProleRole::get();
        $ppermissions = PpermissionRole::get();
        $data = array();
        foreach($roles as $k => $v) {
            $arr = array();
            $arr['id'] = $v['id'];
            $arr['portals'] = array();
            $arr['proles'] = array();
            $arr['ppermissions'] = array();
            $data[$v['name']] = $arr;
        }
        foreach($data as $k => $v) {
            foreach($portals as $sk => $sv) {
                if ($v['id'] == $sv['role_id']) {
                    $data[$k]['portals'][] = $sv['portal_id'];
                }
            }
            foreach($proles as $sk => $sv) {
                if ($v['id'] == $sv['role_id']) {
                    $data[$k]['proles'][] = $sv['prole_id'];
                }
            }
            foreach($ppermissions as $sk => $sv) {
                if ($v['id'] == $sv['role_id']) {
                    $data[$k]['ppermissions'][] = $sv['ppermission_id'];
                }
            }
        }

        return response()->json($data);
    }

    public function externalLoginCheck(Request $request)
    {
        if ((!$request->has('etoken')) || (!$request->has('email')) || (!$request->has('elk_api_key'))) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }

        if ((!is_string($request->etoken)) || (!is_string($request->email)) || (!is_string($request->elk_api_key))) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }

        

        $portal = Portal::where('elk_api_key', '=', $request->elk_api_key)->first();
        
        if ($portal == null) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }

        $user = User::where('email', '=', $request->email)
        ->whereHas(
            'portals', function($q) use ($portal) {
                $q->where('portal_id', $portal->id);
            }
        )
        ->whereHas(
            'etokens', function($q) use ($request) {
                $q->where('etoken', $request->etoken);
            }
        )
        ->first();

        if ($user == null) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
        
    }

}
