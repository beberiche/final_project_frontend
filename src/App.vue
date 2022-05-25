<template>
	<div class="body">
		<header-promotion></header-promotion>
		<div id="app">
			<div class="container">
				<section class="aside-container">
					<header-nav></header-nav>
					<user-nav v-show="this.$store.state.user.id"></user-nav>
					<logo-nav></logo-nav>
				</section>
				<section class="view_wrapper">
					<transition name="fade" mode="out-in">
						<router-view />
					</transition>
				</section>
				<spinner :loading="loadingStatus"></spinner>
			</div>
		</div>
		<!-- <footer-promotion></footer-promotion> -->
	</div>
</template>

<script>
import HeaderNav from "./components/nav/HeaderNav.vue";
// import FooterPromotion from "./components/promotion/FooterPromotion.vue";
import HeaderPromotion from "./components/promotion/HeaderPromotion.vue";
import UserNav from "./components/nav/UserNav.vue";
import Spinner from "./components/utils/SpinnerTool.vue";
import Bus from "./components/utils/Bus.js";
import LogoNav from "./components/nav/logoNav.vue";
export default {
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		startSpin() {
			this.loadingStatus = true;
		},
		endSpin() {
			this.loadingStatus = false;
		},
	},
	created() {
		console.log("ddd");
		Bus.$on("START_SPIN", this.startSpin);
		Bus.$on("END_SPIN", this.endSpin);
	},
	beforeDestroy() {
		Bus.$off("START_SPIN", this.startSpin);
		Bus.$off("END_SPIN", this.endSpin);
	},
	components: { HeaderNav, HeaderPromotion, UserNav, Spinner, LogoNav },
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
	padding: 0;
	justify-content: center;
	height: 70vh;
}

.aside-container {
	display: flex;
	flex-direction: column;
	gap: 30px;
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

.fade2-enter-active,
.fade2-leave-active {
	transition: opacity 1.5s linear;
}

.fade2-enter-from,
.fade2-leave-to {
	opacity: 0;
}
</style>
