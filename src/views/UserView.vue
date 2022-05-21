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
	height: 70vh;
	min-width: 40vw;
	max-width: 50vw;
	background-color: #f9f9f9;
}
</style>