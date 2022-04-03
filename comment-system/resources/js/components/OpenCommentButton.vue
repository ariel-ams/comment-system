<template>
    <!-- <button class="border border-blue bg-blue text-white hover:bg-blue-dark py-2 px-4 rounded tracking-wide mr-1"
    @click="showReplyForm" v-if="showReplayButton" >Reply</button> -->
    <span class="ml-3 reply-comment" @click="showReplyForm" v-if="showReplayButton"><i class="fa fa-comments-o mr-2"></i>Reply</span>
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
.reply-comment{
    cursor: pointer;
}

.reply-comment:hover, .reply-comment:active{
    color:cornflowerblue;
}
</style>