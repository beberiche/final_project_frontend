import { createApi } from "@/api";

const axios = createApi();

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

export async function fetchlikes(userId) {
  try {
    return axios({
      url: `/like/${userId}`,
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
