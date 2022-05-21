<template>
	<nav>
		<router-link to="/">비디오</router-link>
		<router-link
			v-if="this.$store.state.isLogined"
			:to="`/user/${this.$store.state.user.id}`"
			>사용자 정보</router-link
		>
		<router-link to="/user/login" v-else>로그인</router-link>
		<router-link to="#">러닝</router-link>
	</nav>
</template>

<script>
export default {};
</script>

<style scope>
nav {
	min-width: 250px;

	min-height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: #ffffff;
	margin: 0 30px;
	border: 0.7px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}

nav a {
	font-weight: bold;
	color: #8b9092;
	text-decoration: none;
	padding-left: 20px;
	height: 30px;
	flex-grow: 1;
	line-height: 50px;
}

nav a.router-link-exact-active {
	color: rgb(44, 62, 80);
	background-color: #f9f9fa;
	border-left: 3px solid rgb(44, 62, 80);
	transition: all 0.3s linear;
}
</style>