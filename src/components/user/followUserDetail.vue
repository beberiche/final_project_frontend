<template>
	<div class="user-followed-detail">
		<div class="flex-wrapper-1">
			<user-data
				:userData="{
					id: this.$store.state.followUser.id,
					name: this.$store.state.followUser.name,
					age: this.$store.state.followUser.age,
				}"
			></user-data>
		</div>
		<div>
			<user-like-list
				:who="this.$store.state.followUser.likes"
			></user-like-list>
		</div>
	</div>
</template>

<script>
import UserData from "./UserData.vue";
import UserLikeList from "./UserLikeList.vue";
import Bus from "@/components/utils/Bus.js";
export default {
	components: {
		UserData,
		UserLikeList,
	},
	created() {
		Bus.$emit("START_SPIN");
		this.$store
			.dispatch("FETCH_FOLLOW_USER", this.$route.params.id)
			.then(() => {
				this.$store
					.dispatch("FETCH_FOLLOW_LIKES_VIDEO", this.$route.params.id)
					.then(() => {
						Bus.$emit("END_SPIN");
					});
			});
	},
};
</script>

<style scoped>
.user-followed-detail {
	min-width: 550px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.flex-wrapper-1 {
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
}
</style>