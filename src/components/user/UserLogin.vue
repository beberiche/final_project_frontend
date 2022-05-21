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
		<div>
			<button @click="userLogin">로그인</button>
		</div>
		<div>
			<router-link to="/user/signup">
				<button>회원가입</button>
			</router-link>
		</div>
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
			const user = {
				id: this.id,
				password: this.password,
			};
			const userData = {
				user,
				call: this.$route.query.call,
			};
			this.$store.dispatch("FETCH_LOGIN", userData).then(() => {
				this.$store
					.dispatch("FETCH_LIKES_VIDEO", this.$store.state.user.id)
					.then(() => {
						this.$store.dispatch("FETCH_FOLLOWS", this.$store.state.user.id);
					});
			});
		},
		userSignUp() {
			this.$router.push("/user/signup");
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