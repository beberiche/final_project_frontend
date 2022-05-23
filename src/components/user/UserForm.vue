<template>
	<div>
		<div class="wrapper id-wrapper">
			<h6>id</h6>
			<input id="id" type="text" v-model="user.id" :disabled="disabled" />
			<span>id</span>
		</div>
		<div class="wrapper password-wrapper">
			<h6>password</h6>
			<input id="password" type="password" v-model="user.password" />
			<span>password</span>
		</div>
		<div class="wrapper name-wrapper">
			<h6>name</h6>
			<input id="name" type="text" v-model="user.name" :disabled="disabled" />
			<span>name</span>
		</div>
		<div class="wrapper age-wrapper">
			<h6>age</h6>
			<input id="age" type="text" v-model="user.age" :disabled="disabled" />
			<span>age</span>
		</div>
		<div>
			<button @click="updatePassword" v-if="disabled">비밀번호 수정</button>
			<button @click="signUpUser" v-else>회원가입</button>
			<button @click="cancel">취소</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				id: "",
				name: "",
				age: "",
				password: "",
			},
		};
	},
	methods: {
		signUpUser() {
			this.$store.dispatch("FETCH_SIGN_UP_USER", this.user);
		},
		cancel() {
			if (this.disabled) {
				return this.$router.push(`/user/${this.$store.state.user.id}`);
			} else {
				return this.$router.push("/");
			}
		},
		updatePassword() {
			return this.$store.dispatch("FETCH_UPDATE_PASSWORD", this.user);
		},
	},
	props: ["disabled"],
	created() {
		if (this.$props.disabled) {
			this.user.id = this.$store.state.user.id;
			this.user.name = this.$store.state.user.name;
			this.user.age = this.$store.state.user.age;
		}
	},
	mounted() {
		const id = document.querySelector("#id");
		const password = document.querySelector("#password");
		// const name = document.querySelector("#name");
		// const age = document.querySelector("#age");
		id.addEventListener("keyup", (e) => {
			e.target.nextSibling.textContent = "입력중..";
			let answer = "";
			let check = false;
			if (e.target.value.length > 0) {
				e.target.nextSibling.style.display = "block";
			}
			if (e.target.value.length < 4) {
				answer = "4자 이상 입력해주시기 바랍니다.";
			}
			if (e.target.value != e.target.value.toLowerCase()) {
				answer = "id는 소문자로 구성되어야 합니다.";
			}
			if (
				e.target.value.length >= 4 &&
				e.target.value == e.target.value.toLowerCase()
			) {
				check = true;
				answer = "올바른 아이디 입니다.";
			}
			setTimeout(() => {
				if (check) {
					e.target.style.borderBottom = "1px solid #4BBA83";
					e.target.nextSibling.style.color = "#4BBA83";
				} else {
					e.target.style.borderBottom = "1px solid #A80806";
					e.target.nextSibling.style.color = "#A80806";
				}
				e.target.nextSibling.textContent = answer;
			}, 800);
		});
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
					e.target.nextSibling.style.color = "#4BBA83";
				} else {
					e.target.style.borderBottom = "1px solid #A80806";
					e.target.nextSibling.style.color = "#A80806";
				}
				e.target.nextSibling.textContent = answer;
			}, 800);
		});
	},
};
</script>

<style scoped>
.wrapper {
	margin-bottom: 10px;
}

h6 {
	margin-bottom: 0;
	/* border: 1px solid #2c3e50; */
	font-size: 13px;
}
span {
	display: none;
	position: relative;
	bottom: 35%;
	text-align: right;
}
input {
	height: 2rem;
	border: none;
	border-bottom: 1.5px solid #d8d8d8;
	margin-right: 5px;
	background-color: transparent;
	width: 100%;
	z-index: 10;
	margin-bottom: 10px;
}
input:focus {
	outline: none;
	border-bottom: 1.5px solid #2c3e50;
	transition: all 0.3s linear;
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
</style>