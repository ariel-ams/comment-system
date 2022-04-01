<template>
    <div>
        <button @click="showReplyForm" v-if="showReplayButton" >Reply</button>

        <CommentForm v-if="replayFormVisible" 
            @close="hideReplyForm" nested :parent="comment"></CommentForm>
    </div>
</template>

<script>
import Comment from "@/model/Comment";

export default {
    components:{
        CommentForm: () => import('@/components/CommentForm'),
    },
    props: {
        comment: {
            type: Comment,
            default: null,
        },
    },
    data(){
        return {
            replayFormVisible: false
        }
    },
    computed:{
        showReplayButton(){
            return this.comment.canHaveChild() && !this.replayFormVisible;
        }
    },
    methods:{
        // ...mapActions('comments', [
        //     'setCurrentComment'
        // ]),
        showReplyForm(){
            // this.$emit('reply-button-clicked')
            this.replayFormVisible = true;
        },
        hideReplyForm(){
            this.replayFormVisible = false;
        }
    }
}
</script>

<style>

</style>