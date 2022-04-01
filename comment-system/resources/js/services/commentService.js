export default {
    saveComment(comment){
        return window.axios.post("comment/new", comment)
    },
    async loadComments(){
        return await window.axios.post("comment/root");
    },
    async loadChildren(comment_id){
        return await window.axios.post(`/comment/${comment_id}/children`);
    }
    ,
    async loadCommentWithChildren(comment_id){
        return await window.axios.post(`/comment/${comment_id}/with-children`);
    }
}