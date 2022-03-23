<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Spatie\Permission\Models\Role;


class Notification extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
    ];

    protected $hidden = [
        'updated_at',
        'deleted_at',
        'pivot',
    ];

    public function roles()
    {
        return $this->belongsToMany(
            Role::class,
            'notification_roles',
            'notification_id',
            'role_id'
        );
    }

}
