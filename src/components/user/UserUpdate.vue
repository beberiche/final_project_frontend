<template>
	<div class="user-form">
		<h2>비밀번호 수정</h2>
		<div>
			<h6>id</h6>
			<input id="id" type="text" :value="user.id" readonly />
			<span>id</span>
		</div>
		<div>
			<h6>password</h6>
			<input id="password" type="password" v-model="user.password" />
			<span>password</span>
		</div>
		<div>
			<h6>name</h6>
			<input id="name" type="text" :value="user.name" readonly />
			<span>name</span>
		</div>
		<div>
			<h6>age</h6>
			<input id="age" type="text" :value="user.age" readonly />
			<span>age</span>
		</div>
		<div>
			<button @click="updatePassword">비밀번호 수정</button>
			<button @click="cancel">취소</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				id: this.$store.state.user.id,
				name: this.$store.state.user.name,
				age: this.$store.state.user.age,
				password: "",
			},
		};
	},
	methods: {
		cancel() {
			return this.$router.push(`/user/${this.$store.state.user.id}`);
		},
		updatePassword() {
			return this.$store.dispatch("FETCH_UPDATE_PASSWORD", this.user);
		},
	},
	mounted() {
		const password = document.querySelector("#password");
		/* eslint-disable */
		password.addEventListener("keyup", (e) => {
			e.target.nextSibling.textContent = "입력중..";
			let answer = "";
			let check = false;
			if (e.target.value.length > 0) {
				e.target.nextSibling.style.display = "block";
			}
			if (e.target.value.length < 4) {
				answer = "4자 이상 입력해주시기 바랍니다.";
			}
			if (e.target.value.length >= 4) {
				check = true;
				answer = "올바른 비밀번호 입니다.";
			}
			setTimeout(() => {
				if (check) {
					e.target.style.borderBottom = "1px solid #4BBA83";
				} else {
					e.target.style.borderBottom = "1px solid #A80806";
				}
				e.target.nextSibling.textContent = answer;
			}, 800);
		});
	},
};
</script>

<style scoped>
span {
	display: none;
	position: relative;
	bottom: 35%;
	text-align: right;
}
.user-form {
	display: flex;
	flex-direction: column;
	width: 450px;
	height: 400px;
	justify-content: space-around;
	padding: 30px;
	border: 1px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
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
}
input:focus {
	outline: none;
	border-bottom: 1.5px solid #2c3e50;
	transition: all 0.3s linear;
}

h6 {
	margin-bottom: 0;
	/* border: 1px solid #2c3e50; */
	font-size: 13px;
}
</style>