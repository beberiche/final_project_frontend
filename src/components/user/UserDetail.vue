<template>
	<div class="user-detail">
		<div class="flex-wrapper-1">
			<user-data
				:userData="{
					id: this.$store.state.user.id,
					name: this.$store.state.user.name,
					age: this.$store.state.user.age,
				}"
			></user-data>
			<user-follow-list></user-follow-list>
		</div>
		<div>
			<user-like-list :who="this.$store.state.user.likes"></user-like-list>
		</div>
	</div>
</template>

<script>
import UserData from "./UserData.vue";
import UserFollowList from "./UserFollowList.vue";
import UserLikeList from "./UserLikeList.vue";
export default {
	created() {
		this.$store.dispatch("FETCH_FOLLOWS", this.$store.state.user.id);
		this.$store.dispatch("FETCH_LIKES_VIDEO", this.$store.state.user.id);
	},
	components: { UserData, UserFollowList, UserLikeList },
};
</script>

<style>
.user-detail {
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
/* .user-data,
.user_like-list,
.user_follow-list,
.user-btns {
	margin-left: 30px;
	margin-top: 30px;
} */

.video-item-wrapper {
	display: flex;
	text-decoration: none;
	color: #000000;
	font-family: no;
	opacity: 1;
	border: 1px solid #8b9092;
	margin-bottom: 20px;
	margin-right: 20px;
}

.video-item-wrapper:hover {
	opacity: 0.85;
	transition: all 0.3s ease-in-out;
}

span {
	font-size: 0.7rem;
}
</style>