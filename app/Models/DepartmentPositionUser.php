<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DepartmentPositionUser extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "departments_positions_users";

    protected $fillable = [
        'department_id',
        'position_id',
        'user_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function position() {
        return $this->belongsTo(Position::class, 'position_id');
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function department() {
        return $this->belongsTo(Department::class, 'department_id');
    }
}
