<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Spatie\Permission\Models\Role;

class Ppermission extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'description_ru',
        'description_en',
        'prole_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
        'pivot',
    ];

    public function prole() {
        return $this->belongsTo(Prole::class, 'prole_id')->with(['portal']);
    }

    public function roles()
    {
        return $this->belongsToMany(
            Role::class,
            'ppermission_roles',
            'ppermission_id',
            'role_id'
        );
    }
}
