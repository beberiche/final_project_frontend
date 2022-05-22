<template>
	<span class="comment-btn">
		<button @click="updateform(commentNo)">수정</button>
		<button class="delete-btn" @click="deleteComment(commentNo)">삭제</button>
	</span>
</template>

<script>
export default {
	props: ["commentNo"],
	methods: {
		updateform(commentno) {
			if (document.getElementById(commentno).style.display == "none") {
				document.getElementById(commentno).style.display = "block";
			} else {
				document.getElementById(commentno).style.display = "none";
			}
		},
		deleteComment(commentno) {
			const pathName = new URL(document.location).pathname.split("/");
			const id = pathName[pathName.length - 1];
			this.$store.dispatch("deleteComment", [commentno, id]);
		},
	},
};
</script>

<style scoped>
.comment-btn {
	float: right;
	padding: 0 10px;
}
.delete-btn {
	margin-left: 3px;
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