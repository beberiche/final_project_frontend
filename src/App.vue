<template>
	<div id="app">
		<div class="container">
			<header-nav></header-nav>
			<div class="view_wrapper">
				<transition name="fade" mode="out-in">
					<router-view />
				</transition>
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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
#app {
	font-family: "Noto Sans KR", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.container {
	display: flex;
	padding: 0 !important;
}

.view-wrapper {
	width: 100%;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
