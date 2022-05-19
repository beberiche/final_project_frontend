<template>
	<div class="userDetail">
		<section class="user-data">
			<small>사용자 정보</small>
			<div>이름 : {{ this.$store.state.user.name }}</div>
			<div>아이디 : {{ this.$store.state.user.id }}</div>
			<div>나이 : {{ this.$store.state.user.age }}</div>
		</section>
		<section class="user_like-list">
			<small>팔로워</small>
			<div v-if="!this.$store.state.user.follows[0]">없음</div>
			<div
				v-for="(followId, index) in this.$store.state.user.follows"
				:key="index"
				v-else
			>
				<router-link :to="`/follow/${followId.followId}`">{{
					followId.followId
				}}</router-link>
			</div>
		</section>
		<section class="user_like-list">
			<small>찜목록</small>
			<div v-if="!this.$store.state.user.likes[0]">없음</div>
			<div
				v-else
				v-for="(likeVideo, index) in this.$store.state.user.likes"
				:key="index"
			>
				{{ likeVideo.youtubeId }}
			</div>
		</section>
		<section>
			<router-link to="/user/update">
				<button>비밀번호 수정</button>
			</router-link>
			<button @click="deleteUser">회원탈퇴</button>
			<button @click="userLogout">로그아웃</button>
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
	methods: {
		userLogout() {
			this.$store.commit("DELETE_TOKEN");
		},
		deleteUser() {
			this.$store.dispatch("FETCH_DELETE_USER", this.$store.state.user.id);
		},
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