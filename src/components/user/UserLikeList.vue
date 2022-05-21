<template>
	<section class="user_like-list">
		<small>찜목록</small>
		<div v-if="!this.$store.state.user.likes[0]">없음</div>
		<div
			class="like-list-item"
			v-for="(video, index) in this.$store.state.user.likes"
			:key="index"
			v-else
		>
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
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
.user_like-list {
	overflow: scroll;
	overflow-x: hidden;
	max-height: 400px;
	min-width: 40vw;
}
</style>