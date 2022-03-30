<template>
    <div>
        <span>{{ comment.username }}</span>
        <br />
        <p>{{ comment.comment_text }}</p>
        <hr />
    </div>
</template>

<script>
import Comment from "@/model/Comment";

export default {
    props: {
        comment: {
            type: Comment,
            required: true,
        },
    },
};
</script>

<style></style>
