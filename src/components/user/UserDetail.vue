<template>
	<div class="userDetail">
		<div>
			<section class="user-data">
				<small>사용자 정보</small>
				<div>이름 : {{ this.$store.state.user.name }}</div>
				<div>아이디 : {{ this.$store.state.user.id }}</div>
				<div>나이 : {{ this.$store.state.user.age }}</div>
			</section>
			<section class="user_follow-list">
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

			<section class="user-btns">
				<router-link :to="`/user/update`">
					<button>비밀번호 수정</button>
				</router-link>
				<button @click="deleteUser">회원탈퇴</button>
				<button @click="userLogout">로그아웃</button>
			</section>
		</div>
		<div>
			<user-like-list></user-like-list>
		</div>
	</div>
</template>

<script>
import UserLikeList from "./UserLikeList.vue";
export default {
	components: {
		UserLikeList,
	},
	created() {
		// if (!this.$store.state.user.id) {
		// 	sessionStorage.removeItem("auth-token");
		// 	this.$router.push("/user");
		// } else {
		// }
	},
	methods: {
		userLogout() {
			if (confirm(`로그아웃 하시겠습니까??`))
				this.$store.commit("DELETE_TOKEN");
		},
		deleteUser() {
			if (
				confirm(
					`WARNNING!!!\n회원 정보를 삭제하시겠습니까??\n해당 아이디와 관련된 모든 데이터가 영구적으로 삭제됩니다.`
				)
			)
				this.$store.dispatch("FETCH_DELETE_USER", this.$store.state.user.id);
		},
	},
};
</script>

<style>
.user_like-list {
	overflow: scroll;
	overflow-x: hidden;
	max-height: 400px;
	min-width: 40vw;
}
.userDetail {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.user-data,
.user_like-list,
.user_follow-list,
.user-btns {
	margin-left: 30px;
	margin-top: 30px;
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

button {
	border: none;
	font-size: 0.8rem;
	padding: 5px 10px;
	border-radius: 5px 5px 5px 5px;
	background-color: #f9f9f9;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
}

.user_like-list::-webkit-scrollbar {
	width: 7px;
}
/* 스크롤바의 width */
.user_like-list::-webkit-scrollbar-track {
	background-color: #f9f9f9;
}
/* 스크롤바의 전체 배경색 */
.user_like-list::-webkit-scrollbar-thumb {
	background: #2c3e50;
}
/* 스크롤바 색 */
.user_like-list::-webkit-scrollbar-button {
	display: none;
}
</style>