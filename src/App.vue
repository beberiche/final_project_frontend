<template>
	<div id="app">
		<div class="container">
			<nav>
				<router-link to="/video">비디오</router-link>
				<router-link
					:to="`/user/${this.$store.state.user.id}`"
					v-if="this.$store.state.user.id"
					>사용자 정보</router-link
				>
				<router-link to="/user" v-else>로그인</router-link>
			</nav>
			<div class="view_wrapper">
				<router-view />
			</div>
		</div>
	</div>
</template>



<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	border: 1px solid #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.container {
	display: inline-flex;
	border: 1px solid #2c3e50;
	width: 100%;
	min-height: 400px;
	padding: 0px;
}

nav {
	width: 20rem;
	display: flex;
	flex-direction: column;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}

.view_wrapper {
	width: 100%;
}
</style>
