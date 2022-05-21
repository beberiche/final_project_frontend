<template>
	<div>
		<div @click="sortVideos">
			<label for="viewCntSort">조회순</label>
			<input type="radio" value="조회순" id="viewCntSort" />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		sortVideos() {
			if (document) this.$store.commit("SET_SORT_VIDEOS");
		},
	},
};
</script>

<style>
</style>