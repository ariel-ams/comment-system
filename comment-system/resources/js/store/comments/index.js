import commentService from '@/services/commentService';
import CommentSerializer from '@/serializers/CommentSerializer';
import Comment from '@/model/Comment';

const blogComment = () => {
    return new Comment('original-poster', 'This is my first post.')  
}

export const comments = {
    namespaced: true,
    state: {
        comments: [],
        comment: null,
        blog: blogComment()
    },
    mutations: {
        addComment(state, comment){
            let oldComments = state.comments;
            oldComments.unshift(comment);
            state.comments = oldComments;
        },
        setComments(state, comments){
            state.comments = comments;
        },
        setCurrentComment(state, comment){
            state.comment = comment;
        },
        updateCurrentCommentChildCount(state){
            let oldComment = state.comment;
            oldComment.children_count++;
            state.comment = oldComment;
        },
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
        async loadCommentWithChildren({commit}, comment_id){
            let response = await commentService.loadCommentWithChildren(comment_id);

            commit('setCurrentComment', CommentSerializer.deSerialize(response.data.mainComment));

            commit('setComments', response.data.comments.map(
                c => CommentSerializer.deSerialize(c)
            ));
        },
        setCurrentComment({commit}, comment){
            commit('setCurrentComment', comment);
        },
        updateCurrentCommentChildCount({commit}){
            commit('updateCurrentCommentChildCount');
        }
    },
    getters: { 
        getComments(state){
            return state.comments;
        },
        currentComment(state){
            return state.comment;
        },
        getBlog(state){
            return state.blog;
        }
    }
};