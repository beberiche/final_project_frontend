import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
import router from "@/router";
export default new Vuex.Store({
  state: {
    videos: [],
    video: {},
    comments: [],
    subcomments: {},
  },
  getters: {},
  mutations: {
    setvideos(state, payload) {
      state.videos = payload;
    },
    setcomments(state, payload) {
      state.comments = payload;
    },
    setvideo(state, payload) {
      state.video = payload;
    },
    CREATCOMMENT(state, payload) {
      state.comments.push(payload);
      router.push(`/detail/${payload.YoutubeId}`);
    },
    
  },
  actions: {
    UadateComment({ commit }, payload) {
      axios({
        url: `http://localhost:9999/api/comment/`,
        method: "PUT",
        data: payload,
      }).then(() => {
        commit;
        router.push(`/detail/${payload.youtubeId}`);
      });
    },
    DeleteComment({ commit }, payload1) {
      axios({
        url: `http://localhost:9999/api/comment/${payload1[0]}`,
        method: "DELETE",
      })
        .then(() => {
          commit;
          router.push(`/detail/${payload1[1]}`);
        })
        .catch(() => {});
    },
    getVideo({ commit }, payload) {
      axios({
        url: `http://localhost:9999/api/video/${payload}`,
        method: "GET",
      })
        .then((res) => {
          commit("setvideo", res.data);
        })
        .catch(() => {});
    },
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
    getCommentList({ commit }, payload) {
      axios({
        url: `http://localhost:9999/api/comment/${payload}`,
        method: "GET",
      })
        .then((res) => {
          commit("setcomments", res.data);
        })
        .catch((res) => {
          console.log(res);
        });
    },
    createComment({ commit }, newcomment) {
      axios({
        url: "http://localhost:9999/api/comment/",
        method: "POST",
        params: newcomment,
      })
        .then(() => {
          console.log(newcomment);
          commit("CREATCOMMENT", newcomment);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
  },
  modules: {},
});
