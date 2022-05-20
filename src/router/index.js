import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";

import UserDetail from "../components/user/UserDetail.vue";
import followUserDetail from "../components/user/followUserDetail.vue";
import UserUpdate from "../components/user/UserUpdate.vue";
import UserLogin from "../components/user/UserLogin.vue";
import UserSignUp from "../components/user/UserSignUp.vue";

import VideoDetail from "../components/video/VideoDetail";
import CommentDetail from "../components/comment/CommentDetail";

import store from "../store";

/** 같은 페이지에서 같은 페이지로 $router.push 한 오률를 처리함 **/
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(() => {
    return window.location.reload();
  });
};

Vue.use(VueRouter);

const checkLogin = () => (from, to, next) => {
  if (store.state.isLogined) {
    next();
  } else {
    if (confirm("로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?")) {
      next(`/user/login?call=${from.fullPath}`);
    }
  }
};

const routes = [
  // {
  //   path: "/",
  //   name: "App",
  //   component: App,
  // },
  {
    path: "/",
    name: "video",
    component: HomeView,
  },
  {
    path: "/videoDetail/:id",
    name: "videoDetail",
    component: VideoDetail,
    beforeEnter: checkLogin(),
  },
  {
    path: "/commentDetail/:id",
    name: "commentDetail",
    component: CommentDetail,
    // beforeEnter: checkLogin(),
  },
  {
    path: "/user",
    name: "user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserView,
    children: [
      {
        path: "update",
        name: "userupdate",
        component: UserUpdate,
      },
      {
        path: "login",
        name: "userlogin",
        component: UserLogin,
      },
      {
        path: "signup",
        name: "signup",
        component: UserSignUp,
      },
      {
        path: ":id",
        name: "userdetail",
        component: UserDetail,
      },
    ],
  },
  {
    path: "/follow/:id",
    component: followUserDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
