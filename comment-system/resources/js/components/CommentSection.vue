<template>
    <div>
        <template v-if="atLeastOneCommentExist">
            <template v-for="(comment, i) in getComments">
                <Comment :comment="comment" :key="i" ></Comment>
            </template>
        </template>
        <template v-else>
            <CommentForm></CommentForm>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components: {
        Comment: () => import('@/components/Comment'),
        CommentForm: () => import('@/components/CommentForm'),
    },
    computed:{
        ...mapGetters('comments',[
            'getComments'
        ]),
        atLeastOneCommentExist(){
            return this.getComments.length > 0
        }
    }
};
</script>

<style></style>
