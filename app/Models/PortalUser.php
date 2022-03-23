<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PortalUser extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "portals_users";

    protected $fillable = [
        'portal_id',
        'user_id',
        'is_bookmark',
    ];

    protected $cast  = [
        'is_bookmark' => 'boolean',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function portal() {
        return $this->belongsTo(Portal::class, 'portal_id');
    }
}
