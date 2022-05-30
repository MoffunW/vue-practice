import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {
    POSTS: (state) => {
      return state.posts;
    },
    POST: (state) => (id) => {
      console.log(id);
      return state.posts.find((post) => post.id === +id);
    },
  },
  mutations: {
    ADD_POST: (state, post) => {
      state.posts.push(post);
      console.log(post, "post");
    },
    SET_POST: (state, payload) => {
      console.log(payload, "PAAAAAYLOAD");
      // state.posts = payload;
    },
  },
  actions: {
    SAVE_POST: (context, pl) => {
      console.log(pl, "pl", context, "context");
      context.commit("ADD_POST", pl);
    },
  },
  modules: {},
});
