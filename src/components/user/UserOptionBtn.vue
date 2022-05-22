<template>
	<div class="user-option-btn">
		<router-link :to="`/user/update`">
			<button>비밀번호 수정</button>
		</router-link>
		<button @click="deleteUser">회원탈퇴</button>
		<button @click="userLogout">로그아웃</button>
	</div>
</template>

<script>
export default {
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

<style scoped>
.user-option-btn {
	text-align: center;
}
button {
	border: none;
	font-size: 0.8rem;
	padding: 5px 10px;
	margin: 0 10px;
	border-radius: 5px 5px 5px 5px;
	background-color: #e7e7e7;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
}
</style>