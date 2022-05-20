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
				v-else
				v-for="(likeVideo, index) in this.$store.state.followUser.likes"
				:key="index"
			>
				{{ likeVideo.youtubeId }}
			</div>
		</section>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch("FETCH_FOLLOW_USER", this.$route.params.id);
		this.$store.dispatch("FETCH_FOLLOW_LIKES", this.$route.params.id);
	},
};
</script>

<style>
</style>