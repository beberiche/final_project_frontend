import { createApi } from "@/api";
// import router from "@/router";

const axios = createApi();
function setTokenToHeader() {
  if (localStorage.getItem("access-token")) {
    axios.defaults.headers["access-token"] = localStorage.getItem("access-token");
  }
}
// USER ///////////////////////
////////////////////////////////
///////////////////////////////
export async function fetchlogin(userData) {
  try {
    return axios({
      url: "/login",
      method: "POST",
      data: userData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchlikesvideo(userId) {
  try {
    setTokenToHeader();
    return axios({
      url: `/like/videos/${userId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchfollows(userId) {
  try {
    setTokenToHeader();
    console.log(axios.defaults.headers);
    return axios({
      url: `/follow/${userId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchfollowuser(userId) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `/user/${userId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchfollowlikes(userId) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `/like/${userId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchupdatepassword(userData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `/user/`,
      method: "PUT",
      data: userData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchdeleteuser(userId) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `/user/${userId}`,
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchsignupuser(userData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `/user/`,
      method: "POST",
      data: userData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchcreatelike(likeData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `/like/`,
      method: "POST",
      data: likeData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function fetchdeletelike(likeData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `/like/`,
      method: "DELETE",
      data: likeData,
    });
  } catch (e) {
    console.log(e);
  }
}

// VIDEO ///////////////////////
////////////////////////////////
///////////////////////////////

// export async function fetchinsertlike(youtubeId) {

// }

export async function updatesubcomment(subCommentData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/subcomment/`,
      method: "PUT",
      data: subCommentData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deletesubcomment(payload) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/subcomment/${payload}`,
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createsubcomment(subCommentData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/subcomment/`,
      method: "POST",
      data: subCommentData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getsubcomments(subCommentId) {
  try {
    setTokenToHeader();
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/subcomment/${subCommentId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getcomment(commentId) {
  try {
    setTokenToHeader();
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/comment/detail/${commentId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function updatecomment(commentData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/comment/`,
      method: "PUT",
      data: commentData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deletecomment(payload) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/comment/${payload}`,
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getvideo(youtubeId) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/video/${youtubeId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getlist(payload) {
  let params = null;
  if (payload) {
    params = payload;
  }
  try {
    setTokenToHeader();
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/video/list`,
      method: "GET",
      params,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getcommentlist(youtubeId) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/comment/${youtubeId}`,
      method: "GET",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createcomment(commentData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/comment/`,
      method: "POST",
      data: commentData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createfollow(followData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/follow/`,
      method: "POST",
      data: followData,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deletefollow(followData) {
  try {
    console.log(axios.defaults.headers);
    return axios({
      url: `http://localhost:9999/api/follow/${followData.userId}/${followData.followId}`,
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}
