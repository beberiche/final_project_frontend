<template>
	<div class="comment_input-wrapper">
		<div class="nickName-component">
			<input
				type="text"
				id="nickName"
				v-model="comment.nickName"
				placeholder="닉네임"
			/>
			<button @click="createComment">등록</button>
		</div>
		<b-form-textarea
			v-model="comment.content"
			placeholder="내용작성"
			id="content"
			rows="3"
		></b-form-textarea>
	</div>
</template>

<script>
export default {
	data() {
		return {
			comment: {
				youtubeId: "",
				nickName: "",
				content: "",
				userId: "",
			},
		};
	},
	created() {
		const pathName = new URL(document.location).pathname.split("/");
		this.comment.youtubeId = pathName[pathName.length - 1];
	},
	methods: {
		createComment() {
			let newComment = {
				youtubeId: this.comment.youtubeId,
				nickName: this.comment.nickName,
				content: this.comment.content,
				userId: this.$store.state.user.id,
				commentNo: 0,
				date: "",
			};
			this.comment.nickName = "";
			this.comment.content = "";
			this.$store.dispatch("createComment", newComment);
		},
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

.comment-btn {
	float: right;
	padding: 0 10px;
}

#nickName {
	margin-bottom: 10px;
}

#nickName::placeholder,
.form-control::placeholder {
	font-size: 0.7rem;
}
.nickName-component {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>