<template>
	<div>
		<div
			class="comment-section-item"
			v-for="(comment, index) in comments"
			:key="index"
		>
			<follow-btns
				class="follow-btn"
				:id="'follow' + index"
				style="display: none"
				:comment="comment"
				:index="index"
				@follow="follow"
			></follow-btns>
			<div class="comment-info" @click.prevent="follow('follow' + index)">
				<h6 class="comment-nick_name">{{ comment.nickName }}</h6>
				<span class="comment-user_id">id : {{ comment.userId }}</span>
			</div>
			<router-link
				class="comment-user_comment"
				:to="`/commentDetail/${comment.commentNo}`"
				>{{ comment.content }}</router-link
			>
			<!-- <comment-ud-btn :commentNo="comment.commentNo"></comment-ud-btn> -->
			<comment-update-and-delete-btn
				:commentNo="comment.commentNo"
				:commentId="comment.userId"
			></comment-update-and-delete-btn>
			<comment-update-form :comment="comment"></comment-update-form>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import CommentUpdateAndDeleteBtn from "./CommentUpdateAndDeleteBtn.vue";
import FollowBtns from "../common/FollowBtns.vue";
import CommentUpdateForm from "./CommentUpdateForm.vue";
export default {
	components: {
		CommentUpdateAndDeleteBtn,
		FollowBtns,
		CommentUpdateForm,
	},
	data() {
		return {};
	},
	computed: {
		...mapState(["comments", "user"]),
	},
	methods: {
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
.comment-section-item:hover {
	opacity: 0.7;
	transition: all 0.3s linear;
	border: 0.2px solid #2c3e5008;
}

.comment-info {
	display: flex;
	justify-content: space-between;
}

.comment-user_id {
	color: #2c3e50;
	padding-right: 15px;
}

.comment-user_comment {
	display: inline-block;
	max-width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-decoration: none;
}

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

.comment-info {
	display: flex;
	justify-content: space-between;
}

input::placeholder {
	font-size: 13px;
}
.comment-user_id {
	color: #2c3e50;
	padding-right: 15px;
}

.comment-user_comment {
	display: inline-block;
	max-width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.video-like-btn {
	text-align: right;
}
.comment-section {
	min-width: 400px;
	border: 1px solid #8b9092;
	overflow: scroll;
	overflow-x: hidden;
	margin-left: 20px;
	padding-right: 0;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}

.comment-section::-webkit-scrollbar {
	width: 7px;
}
/* 스크롤바의 width */
.comment-section::-webkit-scrollbar-track {
	background-color: #f9f9f9;
}
/* 스크롤바의 전체 배경색 */
.comment-section::-webkit-scrollbar-thumb {
	background: #2c3e50;
}
/* 스크롤바 색 */
.comment-section::-webkit-scrollbar-button {
	display: none;
}
.comment-section-item {
	padding: 10px 0px 10px 10px;
}

.comment-section-item:nth-child(even) {
	background-color: #f7f7f7;
}

button {
	border: none;
	font-size: 0.8rem;
	width: 50px;
	height: 30px;
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