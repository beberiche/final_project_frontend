import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
import router from "@/router";
export default new Vuex.Store({
  state: {
    videos: [],
    video: {},
    comment: {},
    comments: [],
    subcomments: [],
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
      router.push(`/videoDetail/${payload.youtubeId}`);
    },
    GETCOMMIT(state, payload) {
      state.comment = payload;
    },
    GETSUBCOMMENTS(state, payload) {
      state.subcomments = payload;
    },
  },
  actions: {
    updateSubComment({ commit }, payload) {
      console.log(payload);
      axios({
        url: `http://localhost:9999/api/subcomment/`,
        method: "PUT",
        data: payload,
      }).then(() => {
        commit;
        router.push(`/commentDetail/${payload.commentNo}`);
      });
    },
    deleteSubComment({ commit }, payload) {
      console.log(payload);
      axios({
        url: `http://localhost:9999/api/subcomment/${payload[1]}`,
        method: "DELETE",
      }).then(() => {
        commit;
        router.push(`/commentDetail/${payload[0]}`);
      });
    },
    createSubComment({ commit }, payload) {
      console.log(payload);
      axios({
        url: `http://localhost:9999/api/subcomment/`,
        method: "POST",
        data: payload,
      }).then(() => {
        commit;
        router.push(`/commentDetail/${payload.commentNo}`);
      });
    },
    GetSubComments({ commit }, payload) {
      axios({
        url: `http://localhost:9999/api/subcomment/${payload}`,
        method: "GET",
      }).then((res) => {
        commit("GETSUBCOMMENTS", res.data);
      });
    },
    GetComment({ commit }, payload) {
      axios({
        url: `http://localhost:9999/api/comment/detail/${payload}`,
        method: "GET",
      }).then((res) => {
        commit("GETCOMMIT", res.data);
      });
    },
    UadateComment({ commit }, payload) {
      axios({
        url: `http://localhost:9999/api/comment/`,
        method: "PUT",
        data: payload,
      }).then(() => {
        commit;
        router.push(`/videoDetail/${payload.youtubeId}`);
      });
    },
    DeleteComment({ commit }, payload1) {
      axios({
        url: `http://localhost:9999/api/comment/${payload1[0]}`,
        method: "DELETE",
      })
        .then(() => {
          commit;
          router.push(`/videoDetail/${payload1[1]}`);
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
        url: `http://localhost:9999/api/comment/`,
        method: "POST",
        data: newcomment,
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
