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
	height: 80vh;
	min-width: 50vw;
	background-color: #f9f9f9;
}
</style>