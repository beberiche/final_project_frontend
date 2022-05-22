<template>
	<div class="video-info">
		<div>
			<h6 class="video-info-title" v-text="videoData.title" />
			<h6 class="video-info-channel_name" v-text="videoData.channelName" />
		</div>

		<span class="video-info-part-icon">
			파트 :
			<i class="fa-solid fa-shirt" v-if="videoData.fitPartName === '복부'"></i>
			<i
				class="fa-solid fa-child-reaching"
				v-else-if="videoData.fitPartName === '전신'"
			></i>
			<i
				class="fa-solid fa-shoe-prints"
				v-else-if="videoData.fitPartName === '하체'"
			></i>
			<i class="fa-solid fa-dumbbell" v-else></i>
		</span>
		<span>조회수 : {{ videoData.viewCnt }}</span>
	</div>
</template>

<script>
export default {
	props: {
		videoData: {
			type: Object,
			required: true,
			title: {
				type: String,
			},
			channelName: {
				type: String,
			},
			fitPartName: {
				type: String,
			},
			viewCnt: {
				type: Number,
			},
		},
	},
};
</script>

<style scoped>
.video-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 1rem;
}

.video-info-title {
	width: 35rem;
	font-size: 1.2rem;
	font-weight: 900;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.video-info-channel_name {
	font-size: 0.9rem;
}

.video-info-part-icon {
	font-size: 0.7rem;
}
</style>