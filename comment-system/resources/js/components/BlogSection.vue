<template>
    <div>
        <Blog></Blog>
        <template v-if="atLeastOneCommentExist">
            <template v-for="(comment, i) in getComments">
                <Comment :comment="comment" :key="i" ></Comment>
            </template>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Blog: () => import('@/components/Blog'),
        Comment: () => import('@/components/Comment'),
    },
    created(){
        this.loadComments();
    },
    computed:{
        ...mapGetters('comments',[
            'getComments'
        ]),
        atLeastOneCommentExist(){
            return this.getComments.length > 0
        }
    },
    methods:{
        ...mapActions('comments', [
            'loadComments',
            'loadChildren'
        ]),
    }
};
</script>

<style></style>
