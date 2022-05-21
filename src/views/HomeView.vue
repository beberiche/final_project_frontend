<template>
	<div class="home">
		<video-search class="videoSearch"></video-search>
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
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import VideoSearch from "@/components/video/VideoSearch.vue";
// @ is an alias to /src
import { mapState } from "vuex";
//import VideoOne from "@/component/VideoOne.vue";
export default {
	components: { VideoSearch },
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

.home::-webkit-scrollbar {
	width: 7px;
}
/* 스크롤바의 width */
.home::-webkit-scrollbar-track {
	background-color: #f9f9f9;
}
/* 스크롤바의 전체 배경색 */
.home::-webkit-scrollbar-thumb {
	background: #2c3e50;
}
/* 스크롤바 색 */
.home::-webkit-scrollbar-button {
	display: none;
}

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

.videoList-context {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 1rem;
}

.context-title {
	width: 35rem;
	font-size: 1.2rem;
	font-weight: 900;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

span {
	font-size: 0.7rem;
}

.context-CN {
	font-size: 0.9rem;
}

.videoList-img {
	width: 200px;
}

.videoSearch {
	position: fixed;
	top: 10%;
}
</style>