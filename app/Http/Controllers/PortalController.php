<?php

namespace App\Http\Controllers;

use App\Models\Portal;
use App\Models\PortalUser;
use Illuminate\Http\Request;

use App\Helpers\Utilities;

class PortalController extends Controller
{
    public function listAll(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Portal::with(['proles', 'proles.ppermissions'])->get();
        return response()->json($items);
    }

    public function list(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Portal::paginate(2);
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

        $item = Portal::with(['roles'])->find($id);
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
        $req['category_id'] = Utilities::getNullInteger($req['category_id']);
        $req['is_bookmark'] = Utilities::getBoolean($req['is_bookmark']);
        $key = null;
        while(true) {
            $key = Utilities::generateRandomString();
            $c = Portal::where('elk_api_key', '=', $key)->count();
            if ($c == 0) {
                break;
            }
        }
        $req['elk_api_key'] = $key;
        $item = Portal::create($req);

        if ($request->hasFile('image')) {
            $item->addMediaFromRequest('image')->toMediaCollection('image');
        }

        $req['roles'] = Utilities::getJsonIdsFromString($req['roles']);
        $item->roles()->attach($req['roles']);

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
        $req['category_id'] = Utilities::getNullInteger($req['category_id']);
        $req['is_bookmark'] = Utilities::getBoolean($req['is_bookmark']);
        
        $item = Portal::find($id);
        $item->update($req);
        
        if ($request->hasFile('image')) {
            $item->addMediaFromRequest('image')->toMediaCollection('image');
        }

        $req['roles'] = Utilities::getJsonIdsFromString($req['roles']);
        $item->roles()->sync($req['roles']);

        return response()->json([
            'message '=> 'Item updated successfully',
            'item' => $item,
        ]);
    }


    public function refreshApiKey(Request $request, int $id)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $item = Portal::find($id);
        $key = null;
        while(true) {
            $key = Utilities::generateRandomString();
            $c = Portal::where('elk_api_key', '=', $key)->count();
            if ($c == 0) {
                break;
            }
        }
        $item->update(array('elk_api_key' => $key));

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
        
        $item = Portal::find($id);
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
        
        $item = Portal::find($id);
        $item->clearMediaCollection('image');
        return response()->json([
            'message '=> 'image deleted successfully',
        ]);
    }

    public function changeIsBookmark(Request $request)
    {
        $user = $request->user();
        $item = PortalUser::find($request->id);
        if ($user->id != $item->user_id) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        $item->is_bookmark = Utilities::getBoolean($request->is_bookmark);
        $item->update();
        return response()->json([
            'message '=> 'image deleted successfully',
        ]);
    }
    
}
