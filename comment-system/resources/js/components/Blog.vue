<template>
    <div class="d-flex flex-row p-3 main-post">
        <div class="w-100">
            <p class="text-justify h3 mb-2">
                {{ comment.comment_text }}
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                    <img
                        src="/img/user.png"
                        width="20"
                        height="20"
                        class="rounded-circle mr-3"
                    />
                    <span class="mr-2">{{ comment.username }}</span>
                    <span class="align-items-end">
                        <i class="fa fa-comments mr-2"> </i
                        >{{ comment.children_count }}</span
                    >
                </div>
            </div>
            <div class="d-flex flex-row user-feed justify-content-start">
                <ReplyButton :comment="comment"></ReplyButton>
            </div>
        </div>
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
    components: {
        ReplyButton: () => import("@/components/ReplyButton"),
    },
};
</script>

<style>
.main-post {
    background-color: #fff;
}
</style>
