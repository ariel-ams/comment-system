<template>
  <div>
      <div>
          <label for="username">
              username: <input v-model="username" class="form-control">
          </label>
      </div>
      <div>
          <label for="username">
              comment: <textarea v-model="comment_text" class="form-control" />
          </label>
      </div>
      <div>
            <button :disabled="invalidComment" @click="saveComment">Comment</button>
      </div>
  </div>
</template>

<script>
import commentService from '@/services/commentService';
import Comment from '@/model/Comment'

export default {
    data(){
        return {
            username: '',
            comment_text: ''
        }
    },
    methods:{
        saveComment(){
            commentService.saveComment(new Comment(this.username, this.comment_text))
                .then(response => {
                    console.log(response.data)
                });
        }
    },
    computed: {
        invalidComment(){
            return !this.username || !this.comment_text;
        }
    }
}
</script>

<style>

</style>