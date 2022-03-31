export default {
    saveComment(comment){
        return window.axios.post("comment/new", comment)
    },
    async loadComments(){
        return await window.axios.post("comment/all");
    }
}