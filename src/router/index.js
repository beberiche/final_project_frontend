import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";

import UserDetail from "../components/user/UserDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/video",
    name: "video",
    component: HomeView,
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
        path: ":id",
        component: UserDetail,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
