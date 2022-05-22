<template>
	<div>
		<img
			class="video-img"
			:src="`https://img.youtube.com/vi/${youtubeId}/0.jpg`"
		/>
	</div>
</template>

<script>
export default {
	props: ["youtubeId"],
};
</script>

<style>
.video-img {
	width: 200px;
}
</style>