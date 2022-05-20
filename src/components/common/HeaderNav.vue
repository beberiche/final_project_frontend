<template>
	<nav>
		<router-link to="/video">비디오</router-link>
		<router-link
			v-if="this.$store.state.isLogined"
			:to="`/user/${this.$store.state.user.id}`"
			>사용자 정보</router-link
		>
		<router-link to="/user/login" v-else>로그인</router-link>
	</nav>
</template>

<script>
export default {};
</script>

<style>
</style>