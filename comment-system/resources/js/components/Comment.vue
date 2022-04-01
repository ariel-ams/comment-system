<template>
    <div>
        <span>{{ comment.username }}</span>
        <br />
        <p>{{ comment.comment_text }}</p>
        <hr />
        <p v-if="comment.children_count">{{ comment.children_count }}</p>
        <OpenCommentButton @reply-button-clicked="showReplyForm" :comment="comment"></OpenCommentButton>
    </div>
</template>

<script>
import Comment from "@/model/Comment";
import { mapActions } from 'vuex';

export default {
    props: {
        comment: {
            type: Comment,
            default: null,
        },
    },
    components:{
        OpenCommentButton: () => import('@/components/OpenCommentButton'),
    },
    methods:{
        ...mapActions('comments', [
            'setCurrentComment'
        ]),
        showReplyForm(){
            this.setCurrentComment(this.comment);
            this.$router.push({
                path: `/comment/${this.comment.id}`
            })
        },
    }
};
</script>

<style></style>
