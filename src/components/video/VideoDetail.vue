<template>
	<div class="videoDetail">
		<section class="video-section">
			<video-like-btn></video-like-btn>
			<video-iframe :youtubeId="video.youtubeId"></video-iframe>
			<video-info
				class="video_detail-video_info"
				:videoData="{
					title: video.title,
					channelName: video.channelName,
					fitPartName: video.fitPartName,
					viewCnt: video.viewCnt,
				}"
			></video-info>
			<comment-text-input :youtubeId="video.youtubeId"></comment-text-input>
		</section>

		<section class="comment-section" v-if="comments.length > 0">
			<comment-list></comment-list>
		</section>
	</div>
</template>

<script>
import { mapState } from "vuex";
import VideoLikeBtn from "./VideoLikeBtn.vue";
import VideoInfo from "./VideoInfo.vue";
import VideoIframe from "./VideoIframe.vue";
import CommentList from "../comment/CommentList.vue";
import CommentTextInput from "../comment/CommentTextInput.vue";
export default {
	components: {
		VideoLikeBtn,
		VideoInfo,
		CommentList,
		VideoIframe,
		CommentTextInput,
	},
	computed: {
		...mapState(["comments", "video"]),
	},

	created() {
		const pathName = new URL(document.location).pathname.split("/");
		this.id = pathName[pathName.length - 1];
		this.$store.dispatch("getVideo", this.id);
		this.$store.dispatch("getCommentList", this.id);
	},
};
</script>

<style scoped>
.videoDetail {
	min-height: 400px;
	height: 70vh;
	display: flex;
}

.video-section {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.comment-section {
	min-width: 400px;
	border: 1px solid #8b9092;
	overflow: scroll;
	overflow-x: hidden;
	margin-left: 20px;
	padding-right: 0;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}

.comment-section::-webkit-scrollbar {
	width: 7px;
}
/* 스크롤바의 width */
.comment-section::-webkit-scrollbar-track {
	background-color: #f9f9f9;
}
/* 스크롤바의 전체 배경색 */
.comment-section::-webkit-scrollbar-thumb {
	background: #2c3e50;
}
/* 스크롤바 색 */
.comment-section::-webkit-scrollbar-button {
	display: none;
}
.comment-section-item {
	padding: 10px 0px 10px 10px;
}

.comment-section-item:nth-child(even) {
	background-color: #f7f7f7;
}

span {
	font-size: 0.7rem;
}

.delete-btn {
	margin-left: 3px;
}

.video_detail-video_info {
	border: 1px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}
</style>
