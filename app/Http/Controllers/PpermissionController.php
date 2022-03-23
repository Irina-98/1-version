<?php

namespace App\Http\Controllers;

use App\Models\Ppermission;
use Illuminate\Http\Request;

use App\Helpers\Utilities;

class PpermissionController extends Controller
{
    public function list(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Ppermission::with(['prole'])->paginate(2);
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

        $item = Ppermission::with(['prole', 'roles'])->find($id);
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
        $item = Ppermission::create($req);

        if (isset($req['roles'])) {
            //$req['roles'] = Utilities::getJsonIdsFromString($req['roles']);
            $item->roles()->attach($req['roles']);
        }

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
        
        $item = Ppermission::find($id);
        $item->update($req);

        if (isset($req['roles'])) {
            //$req['roles'] = Utilities::getJsonIdsFromString($req['roles']);
            $item->roles()->sync($req['roles']);
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
        
        $item = Ppermission::find($id);
        $item->delete($id);
        return response()->json([
            'message '=> 'Item deleted successfully',
        ]);
    }
}
