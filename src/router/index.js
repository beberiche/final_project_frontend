import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";

import UserDetail from "../components/user/UserDetail.vue";
import followUserDetail from "../components/user/followUserDetail.vue";
import UserUpdate from "../components/user/UserUpdate.vue";
import UserLogin from "../components/user/UserLogin.vue";
import UserSignUp from "../components/user/UserSignUp.vue";

import store from "../store";

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
  {
    path: "/video",
    name: "video",
    component: HomeView,
    beforeEnter: checkLogin(),
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
