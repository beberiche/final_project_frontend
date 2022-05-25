<template>
	<div class="video-iframe">
		<iframe
			:width="width"
			:height="height"
			:src="'https://www.youtube.com/embed/' + youtubeId"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</template>

<script>
export default {
	props: ["youtubeId"],
	data() {
		return {
			width: 600,
			height: 400,
		};
	},
};
</script>

<style scoped>
</style>