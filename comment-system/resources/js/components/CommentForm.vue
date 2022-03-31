<template>
  <div>
      <div>
          <label for="username">
              username: <input v-model="username" name="username" class="form-control">
          </label>
      </div>
      <div>
          <label for="username">
              comment: <textarea v-model="comment_text" name="comment_text" class="form-control" />
          </label>
      </div>
      <div>
            <button :disabled="invalidComment" @click="saveComment">Comment</button>
      </div>
      <div v-if="nested">
            <button @click="emitClose">Cancel</button>
      </div>
  </div>
</template>

<script>
import commentService from '@/services/commentService';
import Comment from '@/model/Comment'
import { mapActions } from 'vuex';

export default {
    props:{
        nested:{
            type: Boolean,
            default: false
        },
        parent:{
            type: Comment,
            default: null
        }
    },
    data(){
        return {
            username: '',
            comment_text: ''
        }
    },    
    methods:{
        ...mapActions('comments', [
            'addComment'
        ]),
        async saveComment(){
            let response = await commentService.saveComment(new Comment(this.username, this.comment_text))

            this.addComment(
                new Comment(response.data.username, response.data.comment_text)
            );
        emitClose(){
            this.comment_text = '';
            this.$emit('close');
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