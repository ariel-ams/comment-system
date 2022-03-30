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
        }
    },
    actions: {
        addComment({commit}, comment){
            commit('addComment', comment)
        }
    },
    getters: { 
        getComments(state){
            return state.comments;
        }
    }
};