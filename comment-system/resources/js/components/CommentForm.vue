<template>
  <div class="d-flex flex-column">
      <div class="w-100 mb-1">
        <input v-model="storeUsername" name="username" 
        placeholder="Username"
        class="form-control">
      </div>
      <div class="w-100">
        <textarea v-model="comment_text" name="comment_text" 
            placeholder="Add a comment"
            class="form-control" />
      </div>
      <div class="mt-2 ml-auto">
            <button v-if="nested" class="border border-grey-darker text-grey-darker hover:bg-grey-dark hover:text-white py-1 px-4 rounded tracking-wide ml-1"
            @click="emitClose">Cancel</button>

            <button  class="border border-blue bg-blue text-white hover:bg-blue-dark py-1 px-4 rounded tracking-wide mr-1"
            :disabled="invalidComment" @click="saveComment">Comment</button>
      </div>
  </div>
</template>

<script>
import commentService from '@/services/commentService';
import Comment from '@/model/Comment'
import { mapActions, mapState } from 'vuex';

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
            // username: '',
            comment_text: ''
        }
    },    
    methods:{
        ...mapActions('comments', [
            'addSerializedComment',
            'updateCurrentCommentChildCount',
            'updateUsername'
        ]),
        async saveComment(){
            let response = await commentService.saveComment(this.createNewComponent());

            this.addSerializedComment(response.data);
            this.updateCurrentCommentChildCount();

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
        ...mapState('comments', ['username']),
        storeUsername: {
            get(){
                return this.username;
            },
            set(value){
                this.updateUsername(value);
            }
        },
        invalidComment(){
            return !this.username || !this.comment_text;
        }
    }
}
</script>

<style>

</style>