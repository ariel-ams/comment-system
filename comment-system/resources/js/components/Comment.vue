<template>
    <div>
        <span>{{ comment.username }}</span>
        <br />
        <p>{{ comment.comment_text }}</p>
        <hr />
        <p v-if="comment.children_count">{{ comment.children_count }}</p>
        <button @click="showReplyForm" v-if="comment.canHaveChild()" >Reply</button>
        <template v-if="replayFormVisible">
            <CommentForm @close="hideReplyForm" nested :parent="comment"></CommentForm>            
        </template>
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
        CommentForm: () => import('@/components/CommentForm'),
    },
    data(){
        return {
            replayFormVisible: false
        }
    },
    methods:{
        ...mapActions('comments', [
            'setCurrentComment'
        ]),
        showReplyForm(){
            this.setCurrentComment(this.comment);
            this.$router.push({
                path: `comment/${this.comment.id}`
            })
            // this.replayFormVisible = true;
        },
        hideReplyForm(){
            this.replayFormVisible = false;
        }
    }
};
</script>

<style></style>
