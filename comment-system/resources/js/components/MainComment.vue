<template>
    <div class="d-flex flex-row p-3 main-post">
        <div class="w-100">
            <p class="h4 mb-2">
                {{ currentComment.comment_text }}
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center w-100">
                    <img
                        src="/img/user.png"
                        width="20"
                        height="20"
                        class="rounded-circle mr-1"
                    />
                    <span class="mr-2">{{ currentComment.username }}</span>
                    <span class="ml-auto">
                        <i class="fa fa-comments mr-2"> </i
                        >{{ currentComment.children_count }}</span
                    >
                </div>
            </div>
            <div class="d-flex flex-row user-feed justify-content-start">
                <ReplyButton :comment="currentComment"></ReplyButton>
            </div>
        </div>
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

<style>
.main-post {
    background-color: #fff;
}
</style>
