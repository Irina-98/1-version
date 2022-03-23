<?php

namespace App\Http\Controllers;

use App\Models\Prole;
use App\Models\Portal;
use Illuminate\Http\Request;

use App\Helpers\Utilities;

class ProleController extends Controller
{
    public function list(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Prole::with(['portal'])->paginate(2);
        return response()->json($items);
    }

    public function listByPortal(Request $request, int $id)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Prole::where('portal_id', '=', $id)->get();
        return response()->json($items);
    }

    public function listByElkApiKey(Request $request)
    {
        $req = $request->post();
        if (!isset($req['elk_api_key'])) {
            return response()->json(['success' => false]);
        }

        $key = $req['elk_api_key'];
        if (!is_string($key) || (strlen($key) != 128)) {
            return response()->json(['success' => false]);
        }

        $portal = Portal::where('elk_api_key', '=', $key)->first();
        if ($portal == null) {
            return response()->json(['success' => false]);
        }
        $items = Prole::with('ppermissions')->where('portal_id', '=', $portal->id)->get();
        return response()->json(['success' => true, 'proles' => $items]);
    }

    

    public function get(Request $request, int $id)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }

        $item = Prole::with(['roles'])->find($id);
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
        $item = Prole::create($req);

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
        
        $item = Prole::find($id);
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
        
        $item = Prole::find($id);
        $item->delete($id);
        return response()->json([
            'message '=> 'Item deleted successfully',
        ]);
    }
}
