import {
  fetchlogin,
  fetchlikes,
  fetchfollows,
  fetchfollowuser,
  fetchfollowlikes,
  fetchupdatepassword,
  fetchdeleteuser,
  fetchsignupuser,
} from "../api/backend.js";
import store from "./index.js";

export default {
  async FETCH_LOGIN({ commit }, { user, call }) {
    try {
      console.log(user);
      const { data } = await fetchlogin(user);
      commit("SET_TOKEN", { data, call });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_LIKES({ commit }, userId) {
    try {
      const { data } = await fetchlikes(userId);
      commit("SET_LIKES", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_FOLLOWS({ commit }, userId) {
    try {
      const { data } = await fetchfollows(userId);
      commit("SET_FOLLOWS", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_FOLLOW_USER({ commit }, userId) {
    try {
      const { data } = await fetchfollowuser(userId);
      commit("SET_FOLLOW_USER", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_FOLLOW_LIKES({ commit }, userId) {
    try {
      const { data } = await fetchfollowlikes(userId);
      commit("SET_FOLLOW_LIKES", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_UPDATE_PASSWORD({ commit }, userData) {
    try {
      await fetchupdatepassword(userData);
      commit("DELETE_TOKEN");
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_DELETE_USER({ commit }, userId) {
    try {
      const { data } = await fetchdeleteuser(userId);
      commit("DELETE_USER", data);
      alert("회원정보가 성공적으로 삭제되셨습니다.");
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_SIGN_UP_USER(_, user) {
    try {
      await fetchsignupuser(user);
      if (confirm("회원정보가 성공적으로 등록되었습니다.\n 로그인 하시겠습니까?")) {
        const userData = {
          user,
          call: "",
        };
        store.dispatch("FETCH_LOGIN", userData);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
