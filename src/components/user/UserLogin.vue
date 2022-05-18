<template>
	<div class="loginForm">
		<h6>로그인</h6>
		<div>
			<input
				type="text"
				id="userId"
				v-model="id"
				placeholder="id를 입력하세요"
			/>
		</div>
		<div>
			<input
				type="password"
				id="userId"
				v-model="password"
				placeholder="비밀번호를 입력하세요"
			/>
		</div>
		<button @click="userLogin">클릭</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: "",
			password: "",
		};
	},
	methods: {
		userLogin() {
			const userData = {
				id: this.id,
				password: this.password,
			};
			this.$store.dispatch("FETCH_LOGIN", userData);
		},
	},
};
</script>

<style scoped>
.loginForm {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>