<template>
    <div>
        <button @click="showReplyForm" v-if="showReplayButton" >Reply</button>
    </div>
</template>

<script>
import Comment from "@/model/Comment";

export default {
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
            return this.comment.canHaveChild();
        }
    },
    methods:{
        showReplyForm(){
            this.$emit('reply-button-clicked')
        },
        hideReplyForm(){
            this.replayFormVisible = false;
        }
    }
}
</script>

<style>

</style>