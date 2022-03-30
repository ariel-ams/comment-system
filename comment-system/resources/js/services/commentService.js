export default {
    saveComment(comment){
        return window.axios.post("comment/new", comment)
    }
}