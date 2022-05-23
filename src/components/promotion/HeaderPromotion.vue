<template>
	<div class="header-promotion">
		<h6>
			"운동을 위해 시간을 내지 않으면, 병 때문에 시간을 내야하게 될지다 모른다.
			- 로빈 샤머"
		</h6>
	</div>
</template>

<script>
export default {
	mounted() {
		const comments = [
			"'한계'라고 느낄 때 '한 개'를 더해야 성장한다. - ???",
			"오늘도 나의 임무를 완수했다. 근손실 꺼져버려. - 김제 xx짐 피트니스 정xx",
			"정확하게 반복하고 허세없이 운동해라. - 제이커틀러",
			"너 언제까지 누워만 있을래?? - 어딘가의 한국 어미니",
			"의지로 바꿀 수 있는 유일한 게 몸이더라구요 - 모델 한혜진",
			"점수 후하게 안주면 다 죽는거다 - 대전 4반 xxx",
		];
		const h6 = document.querySelector("h6");
		let idx = 0;
		setInterval(() => {
			console.log("휴");
			h6.textContent = comments[idx];
			idx = (idx + 1) % comments.length;
		}, 20000);
	},
};
</script>

<style scoped>
.header-promotion {
	height: 5vh;
	background-color: #2c3e50;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}
h6 {
	margin: 0;
	width: 100%;
	animation: slide-special-comment 20s infinite linear;
	font-weight: 700;
	font-style: italic;
	font-size: 12px;
}
@keyframes slide-special-comment {
	0%,
	50% {
		transform: translateX(100%);
	}

	50% {
		transform: translateX(0%);
	}

	100% {
		transform: translateX(-100%);
	}
}
</style>