<template>
	<div class="comment-update" :id="comment.commentNo" style="display: none">
		<input
			type="text"
			id="nickName"
			v-model="updatecomment.nickName"
			:placeholder="comment.nickName"
		/>
		<input
			type="text"
			id="userId"
			v-model="updatecomment.content"
			:placeholder="comment.content"
		/>
		<button @click="updateComment(comment.commentNo)">완료</button>
	</div>
</template>

<script>
export default {
	props: ["comment"],
	data() {
		return {
			updatecomment: {
				youtubeId: "",
				nickName: "",
				content: "",
				userId: "",
				commentNo: 0,
			},
		};
	},
	methods: {
		updateComment(payload) {
			let newupdatecomment = {
				youtubeId: this.updatecomment.youtubeId,
				nickName: this.updatecomment.nickName,
				content: this.updatecomment.content,
				userId: this.$store.state.user.id,
				commentNo: payload,
			};
			let idx = 0;
			for (let index = 0; index < this.$store.state.comments.length; index++) {
				if (this.$store.state.comments[index].commentNo == payload) {
					idx = index;
				}
			}

			this.$store.dispatch("updateComment", [newupdatecomment, idx]);
			this.updatecomment.nickName = "";
			this.updatecomment.content = "";
			document.getElementById(payload).style.display = "none";
		},
	},
	created() {
		const pathName = new URL(document.location).pathname.split("/");
		this.updatecomment.youtubeId = pathName[pathName.length - 1];
	},
};
</script>

<style scoped>
input {
	height: 2rem;
	border: none;
	border-bottom: 1px solid #d8d8d8;
	margin-right: 5px;
	background: transparent;
}
input:focus {
	outline: none;
	border-bottom: 1px solid #2c3e50;
	transition: all 0.3s linear;
}
button {
	border: none;
	font-size: 0.8rem;
	padding: 5px 10px;
	border-radius: 5px 5px 5px 5px;
	background-color: aliceblue;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
}
</style>