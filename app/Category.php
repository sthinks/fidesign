<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
    use Translatable;
    protected $translatable = ['title', 'content'];
    public function projects(){

        return $this->hasMany(Project::class);
        }
}
