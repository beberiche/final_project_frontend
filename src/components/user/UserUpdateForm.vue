<template>
	<div class="user-form">
		<h2>비밀번호 수정</h2>
		<user-form :disabled="true"></user-form>
	</div>
</template>

<script>
import UserForm from "./UserForm.vue";
export default {
	components: {
		UserForm,
	},
	methods: {},
};
</script>

<style scoped>
.user-form {
	display: flex;
	flex-direction: column;
	width: 450px;
	max-height: 600px;
	justify-content: space-around;
	padding: 30px;
	border: 1px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
	border-radius: 10px;
}
</style>