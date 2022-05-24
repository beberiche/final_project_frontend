<template>
	<button @click="moveBack">
		<i class="fa-solid fa-arrow-left-long"></i>
	</button>
</template>

<script>
export default {
	methods: {
		moveBack() {
			this.$router.go(-1);
		},
	},
};
</script>

<style scoped>
button {
	border: none;
	font-size: 0.8rem;
	padding: 5px 10px;
	margin: 0 5px;
	border-radius: 5px 5px 5px 5px;
	background-color: #e7e7e7;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
}
</style>