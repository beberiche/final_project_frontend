// axios 객체 만들기
import axios from "axios";

function createApi() {
  // console.log(process.env.VUE_APP_API_SERVER);
  return axios.create({
    baseURL: "http://localhost:9999/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { createApi };
