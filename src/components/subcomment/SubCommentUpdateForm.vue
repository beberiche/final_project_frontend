<template>
	<div
		class="subcomment-update"
		:id="'update' + subcomment.subNo"
		style="display: none"
	>
		<input
			type="text"
			id="nickName"
			v-model="updatesubcomment.nickName"
			:placeholder="subcomment.nickName"
		/>
		<input
			type="text"
			id="userId"
			v-model="updatesubcomment.content"
			:placeholder="subcomment.content"
		/>
		<button @click="updateSubComment(subcomment.subNo)">완료</button>
	</div>
</template>

<script>
export default {
	props: ["subcomment"],
	data() {
		return {
			id: "",
			updatesubcomment: {
				subNo: 0,
				commentNo: 0,
				nickName: "",
				content: "",
				userId: "",
			},
		};
	},
	created() {
		console.log(this.$props.subcomment);
		this.updatesubcomment.subNo = this.$props.subcomment.subNo;
		this.updatesubcomment.userId = this.$props.subcomment.userId;
		// this.updatesubcomment.nickName = this.$props.subcomment.nickName;
		this.updatesubcomment.commentNo = this.$props.subcomment.commentNo;
	},
	methods: {
		updateSubComment(payload) {
			let idx = 0;
			for (
				let index = 0;
				index < this.$store.state.subcomments.length;
				index++
			) {
				if (this.$store.state.subcomments[index].subNo == payload) {
					idx = index;
				}
			}
			let newupdatesubcomment = {
				commentNo: this.updatesubcomment.commentNo,
				subNo: this.updatesubcomment.subNo,
				userId: this.updatesubcomment.userId,
				nickName: this.updatesubcomment.nickName,
				content: this.updatesubcomment.content,
				date: this.$store.state.subcomments[idx].date,
			};
			this.$store.dispatch("updateSubComment", [newupdatesubcomment, idx]);
			this.updatesubcomment.nickName = "";
			this.updatesubcomment.content = "";
			document.getElementById("update" + payload).style.display = "none";
		},
	},
};
</script>

<style scoped>
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

input {
	height: 2rem;
	border: none;
	border-bottom: 1px solid #d8d8d8;
	margin-right: 5px;
	background-color: transparent;
}
input:focus {
	outline: none;
	border-bottom: 1px solid #2c3e50;
	transition: all 0.3s linear;
}

.subcomment-update {
	margin-left: 10px;
}
</style>