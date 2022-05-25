<template>
	<div>
		<section>
			<comment-info :data="comment"></comment-info>
		</section>
		<section class="subcomment-section" v-if="subcomments.length > 0">
			<div
				class="subcomment-section-item"
				v-for="(subcomment, index) in subcomments"
				:key="index"
			>
				<follow-btns
					class="follow-btn"
					:id="'follow' + index"
					style="display: none"
					:comment="subcomment"
					:index="index"
					@follow="follow"
				></follow-btns>

				<div @click="follow('follow' + index)">
					<comment-info
						class="subcomment-detail"
						:data="subcomment"
					></comment-info>
				</div>
				<span class="subcomment-btn" v-if="mySubComment(subcomment.userId)">
					<button @click="updateform('update' + subcomment.subNo)">수정</button>
					<button
						class="delete-btn"
						@click="deleteSubComment(subcomment.subNo)"
					>
						삭제
					</button>
				</span>
				<sub-comment-update-form
					:subcomment="subcomment"
				></sub-comment-update-form>
			</div>
		</section>

		<section>
			<comment-text-input
				:commentNo="subcomment.commentNo"
			></comment-text-input>
		</section>
	</div>
</template>

<script>
import { mapState } from "vuex";
import Bus from "@/components/utils/Bus.js";
import CommentInfo from "./CommentInfo.vue";
import CommentTextInput from "./CommentTextInput.vue";
import SubCommentUpdateForm from "../subcomment/SubCommentUpdateForm.vue";
import FollowBtns from "../common/FollowBtns.vue";
export default {
	components: {
		CommentInfo,
		CommentTextInput,
		SubCommentUpdateForm,
		FollowBtns,
	},
	data() {
		return {
			id: "",
			subcomment: {
				subNo: 0,
				commentNo: 0,
				nickName: "",
				content: "",
				userId: "",
				date: "",
			},
		};
	},
	computed: {
		...mapState(["comment", "video", "subcomments"]),
	},
	created() {
		this.subcomment.userId = this.$store.state.user.id;
		const pathName = new URL(document.location).pathname.split("/");
		this.id = pathName[pathName.length - 1];
		this.subcomment.commentNo = this.id;
		Bus.$emit("START_SPIN");
		this.$store.dispatch("getComment", this.id).then(() => {
			this.$store.dispatch("getSubComments", this.id).then(() => {
				Bus.$emit("END_SPIN");
			});
		});
	},

	methods: {
		mySubComment(commentId) {
			if (this.$store.state.user.id == commentId) {
				return true;
			}
			return false;
		},
		updateform(subcommentno) {
			if (document.getElementById(subcommentno).style.display == "none") {
				document.getElementById(subcommentno).style.display = "block";
			} else {
				document.getElementById(subcommentno).style.display = "none";
			}
		},
		deleteSubComment(payload) {
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
			this.$store.dispatch("deleteSubComment", [payload, idx]);
			//this.$store.dispatch("deleteSubComment", [this.id, payload]);
		},

		follow(payload) {
			if (document.getElementById(payload).style.display == "none") {
				document.getElementById(payload).style.display = "block";
			} else {
				document.getElementById(payload).style.display = "none";
			}
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
.form-control:focus {
	box-shadow: none;
	border: 1px solid #2c3e50;
	transition: all 0.3s linear;
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

.subcomment-section {
	min-width: 400px;
	max-height: 30vh;
	margin: 20px 0;
	border: 1px solid #8b9092;
	overflow: scroll;
	overflow-x: hidden;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}

.subcomment-section::-webkit-scrollbar {
	width: 7px;
}
/* 스크롤바의 width */
.subcomment-section::-webkit-scrollbar-track {
	background-color: #f9f9f9;
}
/* 스크롤바의 전체 배경색 */
.subcomment-section::-webkit-scrollbar-thumb {
	background: #2c3e50;
}
/* 스크롤바 색 */
.subcomment-section::-webkit-scrollbar-button {
	display: none;
}
.subcomment-section-item {
	padding: 20px 10px 10px 20px;
}

.subcomment-section-item:nth-child(even) {
	background-color: #f7f7f7;
}

.delete-btn {
	margin-left: 3px;
}

.subcomment-detail {
	border: none;
	box-shadow: none;
	padding: 5px 10px;
}

.subcomment-btn {
	margin-left: 10px;
}
</style>
