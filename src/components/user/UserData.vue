<template>
	<div class="user">
		<h6>사용자 정보</h6>
		<div class="user-data">
			<div>이름 : {{ userData.name }}</div>
			<div>아이디 : {{ userData.id }}</div>
			<div>나이 : {{ userData.age }}</div>
		</div>
		<div>
			<user-option-btn
				v-if="userData.id === this.$store.state.user.id"
			></user-option-btn>
		</div>
	</div>
</template>

<script>
import UserOptionBtn from "./UserOptionBtn.vue";
export default {
	props: ["userData"],
	components: {
		UserOptionBtn,
	},
};
</script>

<style scoped>
.user {
	width: 400px;
	padding: 20px;
	border: 1px solid #8b9092;
	border-radius: 10px;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}

.user-data {
	margin: 20px 0;
}
</style>