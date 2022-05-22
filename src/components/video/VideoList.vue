<template>
	<div>
		<div class="videoList" v-for="(video, index) in videos" :key="index">
			<router-link
				class="videoItem-wrapper"
				:to="`/videoDetail/${video.youtubeId}`"
			>
				<div>
					<img
						class="videoList-img"
						:src="`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`"
					/>
				</div>
				<div class="video-info">
					<div>
						<h6 class="video-info-title" v-text="video.title" />
						<h6 class="video-info-channel_name" v-text="video.channelName" />
					</div>

					<span class="video-info-part-icon">
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
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "VideoList",
	data() {
		return {
			size: {
				width: 300,
				height: 300,
			},
		};
	},
	computed: {
		...mapState(["videos"]),
	},
	created() {
		this.$store.dispatch("getList");
	},
};
</script>

<style scoped>
.videoItem-wrapper {
	display: flex;
	text-decoration: none;
	color: #000000;
	font-family: no;
	opacity: 1;
	border: 1px solid #8b9092;
	margin-bottom: 20px;
	border-radius: 0 10px 10px 0px;
	margin-right: 20px;
}

.videoItem-wrapper:hover {
	opacity: 0.85;
	transition: all 0.3s ease-in-out;
	background: #f9f9f9;
}

.video-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 1rem;
}

.video-info-title {
	width: 35rem;
	font-size: 1.2rem;
	font-weight: 900;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.video-info-channel_name {
	font-size: 0.9rem;
}

.video-info-part-icon {
	font-size: 0.7rem;
}

.videoList-img {
	width: 200px;
}
</style>