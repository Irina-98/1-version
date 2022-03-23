<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class Category extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, SoftDeletes;

    protected $fillable = [
        'name_ru',
        'name_en',
        'description_ru',
        'description_en',
    ];

    protected $hidden = [
        'media',
        'created_at',
        'updated_at',
        'deleted_at',
        'pivot',
    ];

    protected $appends = [
        'image',
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
    
    public function portals() {
        return $this->hasMany(Portal::class, 'category_id');
    }
}
