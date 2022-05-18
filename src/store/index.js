import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
//http://localhost:9999/api/video/list
export default new Vuex.Store({
  state: {
    videos: [],
  },
  getters: {},
  mutations: {
    setvideos(state, payload) {
      state.videos = payload;
    },
  },
  actions: {
    getList({ commit }, payload) {
      let params = null;
      if (payload) {
        params = payload;
      }
      axios({
        url: "http://localhost:9999/api/video/list",
        method: "GET",
        params,
      })
        .then((res) => {
          commit("setvideos", res.data);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  modules: {},
});
