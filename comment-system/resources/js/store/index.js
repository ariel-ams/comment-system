import { comments } from '@/store/comments';
import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store({
    modules: {
        comments,
    }
});
