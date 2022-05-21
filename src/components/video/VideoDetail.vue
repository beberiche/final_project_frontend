<template>

	<div>
		<iframe
			:width="size.width"
			:height="size.height"
			:src="`https://www.youtube.com/embed/` + video.youtubeId"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
		<button v-if="likedVideo" @click="deleteLike">찜취소</button>
		<button v-else @click="insertLike">찜추가</button>
		<div>
			<input
				type="text"
				id="nickName"
				v-model="comment.nickName"
				placeholder="닉네임"
			/>
			<!-- <input
				type="text"
				id="userId"
				v-model="comment.userId"
				placeholder="userId"
			/> -->
			<input
				type="text"
				id="userId"
				v-model="comment.content"
				placeholder="내용"
			/>
			<button @click="createComment">등록</button>
			<hr />
		</div>
		<div v-for="(comment, index) in comments" :key="index">
			<div :id="comment.userId" style="display: none">
				<button @click="createFollow(comment.userId)">팔로우</button>
				<button @click="deleteFollow(comment.userId)">팔로우 취소</button>
				<router-link :to="`/follow/${comment.userId}`">회원정보</router-link>
			</div>
			<a @click.prevent="follow(comment.userId)">{{ comment.userId }}</a
			>|{{ comment.nickName }} |<router-link
				:to="`/commentDetail/${comment.commentNo}`"
				>{{ comment.content }}</router-link
			>
			<button @click="deleteComment(comment.commentNo)">삭제</button>
			<button @click="updateform(comment.commentNo)">수정</button>
			<div :id="comment.commentNo" style="display: none">
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
			<hr />
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {

	data() {
		return {
			size: { width: 500, height: 300 },
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
		follow(payload) {
			console.log(payload);
			if (document.getElementById(payload).style.display == "none") {
				document.getElementById(payload).style.display = "block";
			} else {
				document.getElementById(payload).style.display = "none";
			}
		},
		createFollow(payload) {
			let newfollow = {
				followNo: 0,
				userId: this.$store.state.user.id,
				followId: payload,
			};
			this.$store.dispatch("createFollow", newfollow);
			this.follow(payload);
		},
		deleteFollow(payload) {
			let follow = {
				followNo: 0,
				userId: this.$store.state.user.id,
				followId: payload,
			};
			this.$store.dispatch("deleteFollow", follow);
			this.follow(payload);
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
		updateform(commentno) {
			if (document.getElementById(commentno).style.display == "none") {
				document.getElementById(commentno).style.display = "block";
			} else {
				document.getElementById(commentno).style.display = "none";
			}
		},
		deleteComment(commentid) {
			const pathName = new URL(document.location).pathname.split("/");
			const id = pathName[pathName.length - 1];
			this.$store.dispatch("deleteComment", [commentid, id]);
		},
		createComment() {
			const pathName = new URL(document.location).pathname.split("/");
			const id = pathName[pathName.length - 1];
			let newComment = {
				youtubeId: id,
				nickName: this.comment.nickName,
				content: this.comment.content,
				userId: this.$store.state.user.id,
			};
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
		...mapState(["comments", "video", "subcomments"]),
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
</style>
