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
			this.$store.dispatch("FETCH_LOGIN", userData);
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
	width: 450px;
	height: 300px;
	padding: 30px;
	border: 1px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
}

button {
	border: none;
	font-size: 0.8rem;
	padding: 5px 10px;
	margin: 0 5px;
	border-radius: 5px 5px 5px 5px;
	background-color: #e7e7e7;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
}

input {
	height: 2rem;
	border: none;
	border-bottom: 1.5px solid #d8d8d8;
	margin-right: 5px;
	background-color: transparent;
	width: 100%;
	z-index: 10;
}
input:focus {
	outline: none;
	border-bottom: 1.5px solid #2c3e50;
	transition: all 0.3s linear;
}

input::placeholder {
	font-size: 0.8rem;
}
</style>