<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name_ru',
        'name_en',
        'description_ru',
        'description_en',
        'phone',
        'email',
        'parent_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function parent() {
        return $this->belongsTo(Department::class, 'parent_id');
    }

    public function departments_positions_users() {
        return $this->hasMany(DepartmentPositionUser::class, 'department_id');
    }
}
