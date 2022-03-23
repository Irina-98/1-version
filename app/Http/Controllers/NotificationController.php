<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\User;
use Illuminate\Http\Request;

use Spatie\Permission\Models\Role;


class NotificationController extends Controller
{
    public function listAll(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Notification::get();
        return response()->json($items);
    }

    public function listMy(Request $request)
    {
        $user = $request->user();
        $roles = $user->roles->pluck('id');
        $notifications = Notification::whereHas('roles',function($query) use ($roles) {
            $query->whereIn('roles.id', $roles);
        })->orderBy('created_at', 'desc')->get();
        $values = array();
        $values['fio'] = $user->fio($user->language);
        //$items = Notification::get();
        return response()->json(array(
            'values' => $values,
            'notifications' => $notifications
        ));
    }

    public function list(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Notification::with(['roles'])->paginate(2);
        return response()->json($items);
    }

    public function get(Request $request, int $id)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }

        $item = Notification::find($id);
        return response()->json($item);
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
        $item = Notification::create($req);

        $item->roles()->attach($req['roles']);

        $roles = Role::whereIn('id', $req['roles'])->get();
        $roles = $roles->pluck('name');
        $users = User::where('notification_type', '=', 3)
        ->whereHas(
            'roles', function($q) use ($roles) {
                $q->whereIn('name', $roles);
            }
        )->get();

        foreach($users as $u) {
            $fio = $u->fio($u->language);
            $email = $u->email;
            $title = $req['title'];
            $d = str_replace("#fio#", $fio, $req['description']);
            \Mail::send('emails.description', [
                    'description' => $d
                ],
                function($message) use ($email, $title) {
                    $message->to($email)->subject($title);
                }
            );
        }

        print_r($users->pluck('email'));

        return response()->json([
            'message '=> 'Item created successfully',
            'item' => $item
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
        
        $item = Notification::find($id);
        $item->update($req);
        
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
        
        $item = Notification::find($id);
        $item->delete($id);
        return response()->json([
            'message '=> 'Item deleted successfully',
        ]);
    }
}
