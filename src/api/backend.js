import { createApi } from "@/api";

const axios = createApi();

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
    return axios({
      url: `http://localhost:9999/api/subcomment/${payload[1]}`,
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createsubcomment(subCommentData) {
  try {
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
    return axios({
      url: `http://localhost:9999/api/comment/${payload[0]}`,
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getvideo(youtubeId) {
  try {
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
    return axios({
      url: `http://localhost:9999/api/follow/${followData.userId}/${followData.followId}`,
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}
