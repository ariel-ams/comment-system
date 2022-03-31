<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'username',
        'comment_text',
        'nesting_level',
        'parent_id'
    ];

    public function children(){
        return $this->hasMany('App\Comment', 'parent_id');
    }
}
