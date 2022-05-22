<template>
	<div class="user-like">
		<div>
			<h6>찜목록</h6>
		</div>
		<section class="user-like-list">
			<div v-if="!this.$store.state.user.likes[0]">없음</div>
			<div
				class="like-list-item"
				v-for="(video, index) in this.$store.state.user.likes"
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
					<!-- <div>
					<img
						class="videoList-img"
						:src="`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`"
					/>
				</div>
				<div class="videoList-context">
					<div>
						<h6 class="context-title" v-text="video.title" />
						<h6 class="context-CN" v-text="video.channelName" />
					</div>

					<span>
						파트 :
						<i
							class="fa-solid fa-shirt"
							v-if="video.fitPartName === '복부'"
						></i>
						<i
							class="fa-solid fa-child-reaching"
							v-else-if="video.fitPartName === '전신'"
						></i>
						<i
							class="fa-solid fa-shoe-prints"
							v-else-if="video.fitPartName === '하체'"
						></i>
						<i class="fa-solid fa-dumbbell" v-else></i>
					</span>
					<span>조회수 : {{ video.viewCnt }}</span>
				</div> -->
				</router-link>
			</div>
		</section>
	</div>
</template>

<script>
import VideoInfo from "@/components/video/VideoInfo.vue";
export default {
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