<template>
	<div class="comment-detail">
		<h6 class="comment-no">
			번호 : {{ data.subNo ? data.subNo : data.commentNo }}
		</h6>
		<h6 class="comment-title">닉네임 : {{ data.nickName }}</h6>
		<h6 class="comment-channel_name">내용 : {{ data.content }}</h6>
		<div class="comment-date" v-if="data.date">작성날짜 : {{ data.date }}</div>
	</div>
</template>

<script>
export default {
	props: ["data"],
};
</script>

<style scoped>
.comment-title {
	width: 35rem;
	font-size: 1.2rem;
	font-weight: 900;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.comment-channel_name {
	font-size: 0.9rem;
}

.comment-no,
.comment-date {
	font-size: 0.7rem;
}

.comment-date {
	text-align: right;
}

.comment-detail {
	min-width: 400px;
	border: 1px solid #8b9092;
	padding: 20px;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
}
</style>