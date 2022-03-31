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
            'addSerializedComment'
        ]),
        async saveComment(){
            let response = await commentService.saveComment(this.createNewComponent());

            this.addSerializedComment(response.data);

            this.emitClose();
        },
        createRootComment(){
            return new Comment(this.username, this.comment_text);
        },
        createChildComment(){
            return new Comment(this.username, this.comment_text, this.parent.id);
        },
        createNewComponent(){
            if(this.nested){
                return this.createChildComment();
            }

            return this.createRootComment();
        },
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