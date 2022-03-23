<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmployeeStudent extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "employees_students";

    protected $fillable = [
        'employee_id',
        'student_id',
        'type_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
