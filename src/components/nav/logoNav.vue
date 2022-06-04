<template>
	<nav>
		<img :src="img" width="100" height="120" />
	</nav>
</template>

<script>
export default {
	data() {
		return {
			img: require("../../assets/ssafit.png"),
		};
	},
};
</script>

<style scoped>
nav {
	min-width: 250px;
	min-height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 30px;
	padding: 20px 0;
	border: 0.7px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}

@media screen and (max-width: 768px) {
	nav {
		display: none;
	}
}
</style>