<template>
	<div>
		<h2>회원가입</h2>
		<div>
			<label>id : </label>
			<input type="text" v-model="user.id" />
		</div>
		<div>
			<label>password : </label>
			<input type="password" v-model="user.password" />
		</div>
		<div>
			<label>name : </label>
			<input type="text" v-model="user.name" />
		</div>
		<div>
			<label>age : </label>
			<input type="text" v-model="user.age" />
		</div>
		<button @click="signUpUser">회원가입</button>
		<button @click="cancel">취소</button>
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
		cancel() {
			this.$router.push("/");
		},
		signUpUser() {
			this.$store.dispatch("FETCH_SIGN_UP_USER", this.user);
		},
	},
};
</script>

<style>
</style>