<template>
	<div>
		<button
			class="follow-btn"
			v-if="isfollow(comment.userId)"
			@click="createFollow([comment.userId, `follow${index}`])"
		>
			<i class="fa-solid fa-handshake"></i>
		</button>
		<button
			class="unfollow-btn"
			v-else
			@click="deleteFollow([comment.userId, `follow${index}`])"
		>
			<i class="fa-solid fa-handshake-slash"></i>
		</button>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	props: ["comment", "index"],
	computed: {
		...mapState(["user"]),
	},
	methods: {
		isfollow(payload) {
			// payload : 코멘트의 아이디
			// user.follows : 로그인된 아이디가 팔로우한사람들
			if (payload == this.user.id) {
				return true;
			}
			for (let follow of this.user.follows) {
				if (follow.followId == payload) {
					return false;
				}
			}
			return true;
		},
		createFollow(payload) {
			if (payload[0] == this.user.id) {
				alert("본인의 아이디는 팔로우할 수 없습니다.");
			} else {
				let newfollow = {
					followNo: 0,
					userId: this.user.id,
					followId: payload[0],
				};
				this.$store.dispatch("createFollow", newfollow).then(() => {
					this.$store.dispatch("FETCH_FOLLOWS", this.user.id);
				});
				this.$emit("follow", payload[1]);
			}
		},
		deleteFollow(payload) {
			let follow = {
				followNo: 0,
				userId: this.user.id,
				followId: payload[0],
			};
			this.$store.dispatch("deleteFollow", follow).then(() => {
				this.$store.dispatch("FETCH_FOLLOWS", this.user.id);
			});
			this.$emit("follow", payload[1]);
		},
	},
};
</script>

<style scoped>
.follow-btn,
.unfollow-btn {
	border: none;
	font-size: 0.8rem;
	width: 40px;
	height: 30px;
	border-radius: 5px 5px 5px 5px;
	margin-bottom: 10px;
}

.follow-btn {
	background: aliceblue;
	color: #2c3e50;
}

.unfollow-btn {
	background-color: #2c3e50;
	color: aliceblue;
}

.follow-btn:hover {
	background-color: #2c3e50;
	color: aliceblue;
	transition: all 0.3s linear;
}

.unfollow-btn:hover {
	background: aliceblue;
	color: #2c3e50;
	transition: all 0.3s linear;
}

/* button {
	border: none;
	font-size: 0.8rem;
	width: 40px;
	height: 30px;
	padding: 5px 10px;
	border-radius: 5px 5px 5px 5px;
	background-color: aliceblue;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
} */
</style>