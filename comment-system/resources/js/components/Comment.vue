<template>
    <div>
        <span>{{ comment.username }}</span>
        <br />
        <p>{{ comment.comment_text }}</p>
        <hr />
        <button @click="showReplyForm" v-if="canHaveChildComment" >Reply</button>
        <template v-if="replayFormVisible">
            <CommentForm @close="hideReplyForm" nested :parent="comment"></CommentForm>            
        </template>
    </div>
</template>

<script>
import Comment from "@/model/Comment";

export default {
    props: {
        comment: {
            type: Comment,
            required: true,
        },
    },
    components:{
        CommentForm: () => import('@/components/CommentForm'),
    },
    data(){
        return {
            replayFormVisible: false
        }
    },
    computed:{
        canHaveChildComment(){
            return this.comment.nesting_level < 2;
        }
    },
    methods:{
        showReplyForm(){
            this.replayFormVisible = true;
        },
        hideReplyForm(){
            this.replayFormVisible = false;
        }
    }
};
</script>

<style></style>
