<template>
	<div>
		<div class="videoList" v-for="(video, index) in videos" :key="index">
			<router-link
				class="video-item-wrapper"
				:to="`/videoDetail/${video.youtubeId}`"
			>
				<video-img :youtubeId="video.youtubeId"></video-img>
				<video-info
					:videoData="{
						title: video.title,
						channelName: video.channelName,
						fitPartName: video.fitPartName,
						viewCnt: video.viewCnt,
					}"
				></video-info>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import VideoImg from "./VideoImg.vue";
import VideoInfo from "./VideoInfo.vue";
import Bus from "../utils/Bus.js";
export default {
	name: "VideoList",
	components: {
		VideoImg,
		VideoInfo,
	},
	computed: {
		...mapState(["videos"]),
	},
	created() {
		Bus.$emit("START_SPIN");
		this.$store.dispatch("getList").then(() => Bus.$emit("END_SPIN"));
	},
};
</script>

<style scoped>
.video-item-wrapper {
	display: flex;
	text-decoration: none;
	color: #000000;
	font-family: no;
	opacity: 1;
	border: 1px solid #8b9092;
	margin-bottom: 20px;
	margin-right: 20px;
}

.video-item-wrapper:hover {
	opacity: 0.85;
	transition: all 0.3s ease-in-out;
	background: #f9f9f9;
}
</style>