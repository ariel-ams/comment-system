import commentService from '@/services/commentService';
import Comment from '@/model/Comment'

export const comments = {
    namespaced: true,
    state: {
        comments: []
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
        addComment({commit}, comment){
            commit('addComment', comment)
        },
        async loadComments({commit}){
            let response = await commentService.loadComments();
            console.log(response);

            commit('setComments', response.data.comments.map(
                c => new Comment(c.username, c.comment_text)
            ));
        }
    },
    getters: { 
        getComments(state){
            return state.comments;
        }
    }
};