<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function listAll(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Status::get();
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
        
        $items = Status::paginate(2);

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

        $item = Status::find($id);
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
        $item = Status::create($req);
        
        return response()->json([
            'message' => 'Item created successfully',
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
        
        $item = Status::find($id);
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
        
        $item = Status::find($id);
        $item->delete($id);
        return response()->json([
            'message '=> 'Item deleted successfully',
        ]);
    }
}

