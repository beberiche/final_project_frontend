import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const REST_API = "http://localhost:9999/api/";

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isLogined: false,
    user: {
      id: "",
      name: "",
      age: "",
      likes: {},
      follows: {},
    },
    followUser: {
      id: "",
      name: "",
      age: "",
      likes: {},
    },
  },
  getters: {},
  mutations: {
    SET_TOKEN(state, data) {
      if (data.message === "fail") {
        alert("입력이 잘못 입력 되었습니다.");
      } else {
        sessionStorage.setItem("auth-token", data["auth-token"]);
        state.user.name = data.userData.name;
        state.user.age = data.userData.age;
        state.user.id = data.userData.id;
        state.isLogined = true;
        router.push(`/user/${state.user.id}`);
      }
    },
    SET_LIKES(state, data) {
      state.user.likes = data;
    },
    SET_FOLLOWS(state, data) {
      state.user.follows = data;
    },
    SET_FOLLOW_USER(state, data) {
      state.followUser.name = data.user.name;
      state.followUser.id = data.user.id;
      state.followUser.age = data.user.age;
    },
    SET_FOLLOW_LIKES(state, data) {
      console.log(data);
      state.followUser.likes = data;
    },
  },
  actions: {
    FETCH_LOGIN({ commit }, userData) {
      const REST_API_LOGIN = REST_API + "/login";
      axios
        .post(REST_API_LOGIN, userData)
        .then(({ data }) => commit("SET_TOKEN", data))
        .catch((e) => {
          console.log(e);
          alert("서버 에러");
        });
    },
    FETCH_LIKES({ commit }, userId) {
      const REST_API_LIKE = REST_API + `/like/${userId}`;
      axios
        .get(REST_API_LIKE)
        .then(({ data }) => commit("SET_LIKES", data))
        .catch((e) => console.log(e));
    },
    FETCH_FOLLOWS({ commit }, userId) {
      const REST_API_FOLLOW = REST_API + `/follow/${userId}`;
      axios
        .get(REST_API_FOLLOW)
        .then(({ data }) => commit("SET_FOLLOWS", data))
        .catch((e) => console.log(e));
    },
    FETCH_FOLLOW_USER({ commit }, userId) {
      const REST_API_USER = REST_API + `/user/${userId}`;
      axios
        .get(REST_API_USER)
        .then(({ data }) => commit("SET_FOLLOW_USER", data))
        .catch((e) => console.log(e));
    },
    FETCH_FOLLOW_LIKES({ commit }, userId) {
      const REST_API_LIKE = REST_API + `/like/${userId}`;
      axios
        .get(REST_API_LIKE)
        .then(({ data }) => commit("SET_FOLLOW_LIKES", data))
        .catch((e) => console.log(e));
    },
  },
  modules: {},
});
