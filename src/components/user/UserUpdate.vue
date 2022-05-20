<template>
	<div>
		<div>
			<label>id : </label>
			<input type="text" :value="user.id" />
		</div>
		<div>
			<label>password : </label>
			<input type="password" v-model="user.password" />
		</div>
		<div>
			<label>name : </label>
			<input type="text" :value="user.name" />
		</div>
		<div>
			<label>age : </label>
			<input type="text" :value="user.age" />
		</div>
		<button @click="updatePassword">비밀번호 수정</button>
		<button @click="cancel">취소</button>
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
};
</script>

<style>
</style>