import commentService from '@/services/commentService';
import CommentSerializer from '@/serializers/CommentSerializer';
import Comment from '@/model/Comment';

const blogComment = () => {
    return new Comment('original-poster', 'This is my first post.')  
}

export const comments = {
    namespaced: true,
    state: {
        comments: []
        blog: blogComment()
    },
    mutations: {
        addComment(state, comment){
            let oldComments = state.comments;
            oldComments.push(comment);
            state.comments = oldComments;
        },
        setComments(state, comments){
            state.comments = comments;
        }
    },
    actions: {
        addSerializedComment({commit}, comment){
            commit('addComment', CommentSerializer.deSerialize(comment))
        },
        async loadComments({commit}){
            let response = await commentService.loadComments();

            commit('setComments', response.data.comments.map(
                c => CommentSerializer.deSerialize(c)
            ));
        },
        async loadChildren({commit}, comment_id){
            let response = await commentService.loadChildren(comment_id);

            commit('setComments', response.data.comments.map(
                c => CommentSerializer.deSerialize(c)
            ));
        },
        }
    },
    getters: { 
        getComments(state){
            return state.comments;
        getBlog(state){
            return state.blog;
        }
    }
};