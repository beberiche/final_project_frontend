<template>
	<div>
		<section>
			<div class="follow-btn" :id="index" style="display: none">
				<button @click="createFollow(comment.userId)">
					<i class="fa-solid fa-handshake"></i>
				</button>
				<button @click="deleteFollow(comment.userId)">
					<i class="fa-solid fa-handshake-slash"></i>
				</button>
				<!-- <router-link :to="`/follow/${comment.userId}`">회원정보</router-link> -->
			</div>
			<div @click.prevent="follow(index)">
				<div class="comment-detail">
					<h6 class="context-no">번호 : {{ comment.commentNo }}</h6>
					<h6 class="context-title">닉네임 : {{ comment.nickName }}</h6>
					<h6 class="context-CN">내용 : {{ comment.content }}</h6>
					<h6 class="context-date">작성날짜 : {{ comment.date }}</h6>
				</div>
			</div>
		</section>
		<section class="comment-section" v-if="subcomments.length > 0">
			<div
				class="comment-section-item"
				v-for="(subcomment, index) in subcomments"
				:key="index"
			>
				<div class="follow-btn" :id="subcomment.userId" style="display: none">
					<button @click="createFollow(subcomment.userId)">
						<i class="fa-solid fa-handshake"></i>
					</button>
					<button @click="deleteFollow(subcomment.userId)">
						<i class="fa-solid fa-handshake-slash"></i>
					</button>
					<!-- <router-link :to="`/follow/${comment.userId}`">회원정보</router-link> -->
				</div>
				<!-- <div>
					<a @click.prevent="follow(comment.userId)">{{ comment.userId }}</a>
				</div> -->
				<div class="subcomment-detail">
					<h6 class="context-no" @click.prevent="follow(subcomment.userId)">
						번호 : {{ subcomment.subNo }}
					</h6>
					<h6 class="context-title">닉네임 : {{ subcomment.nickName }}</h6>
					<h6 class="context-CN">내용 : {{ subcomment.content }}</h6>
					<h6 class="context-date">작성날짜 : {{ subcomment.date }}</h6>
				</div>
				<!-- 
				<div @click.prevent="follow(subcomment.userId)">
					{{ subcomment.nickName }}
				</div>
				<div>
					{{ subcomment.content }}
				</div> -->
				<span class="comment-btn">
					<button @click="updateform(subcomment.subNo)">수정</button>
					<button
						class="delete-btn"
						@click="deleteSubComment(subcomment.subNo)"
					>
						삭제
					</button>
				</span>
				<div :id="subcomment.subNo" style="display: none">
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
					<button
						@click="
							updateSubComment([
								comment.commentNo,
								subcomment.subNo,
								subcomment.userId,
							])
						"
					>
						완료
					</button>
				</div>
			</div>
		</section>

		<!-- <div v-for="(subcomment, index) in subcomments" :key="index">
			{{ subcomment.userId }}|{{ subcomment.nickName }} |
			{{ subcomment.content }} |
			{{ subcomment.date }}
			<button @click="deleteSubComment(subcomment.subNo)">삭제</button>
			<button @click="updateform(subcomment.subNo)">수정</button>
			<div :id="subcomment.subNo" style="display: none">
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
				<button
					@click="
						updateSubComment([
							comment.commentNo,
							subcomment.subNo,
							subcomment.userId,
						])
					"
				>
					완료
				</button>
			</div>
		</div> -->
		<section>
			<div class="comment_input-wrapper">
				<div class="nickName-component">
					<input
						type="text"
						id="nickName"
						v-model="subcomment.nickName"
						placeholder="닉네임"
					/>
					<button @click="createSubComment">등록</button>
				</div>
				<b-form-textarea
					v-model="subcomment.content"
					placeholder="내용작성"
					id="content"
					rows="5"
				></b-form-textarea>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
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
			updatesubcomment: {
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
		this.updatesubcomment.userId = this.$store.state.user.id;
		const pathName = new URL(document.location).pathname.split("/");
		this.id = pathName[pathName.length - 1];
		this.$store.dispatch("getComment", this.id);
		this.$store.dispatch("getSubComments", this.id);
	},

	methods: {
		updateSubComment(payload) {
			console.log(payload);
			this.updatesubcomment.commentNo = payload[0];
			this.updatesubcomment.subNo = payload[1];
			this.updatesubcomment.userId = payload[2];
			this.$store.dispatch("updateSubComment", this.updatesubcomment);
		},
		updateform(subcommentno) {
			if (document.getElementById(subcommentno).style.display == "none") {
				document.getElementById(subcommentno).style.display = "block";
			} else {
				document.getElementById(subcommentno).style.display = "none";
			}
		},
		deleteSubComment(payload) {
			this.$store.dispatch("deleteSubComment", [this.id, payload]);
		},
		createSubComment() {
			this.subcomment.commentNo = this.id;
			this.$store.dispatch("createSubComment", this.subcomment);
		},

		follow(payload) {
			// console.log(payload);
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

.context-title {
	width: 35rem;
	font-size: 1.2rem;
	font-weight: 900;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.context-CN {
	font-size: 0.9rem;
}

.context-no,
.context-date {
	font-size: 0.7rem;
}

.context-date {
	text-align: right;
}

.comment-detail {
	border: 1px solid #8b9092;
	min-width: 400px;
	border: 1px solid #8b9092;
	padding: 20px;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}

.comment-section {
	min-width: 400px;
	max-height: 30vh;
	margin: 20px 0;
	border: 1px solid #8b9092;
	overflow: scroll;
	overflow-x: hidden;
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
	padding: 20px 10px 10px 20px;
}

.comment-section-item:nth-child(even) {
	background-color: #f7f7f7;
}

.delete-btn {
	margin-left: 3px;
}

.follow-btn {
	position: absolute;
	top: 11%;
}
</style>
