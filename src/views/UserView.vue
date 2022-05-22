<template>
	<div class="userView">
		<router-view />
	</div>
</template>

<script>
// import UserLogin from "@/components/user/UserLogin.vue";
// import UserDetail from "@/components/user/UserDetail.vue";

export default {
	// components: { UserLogin, UserDetail },
};
</script>

<style scoped>
.userView {
	min-width: 20vw;
	max-width: 1000px;
	min-height: 400px;
	height: 70vh;
}
</style>