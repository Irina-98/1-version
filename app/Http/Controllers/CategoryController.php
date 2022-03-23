<?php

namespace App\Http\Controllers;

use App\Models\Portal;
use App\Models\Category;
use Illuminate\Http\Request;

use App\Helpers\Utilities;

class CategoryController extends Controller
{
    public function listAll(Request $request)
    {
        $user = $request->user();
        if ($user->hasRole(['admin']) !== true) {
            return response()->json([
                'message' => 'Not accepted'
            ], 401);
        }
        
        $items = Category::with(['portals'])->get();
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
        
        $items = Category::paginate(2);
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

        $item = Category::find($id);
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
        $item = Category::create($req);

        if ($request->hasFile('image')) {
            $item->addMediaFromRequest('image')->toMediaCollection('image');
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
        
        $item = Category::find($id);
        $item->update($req);
        
        if ($request->hasFile('image')) {
            $item->addMediaFromRequest('image')->toMediaCollection('image');
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
        
        $item = Category::find($id);
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
        
        $item = Category::find($id);
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
