<template>
	<div class="video-like-btn">
		<button v-if="likedVideo" @click="deleteLike">
			<i class="fa-solid fa-user-large-slash"></i>
		</button>
		<button v-else @click="insertLike">
			<i class="fa-solid fa-user-large"></i>
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			likedVideo: false,
		};
	},
	methods: {
		// 해당 비디오가 로그인한 유저에게 찜 정보인지 아닌지 확인
		checkLikeVideo() {
			let check = false;
			this.$store.state.user.likes.forEach((data) => {
				if (data.youtubeId == this.$route.params.id) {
					check = true;
					return;
				}
			});
			this.likedVideo = check;
		},
		// 찜 등록
		insertLike() {
			// const likeData = {
			// 	youtubeId: this.$route.params.id,
			// 	userId: this.$store.state.user.id,
			// };
			this.likedVideo = true;
			this.$store.dispatch("FETCH_INSERT_LIKE", this.$store.state.video);
		},
		deleteLike() {
			const likeData = {
				youtubeId: this.$route.params.id,
				userId: this.$store.state.user.id,
			};
			this.likedVideo = false;
			this.$store.dispatch("FETCH_DELETE_LIKE", likeData);
		},
	},
	created() {
		this.checkLikeVideo();
	},
};
</script>

<style scoped>
.video-like-btn {
	position: absolute;
	top: 14%;
}

button {
	border: none;
	font-size: 0.8rem;
	width: 40px;
	height: 30px;
	padding: 5px 10px;
	border-radius: 5px 5px 5px 5px;
	background-color: aliceblue;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
}
</style>
