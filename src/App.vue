<template>
	<div id="app">
		<div class="container">
			<header-nav></header-nav>
			<div class="view_wrapper">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import HeaderNav from "./components/common/HeaderNav.vue";
export default {
	components: { HeaderNav },
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.container {
	display: inline-flex;
	border: 1px solid #2c3e50;
	width: 100%;
	min-height: 700px;
	padding: 0 !important;
}

nav {
	width: 20rem;
	display: flex;
	flex-direction: column;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	text-decoration: none;
	padding-left: 20px;
	border-left: 3px solid #ffffff;
}

nav a.router-link-exact-active {
	color: #42b983;
	background-color: #f9f9fa;
	border-left: 3px solid #2c3e50;
}

.view_wrapper {
	width: 100%;
}
</style>
