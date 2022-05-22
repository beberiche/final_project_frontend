<template>
	<div class="user-follow-list">
		<h6>팔로워</h6>
		<div v-if="!this.$store.state.user.follows[0]">없음</div>
		<div
			class="user-follow-wrapper"
			v-for="(followId, index) in this.$store.state.user.follows"
			:key="index"
			v-else
		>
			<router-link
				class="user-follow-item"
				:to="`/follow/${followId.followId}`"
				>{{ followId.followId }}</router-link
			>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-follow-list {
	padding: 20px;
	border: 1px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
	min-width: 250px;
	border-radius: 10px;
	max-height: 200px;
	overflow: scroll;
	overflow-x: hidden;
}

.user-follow-item {
	text-decoration: none;
	color: #b6b7b7;
}

.user-follow-item:hover {
	text-decoration: underline;
	color: #2c3e50;
	transition: all 0.3s linear;
}

.user-follow-list::-webkit-scrollbar {
	width: 7px;
}

.user-follow-list::-webkit-scrollbar-track {
	background-color: #f9f9f9;
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}

.user-follow-list::-webkit-scrollbar-thumb {
	background: #2c3e50;
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}

.user-follow-list::-webkit-scrollbar-button {
	display: none;
}
</style>