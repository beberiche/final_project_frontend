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
	methods: {},
};
</script>

<style>
</style>