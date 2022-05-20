<template>
	<div>
		<section class="user-data">
			<small>사용자 정보</small>
			<div>이름 : {{ this.$store.state.followUser.name }}</div>
			<div>아이디 : {{ this.$store.state.followUser.id }}</div>
			<div>나이 : {{ this.$store.state.followUser.age }}</div>
		</section>
		<section class="user_like-list">
			<small>찜목록</small>
			<div v-if="!this.$store.state.followUser.likes[0]">없음</div>
			<div
				v-for="(video, index) in this.$store.state.followUser.likes"
				:key="index"
				v-else
			>
				<router-link :to="`/videoDetail/${video.youtubeId}`">
					<img :src="`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`"
				/></router-link>
				<div>
					<h5 v-text="video.title" />
					<h5 v-text="video.channelName" />
					<h5 v-text="video.fitPartName" />
					<h5 v-text="video.viewCnt" />
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch("FETCH_FOLLOW_USER", this.$route.params.id);
		this.$store.dispatch("FETCH_FOLLOW_LIKES_VIDEO", this.$route.params.id);
	},
};
</script>

<style>
</style>