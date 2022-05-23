import router from "../router";
import { createApi } from "@/api";

const axios = createApi();

export default {
  // USER ///////////////////////
  ///////////////////////////////
  ///////////////////////////////
  SET_TOKEN(state, { data, call }) {
    console.log(data);
    console.log(call);
    if (data.message === "fail") {
      alert("입력이 잘못 입력 되었습니다.");
    } else {
      sessionStorage.setItem("auth-token", data["auth-token"]);
      state.user.name = data.userData.name;
      state.user.age = data.userData.age;
      state.user.id = data.userData.id;
      state.isLogined = true;
      axios.defaults.headers["auth-token"] = data["auth-token"];
      if (call) {
        router.push(call);
      } else {
        router.push(`/user/${state.user.id}`);
      }
    }
  },
  DELETE_TOKEN(state) {
    state.user.name = "";
    state.user.age = "";
    state.user.id = "";
    state.isLogined = false;
    axios.defaults.headers["auth-token"] = "";
    router.push("/user/login");
  },
  SET_LIKES_VIDEO(state, data) {
    state.user.likes = data;
  },
  SET_FOLLOW_LIKES_VIDEO(state, data) {
    state.followUser.likes = data;
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
    state.followUser.likes = data;
  },
  DELETE_USER(state) {
    state.user.name = "";
    state.user.age = "";
    state.user.id = "";
    state.isLogined = false;
    axios.defaults.headers["auth-token"] = "";
    router.push("/");
  },
  INSERT_LIKE(state, data) {
    state.user.likes.push(data);
  },

  DELETE_LIKE(state, data) {
    state.user.likes.forEach((item, i) => {
      if (item.youtubeId === data.youtubeId) {
        state.user.likes.splice(i, 1);
      }
    });
  },

  // INSERT_LIKE(state, data) {
  //   state.likes.push(data);
  // },

  // VIDEO ///////////////////////
  ///////////////////////////////
  ///////////////////////////////

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
    //router.push(`/videoDetail/${payload.youtubeId}`);
  },
  GETCOMMENT(state, payload) {
    state.comment = payload;
  },
  GETSUBCOMMENTS(state, payload) {
    state.subcomments = payload;
  },
  CREATEFOLLOW(state, payload) {
    state.user.follows.push(payload);
  },
  DELETEFOLLOW(state, payload) {
    state.user.follows.pop(payload);
  },
  CREATESUBCOMMENT(state, payload) {
    state.subcomments.push(payload);
  },
};
