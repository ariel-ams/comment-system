import commentService from '@/services/commentService';
import CommentSerializer from '@/serializers/CommentSerializer'

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
        addSerializedComment({commit}, comment){
            commit('addComment', CommentSerializer.deSerialize(comment))
        },
        async loadComments({commit}){
            let response = await commentService.loadComments();

            commit('setComments', response.data.comments.map(
                c => CommentSerializer.deSerialize(c)
            ));
        }
    },
    getters: { 
        getComments(state){
            return state.comments;
        }
    }
};