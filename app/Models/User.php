<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        //'name',
        'email',
        'password',
        'lastname_ru',
        'lastname_en',
        'firstname_ru',
        'firstname_en',
        'middlename_ru',
        'middlename_en',
        'gender',
        'dob',
        'phone',
        'phones',
        'emails',
        'notification_type',
        'employee_place',
        'employee_education',
        'parent_passport',
        'parent_address_register',
        'parent_address_living',
        'parent_address_postal',
        'parent_timezone',
        'parent_snils',
        'parent_inn',
        'student_zoom',
        'student_year_addmission',
        'student_teacher_id',
        'student_profile_id',
        'student_pension_id',
        'student_address_campus',
        'student_address_register',
        'student_address_living',
        'student_address_additional',
        'student_number_pass',
        'student_number_food',
        'student_number_table',
        'student_number_locker_academic',
        'student_number_locker_wardrobe',
        'student_number_locker_art',
        'enrollee_crm_lead_id',
        'enrollee_country_id',
        'enrollee_country_other',
        'enrollee_region_id',
        'enrollee_region_other',
        'enrollee_city_id',
        'enrollee_city_other',
        'enrollee_school_current',
        'enrollee_class_addmission',
        'enrollee_address_register',
        'enrollee_vk',
        'enrollee_profile_id',
        'enrollee_lesson_first_id',
        'enrollee_lesson_second_id',
        'enrollee_lesson_third_id',
        'enrollee_direction_id',
        'enrollee_agent_fio',
        'enrollee_agent_relationship_id',
        'enrollee_agent_phone',
        'enrollee_agent_email',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'media',
        'password',
        'remember_token',
        'created_at',
        'updated_at',
        'deleted_at',
        'token',
        'token_date',
        'is_first',
        'is_forgot_password',
    ];

    protected $appends = [
        'image',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phones' => 'array',
        'emails' => 'array',
        'employee_education' => 'array',
        'parent_timezone' => 'integer',
        'student_year_addmission' => 'integer',
        'enrollee_class_addmission' => 'integer',
        'notification_type' => 'integer',
    ];


    public function getImageAttribute() {
        $r = array();
        $media = $this->getMedia('image');
        if (($media != null) && (count($media) != 0)) {
            $media = $media[0];
            $r['thumbnail'] = $media->getFullUrl('thumbnail');
            $r['middle'] = $media->getFullUrl('middle');
        } else {
            $r['thumbnail'] = null;
            $r['middle'] = null;
        }
        return $r;
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('image')
            ->singleFile();
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('middle')
            ->width(300)
            ->height(300)
            ->performOnCollections('image');

        $this->addMediaConversion('thumbnail')
            ->width(100)
            ->height(100)
            ->performOnCollections('image');
    }

    public function portals()
    {
        return $this->belongsToMany(
            Portal::class,
            'portals_users',
            'user_id',
            'portal_id'
        );
    }

    public function proles()
    {
        return $this->belongsToMany(
            Prole::class,
            'proles_users',
            'user_id',
            'prole_id'
        );
    }

    public function ppermissions()
    {
        return $this->belongsToMany(
            Ppermission::class,
            'ppermissions_users',
            'user_id',
            'ppermission_id'
        );
    }

    public function departments_positions_users() {
        return $this->hasMany(DepartmentPositionUser::class, 'user_id');
    }

    public function employees_students() {
        return $this->hasMany(EmployeeStudent::class, 'student_id');
    }

    public function parents_students() {
        return $this->hasMany(ParentStudent::class, 'parent_id');
    }

    public function teacher() {
        return $this->belongsTo(User::class, 'student_teacher_id');
    }

    public function fio($lang) {
        if ($lang == 'ru') {
            return $this->lastname_ru . " " . $this->firstname_ru . " " . $this->middlename_ru;
        } else if ($lang == 'en') {
            return $this->lastname_en . " " . $this->firstname_en . " " . $this->middlename_en;
        }
        return null;
    }

    public function etokens() {
        return $this->hasMany(EtokenUser::class, 'user_id');
    }
}
