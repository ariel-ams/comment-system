<template>
    <div>
        <template v-if="currentComment">
            <MainComment :comment="currentComment" ></MainComment>
        </template>
        <div v-if="atLeastOneCommentExist" class="">
            <template v-for="(comment, i) in getComments">
                <Comment :comment="comment" :key="i" ></Comment>
            </template>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Comment: () => import('@/components/Comment'),
        MainComment: () => import('@/components/MainComment'),
    },
    async mounted(){
        if(!this.currentComment){
            await this.loadCommentWithChildren(this.$route.params.id)
        } else {
            await this.loadChildren(this.currentComment.id);
        }
    },
    computed:{
        ...mapGetters('comments',[
            'getComments',
            'currentComment'
        ]),
        atLeastOneCommentExist(){
            return this.getComments.length > 0
        }
    },
    methods:{
        ...mapActions('comments', [
            'loadChildren',
            'loadCommentWithChildren'
        ]),
    }
};
</script>

<style></style>
