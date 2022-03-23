<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Spatie\Permission\Models\Role;



class Prole extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'description_ru',
        'description_en',
        'portal_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
        'pivot',
    ];

    public function portal() {
        return $this->belongsTo(Portal::class, 'portal_id');
    }

    public function ppermissions() {
        return $this->hasMany(Ppermission::class, 'prole_id');
    }

    public function roles()
    {
        return $this->belongsToMany(
            Role::class,
            'prole_roles',
            'prole_id',
            'role_id'
        );
    }
}
