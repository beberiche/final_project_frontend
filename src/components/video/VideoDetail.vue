<template>
	<div class="videoDetail">
		<section class="video-section">
			<video-like-btn></video-like-btn>
			<div class="video-iframe">
				<iframe
					:width="size.width"
					:height="size.height"
					:src="`https://www.youtube.com/embed/` + video.youtubeId"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<video-info
				:videoData="{
					title: video.title,
					channelName: video.channelName,
					fitPartName: video.fitPartName,
					viewCnt: video.viewCnt,
				}"
			></video-info>
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
		</section>
		<!-- <button >찜취소</button> -->

		<section class="comment-section" v-if="comments.length > 0">
			<div
				class="comment-section-item"
				v-for="(comment, index) in comments"
				:key="index"
			>
				<div class="follow-btn" :id="'follow' + index" style="display: none">
					<button
						v-if="isfollow(comment.userId)"
						@click="createFollow([comment.userId, 'follow' + index])"
					>
						<i class="fa-solid fa-handshake"></i>
					</button>
					<button
						v-else
						@click="deleteFollow([comment.userId, 'follow' + index])"
					>
						<i class="fa-solid fa-handshake-slash"></i>
					</button>
					<!-- <router-link :to="`/follow/${comment.userId}`">회원정보</router-link> -->
				</div>
				<!-- <div>
					<a @click.prevent="follow(comment.userId)">{{ comment.userId }}</a>
				</div> -->
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

				<div
					class="comment-update"
					:id="comment.commentNo"
					style="display: none"
				>
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
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from "vuex";
import VideoLikeBtn from "./VideoLikeBtn.vue";
import VideoInfo from "./VideoInfo.vue";
import CommentUpdateAndDeleteBtn from "@/components/comment/CommentUpdateAndDeleteBtn.vue";
export default {
	components: {
		VideoLikeBtn,
		VideoInfo,
		CommentUpdateAndDeleteBtn,
	},
	data() {
		return {
			size: { width: 600, height: 400 },
			comment: {
				youtubeId: "",
				nickName: "",
				content: "",
				userId: "",
			},
			updatecomment: {
				youtubeId: "",
				nickName: "",
				content: "",
				userId: "",
				commentNo: 0,
			},
			likedVideo: false,
		};
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
		follow(payload) {
			// console.log(payload);
			if (document.getElementById(payload).style.display == "none") {
				document.getElementById(payload).style.display = "block";
			} else {
				document.getElementById(payload).style.display = "none";
			}
		},
		createFollow(payload) {
			if (payload[0] == this.user.id) {
				alert("본인의 아이디는 팔로우할 수 없습니다.");
			} else {
				let newfollow = {
					followNo: 0,
					userId: this.$store.state.user.id,
					followId: payload[0],
				};
				this.$store.dispatch("createFollow", newfollow);
			}
			this.follow(payload[1]);
		},
		deleteFollow(payload) {
			let follow = {
				followNo: 0,
				userId: this.$store.state.user.id,
				followId: payload[0],
			};
			this.$store.dispatch("deleteFollow", follow);
			this.follow(payload[1]);
		},
		userinform(payload) {
			payload;
		},
		addfollow(payload) {
			payload;
		},
		updateComment(payload) {
			const pathName = new URL(document.location).pathname.split("/");
			const id = pathName[pathName.length - 1];
			this.updatecomment.youtubeId = id;
			this.updatecomment.commentNo = payload;
			console.log(payload);
			this.$store.dispatch("updateComment", this.updatecomment);
		},
		createComment() {
			const pathName = new URL(document.location).pathname.split("/");
			const id = pathName[pathName.length - 1];
			let newComment = {
				youtubeId: id,
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
		// 해당 비디오가 로그인한 유저에게 찜 정보인지 아닌지 확인
		checkLikeVideo() {
			let check = false;
			this.$store.state.user.likes.forEach((data) => {
				if (data.youtubeId == this.$route.params.id) {
					check = true;
					return;
				}
			});
			this.likedVideo = check;
		},
		// 찜 등록
		insertLike() {
			// const likeData = {
			// 	youtubeId: this.$route.params.id,
			// 	userId: this.$store.state.user.id,
			// };
			this.$store.dispatch("FETCH_INSERT_LIKE", this.$store.state.video);
		},
		deleteLike() {
			const likeData = {
				youtubeId: this.$route.params.id,
				userId: this.$store.state.user.id,
			};
			this.$store.dispatch("FETCH_DELETE_LIKE", likeData);
		},
	},
	computed: {
		...mapState(["comments", "video", "subcomments", "user"]),
	},

	created() {
		const pathName = new URL(document.location).pathname.split("/");
		const id = pathName[pathName.length - 1];
		this.$store.dispatch("getVideo", id);
		this.$store.dispatch("getCommentList", id);
		this.checkLikeVideo();
	},
};
</script>

<style scoped>
.comment-section-item:hover {
	opacity: 0.7;
	transition: all 0.3s linear;
	border: 0.2px solid #2c3e5008;
}

.videoDetail {
	min-height: 400px;
	height: 70vh;
	display: flex;
}

.video-section {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

.form-control:focus {
	box-shadow: none;
	border: 1px solid #2c3e50;
	transition: all 0.3s linear;
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

.videoList-context {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

span {
	font-size: 0.7rem;
}

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
