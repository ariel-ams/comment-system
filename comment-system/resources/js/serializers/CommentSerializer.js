import Comment from '@/model/Comment'

class CommentSerializer{
    static deSerialize(data){
        let comment = new Comment(data.username, data.comment_text);
        comment.parent_id = data.parent_id;
        comment.nesting_level = data.nesting_level;
        comment.id = data.id;

        return comment;
    }
}

export default CommentSerializer;