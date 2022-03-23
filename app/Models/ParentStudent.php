<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ParentStudent extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "parents_students";

    protected $fillable = [
        'parent_id',
        'student_id',
        'relationship_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
