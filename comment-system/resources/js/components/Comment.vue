<template>
    <div class="d-flex flex-row p-3">
        <img
            src="/img/user.png"
            width="40"
            height="40"
            class="rounded-circle mr-3"
        />
        <div class="w-100">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                    <span class="mr-2">{{ comment.username }}</span>
                </div>
            </div>
            <p class="text-justify comment-text mb-0">
                {{ comment.comment_text }}
            </p>
            <div class="d-flex flex-row user-feed justify-content-end">
                    <span v-if="canHaveResponse()"><i class="fa fa-comments mr-2"></i>{{ comment.children_count }}</span>
                    <div class="ml-3">
                        <OpenCommentButton
                            @reply-button-clicked="showReplyForm"
                            :comment="comment"
                        ></OpenCommentButton>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "@/model/Comment";
import { mapActions } from "vuex";

export default {
    props: {
        comment: {
            type: Comment,
            default: null,
        },
    },
    components: {
        OpenCommentButton: () => import("@/components/OpenCommentButton"),
    },
    methods: {
        ...mapActions("comments", ["setCurrentComment"]),
        showReplyForm() {
            this.setCurrentComment(this.comment);
            this.$router.push({
                path: `/comment/${this.comment.id}`,
            });
        },
        canHaveResponse(){
            return this.comment.canHaveChild();
        }
    },
};
</script>

<style>
.bg-blue {
    background-color: #212529;
}

.comment-text {
    font-size: 13px;
    font-weight: large;
}

.user-feed {
    font-size: 14px;
    margin-top: 12px
}
</style>
