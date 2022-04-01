<template>
    <div>
        <span>{{ currentComment.username }}</span>
        <br />
        <p>{{ currentComment.comment_text }}</p>
        <hr />
        <p v-if="currentComment.children_count">{{ currentComment.children_count }}</p>
        <button @click="showReplyForm" v-if="currentComment.canHaveChild()" >Reply</button>
        <template v-if="replayFormVisible">
            <CommentForm @close="hideReplyForm" nested :parent="currentComment"></CommentForm>            
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    components:{
        CommentForm: () => import('@/components/CommentForm'),
    },
    data(){
        return {
            replayFormVisible: false
        }
    },
    computed:{
        ...mapGetters('comments',[
            'currentComment'
        ])
    },
    methods:{
        ...mapActions('comments', [
            'loadChildren'
        ]),
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
