class Comment{
    constructor(username, comment_text, parent_id = null, nesting_level = 0){
        this.username = username;
        this.comment_text = comment_text;
        this.parent_id = parent_id;
        this.nesting_level = nesting_level;
    }

    canHaveChild(){
        return this.nesting_level < 2;
    }
}

export default Comment;