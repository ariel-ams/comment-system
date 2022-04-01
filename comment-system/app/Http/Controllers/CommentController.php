<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Comment;

class CommentController
{
    public function new(CommentRequest $request)
    {
        $parent = Comment::find($request->parent_id);

        if($parent && $parent->nesting_level > 1){
            return response()->with('error', "Comments can't have more than 3 nesting levels.");
        }

        $comment = Comment::create([
            'username' => $request->username,
            'comment_text' => $request->comment_text,
            'nesting_level' => $parent ? $parent->nesting_level + 1 : 0,
            'parent_id' => $parent ? $parent->id : null
        ]);

        return response()->json($comment);
    }

    public function all(){
        $comments = Comment::where('nesting_level', '=', 0)
            ->withCount('children')
            ->orderBy('created_at', 'DESC')
            ->get();
        
        return response()->json([ 'comments' => $comments]);
    }

    public function children(Comment $comment){
        $comments = Comment::where('parent_id', '=', $comment->id)
            ->withCount('children')
            ->orderBy('created_at', 'DESC')
            ->get();
        
        return response()->json([ 'comments' => $comments]);
    }

    public function withChildren(Comment $comment){
        $comments = Comment::where('parent_id', '=', $comment->id)
            ->withCount('children')
            ->orderBy('created_at', 'DESC')
            ->get();
        
        return response()->json([ 'mainComment' => $comment, 'comments' => $comments]);
    }
}
