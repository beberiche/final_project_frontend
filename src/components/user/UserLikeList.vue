<template>
	<div class="user-like">
		<div>
			<h6>찜목록</h6>
		</div>
		<section class="user-like-list">
			<div v-if="!who[0]">없음</div>
			<div
				class="like-list-item"
				v-for="(video, index) in who"
				:key="index"
				v-else
			>
				<router-link
					class="video-item-wrapper"
					:to="`/videoDetail/${video.youtubeId}`"
				>
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
		</section>
	</div>
</template>

<script>
import VideoInfo from "@/components/video/VideoInfo.vue";
export default {
	props: ["who"],
	components: {
		VideoInfo,
	},
};
</script>
<style scoped>
.user-like {
	padding: 20px;
	border: 1px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
	border-radius: 10px;
}

.user-like-list {
	overflow: scroll;
	overflow-x: hidden;
	max-height: 400px;
}

.user-like-list::-webkit-scrollbar {
	width: 7px;
}
/* 스크롤바의 width */
.user-like-list::-webkit-scrollbar-track {
	background-color: #f9f9f9;
}
/* 스크롤바의 전체 배경색 */
.user-like-list::-webkit-scrollbar-thumb {
	background: #2c3e50;
}
/* 스크롤바 색 */
.user-like-list::-webkit-scrollbar-button {
	display: none;
}
</style>