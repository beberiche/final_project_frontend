import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { createApi } from "./api";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// export const axios = createApi();

new Vue({
  router,
  store,
  axios: createApi(),
  render: (h) => h(App),
}).$mount("#app");
