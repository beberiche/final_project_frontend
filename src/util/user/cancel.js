import router from "@/router";
import store from "@/store";

export function userCancel() {
  return router.push(`/user/${store.state.user.id}`);
}
