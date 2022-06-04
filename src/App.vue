<template>
	<div class="body">
		<header-promotion></header-promotion>
		<div id="app">
			<div class="container">
				<section class="aside-container" key="HeaderNav">
					<header-nav></header-nav>
					<user-nav v-show="this.$store.state.user.id"></user-nav>
					<logo-nav></logo-nav>
				</section>

				<section class="view_wrapper">
					<transition name="move" mode="out-in">
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
	font-size: 0.85rem;
}

.view-wrapper {
	width: 100%;
}
/* .fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
} */

.move-enter {
	transform: translateY(-2500px);
}

.move-enter-to {
	transform: translateY(0px);
}

.move-leave {
	transform: translateY(0px);
}

.move-leave-to {
	transform: translateY(-2500px);
}

.move-leave-active {
	transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

.move-enter-active {
	transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

.move2-enter {
	transform: translateX(-2500px);
}

.move2-enter-to {
	transform: translateX(0px);
}

.move2-leave {
	transform: translateX(0px);
}

.move2-leave-to {
	transform: translateX(-2500px);
}

.move2-leave-active {
	transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

.move2-enter-active {
	transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

@media screen and (max-width: 768px) {
	.container {
		display: flex;
		flex-direction: column;
	}
	.aside-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0;
	}
}
</style>
