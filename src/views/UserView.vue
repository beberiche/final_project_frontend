<template>
	<div class="userView">
		<user-detail v-if="this.$store.state.user.id"></user-detail>
		<user-login v-else></user-login>
	</div>
</template>

<script>
import UserLogin from "@/components/user/UserLogin.vue";
import UserDetail from "@/components/user/UserDetail.vue";
export default {
	components: { UserLogin, UserDetail },
};
</script>

<style scoped>
.userView {
	height: 80vh;
	width: 100%;
}
</style>