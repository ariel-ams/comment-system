<template>
    <button class="border border-blue bg-blue text-white hover:bg-blue-dark py-2 px-4 rounded tracking-wide mr-1"
    @click="showReplyForm" v-if="showReplayButton" >Reply</button>
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