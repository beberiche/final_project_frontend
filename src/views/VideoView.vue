<template>
	<div class="home">
		<video-search class="video-search"></video-search>
		<video-list></video-list>
	</div>
</template>

<script>
import VideoSearch from "@/components/video/VideoSearch.vue";
import VideoList from "@/components/video/VideoList.vue";
// @ is an alias to /src
//import VideoOne from "@/component/VideoOne.vue";
export default {
	components: { VideoSearch, VideoList },

	methods: {
		getCommentList(payload) {
			this.$store.dispatch("getCommentList", payload);
		},
	},
};
</script>

<style scoped>
.home {
	min-height: 400px;
	height: 70vh;
	overflow: scroll;
	overflow-x: hidden;
	background-color: #ffffff;
}

.video-search {
	position: absolute;
	top: 13%;
}

/*스크롤 바 디자인*/
.home::-webkit-scrollbar {
	width: 7px;
}

.home::-webkit-scrollbar-track {
	background-color: #f9f9f9;
}

.home::-webkit-scrollbar-thumb {
	background: #2c3e50;
}

.home::-webkit-scrollbar-button {
	display: none;
}
</style>
