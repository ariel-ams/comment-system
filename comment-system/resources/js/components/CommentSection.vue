<template>
    <div>
        <CommentForm></CommentForm>
        <template v-if="atLeastOneCommentExist">
            <template v-for="(comment, i) in getComments">
                <Comment :comment="comment" :key="i" ></Comment>
            </template>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Comment: () => import('@/components/Comment'),
        CommentForm: () => import('@/components/CommentForm'),
    },
    created(){
        this.loadComments();
    },
    computed:{
        ...mapGetters('comments',[
            'getComments'
        ]),
        atLeastOneCommentExist(){
            return this.getComments.length > 0
        }
    },
    methods:{
        ...mapActions('comments', [
            'loadComments'
        ])
    }
};
</script>

<style></style>
