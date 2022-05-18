<template>
	<div class="userDetail">
		<section class="user-data">
			<small>사용자 정보</small>
			<div>이름 : {{ this.$store.state.user.name }}</div>
			<div>아이디 : {{ this.$store.state.user.id }}</div>
			<div>나이 : {{ this.$store.state.user.age }}</div>
		</section>
		<section class="user_like-list">
			<small>찜목록</small>
			<div v-for="(likeVideo, index) in this.$store.state.likes" :key="index">
				{{ likeVideo.youtubeId }}
			</div>
		</section>
		<section class="user_like-list">
			<small>팔로워</small>
			<div v-for="(followId, index) in this.$store.state.follows" :key="index">
				{{ followId.followId }}
			</div>
		</section>
	</div>
</template>

<script>
export default {
	created() {
		if (!this.$store.state.user.id) {
			sessionStorage.removeItem("auth-token");
			this.$router.push("/user");
		} else {
			this.$store.dispatch("FETCH_LIKES", this.$store.state.user.id);
			this.$store.dispatch("FETCH_FOLLOWS", this.$store.state.user.id);
		}
	},
};
</script>

<style>
.userDetail {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.user-data,
.user_like-list {
	margin-left: 30px;
	margin-top: 30px;
}
</style>