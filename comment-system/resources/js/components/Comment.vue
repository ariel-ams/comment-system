<template>
    <div class="bg-white rounded shadow-sm p-8 mb-4">
        <span>{{ comment.username }}</span>
        <br />
        <div class="flex justify-between mb-1">
            <p class="text-grey-darkest leading-normal text-lg">{{ comment.comment_text }}</p>
        </div>
        <hr />
        <p v-if="comment.children_count">{{ comment.children_count }}</p>
        <div  class="mt-3">
            <OpenCommentButton @reply-button-clicked="showReplyForm" :comment="comment"></OpenCommentButton>
        </div>
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

<style>
.bg-blue {
    background-color: cornflowerblue;
}
</style>
