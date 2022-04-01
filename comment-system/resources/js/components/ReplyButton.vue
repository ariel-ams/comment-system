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
            return !this.replayFormVisible;
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
}
</script>

<style>

</style>