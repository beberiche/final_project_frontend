// import router from "@/router/index.js";
import {
  fetchlogin,
  fetchlikesvideo,
  fetchfollows,
  fetchfollowuser,
  fetchfollowlikes,
  fetchupdatepassword,
  fetchdeleteuser,
  fetchsignupuser,
  updatesubcomment,
  deletesubcomment,
  createsubcomment,
  getsubcomments,
  getcommentlist,
  getcomment,
  updatecomment,
  deletecomment,
  createcomment,
  getvideo,
  getlist,
  createfollow,
  deletefollow,
  fetchcreatelike,
  fetchdeletelike,
} from "../api/backend.js";
import store from "./index.js";

export default {
  // USER ///////////////////////
  ///////////////////////////////
  ///////////////////////////////
  async FETCH_LOGIN({ commit }, { user, call }) {
    try {
      const { data } = await fetchlogin(user);
      commit("SET_TOKEN", { data, call });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_LIKES_VIDEO({ commit }, userId) {
    try {
      const { data } = await fetchlikesvideo(userId);
      commit("SET_LIKES_VIDEO", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_FOLLOW_LIKES_VIDEO({ commit }, userId) {
    try {
      const { data } = await fetchlikesvideo(userId);
      commit("SET_FOLLOW_LIKES_VIDEO", data);
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

  async FETCH_INSERT_LIKE({ commit }, videoData) {
    try {
      await fetchcreatelike({
        userId: store.state.user.id,
        youtubeId: videoData.youtubeId,
      });
      // const { data } = await this.FETCH_LIKES_VIDEO(likeData.userId);
      commit("INSERT_LIKE", videoData);
      // router.push(`/user/${store.state.user.userId}`);
    } catch (e) {
      console.log(e);
    }
  },

  async FETCH_DELETE_LIKE({ commit }, likeData) {
    try {
      await fetchdeletelike(likeData);
      commit("DELETE_LIKE", likeData);
      // router.push(`/user/${likeData.userId}`);
    } catch (e) {
      console.log(e);
    }
  },

  // VIDEO ///////////////////////
  ///////////////////////////////
  ///////////////////////////////

  async updateSubComment({ commit }, subCommentData) {
    try {
      await updatesubcomment(subCommentData[0]);
      commit("UPDATESUBCOMMENT", subCommentData);
      //router.push(`/commentDetail/${subCommentData.commentNo}`);
    } catch (e) {
      console.log(e);
    }
  },

  async deleteSubComment({ commit }, payload) {
    try {
      await deletesubcomment(payload[0]);
      //router.push(`/commentDetail/${payload[0]}`);
      commit("DELETESUBCOMMENT", payload[1]);
    } catch (e) {
      console.log(e);
    }
  },

  async createSubComment({ commit }, subCommentData) {
    try {
      const { data } = await createsubcomment(subCommentData);
      subCommentData.subNo = data;
      commit("CREATESUBCOMMENT", subCommentData);
      //router.push(`/commentDetail/${subCommentData.commentNo}`);
    } catch (e) {
      console.log(e);
    }
  },

  async getSubComments({ commit }, subCommentId) {
    try {
      const { data } = await getsubcomments(subCommentId);
      commit("GETSUBCOMMENTS", data);
    } catch (e) {
      console.log(e);
    }
  },

  async getComment({ commit }, commentId) {
    try {
      const { data } = await getcomment(commentId);
      commit("GETCOMMENT", data);
    } catch (e) {
      console.log(e);
    }
  },

  async updateComment({ commit }, commentData) {
    try {
      await updatecomment(commentData[0]);
      //router.push(`/videoDetail/${commentData.youtubeId}`);
      commit("UPDATECOMMENT", commentData);
    } catch (e) {
      console.log(e);
    }
  },

  async deleteComment({ commit }, payload) {
    try {
      console.log(payload[0]);
      await deletecomment(payload[0]);
      commit("DELETECOMMENT", payload[1]);
      // router.push(`/videoDetail/${payload[1]}`);
    } catch (e) {
      console.log(e);
    }
  },

  async getVideo({ commit }, youtubeId) {
    try {
      const { data } = await getvideo(youtubeId);
      commit("setvideo", data);
    } catch (e) {
      console.log(e);
    }
  },

  async getList({ commit }, payload) {
    try {
      const { data } = await getlist(payload);
      commit("setvideos", data);
    } catch (e) {
      console.log(e);
    }
  },

  async getCommentList({ commit }, youtubeId) {
    try {
      const { data } = await getcommentlist(youtubeId);
      commit("setcomments", data);
    } catch (e) {
      console.log(e);
    }
  },

  async createComment({ commit }, commentData) {
    try {
      const { data } = await createcomment(commentData);
      commentData.commentNo = data;
      commit("CREATCOMMENT", commentData);
      //router.push(`/videoDetail/${commentData.youtubeId}`);
    } catch (e) {
      console.log(e);
    }
  },

  async createFollow({ commit }, commentData) {
    try {
      await createfollow(commentData);
      commit("CREATEFOLLOW", commentData);
    } catch (e) {
      console.log(e);
    }
  },

  async deleteFollow({ commit }, commentData) {
    try {
      await deletefollow(commentData);
      commit("DELETEFOLLOW", commentData);
    } catch (e) {
      console.log(e);
    }
  },
};
