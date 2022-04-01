<template>
    <div>
        <span>{{ currentComment.username }}</span>
        <br />
        <p>{{ currentComment.comment_text }}</p>
        <hr />
        <p v-if="currentComment.children_count">{{ currentComment.children_count }}</p>
        <ReplyButton :comment="currentComment"></ReplyButton>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components:{
        ReplyButton: () => import('@/components/ReplyButton'),
    },
    computed:{
        ...mapGetters('comments',[
            'currentComment'
        ])
    }
};
</script>

<style></style>
