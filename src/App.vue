<template>
	<div class="body">
		<header-promotion></header-promotion>
		<div id="app">
			<div class="container">
				<section class="aside-container">
					<header-nav></header-nav>
				</section>
				<section class="view_wrapper">
					<transition name="fade" mode="out-in">
						<router-view />
					</transition>
				</section>
			</div>
		</div>
		<!-- <footer-promotion></footer-promotion> -->
	</div>
</template>

<script>
import HeaderNav from "./components/common/HeaderNav.vue";
// import FooterPromotion from "./components/promotion/FooterPromotion.vue";
import HeaderPromotion from "./components/promotion/HeaderPromotion.vue";
export default {
	components: { HeaderNav, HeaderPromotion },
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
	height: 95vh;
}

.container {
	display: flex;
	padding: 0 !important;
	height: 70vh;
}

.aside-container {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
