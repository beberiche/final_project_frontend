<template>
	<div class="spinner-container" v-if="loading">
		<div class="spinner" />
	</div>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			required: true,
		},
	},
};
</script>

<style scoped>
.spinner-container {
	position: absolute;
	top: 43%;
	left: 53%;
}
.spinner {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 5px solid #e0e0e0;
	border-bottom: 5px solid #26638b;
	animation: spin 1s linear infinite;
	position: relative;
}
@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>