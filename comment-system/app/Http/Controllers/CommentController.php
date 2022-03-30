<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Comment;

class CommentController
{
    public function new(CommentRequest $request)
    {
        $comment = Comment::make([
            'username' => $request->username,
            'comment_text' => $request->comment_text
        ]);

        return response()->json($comment);
    }
}
