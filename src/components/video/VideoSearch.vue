<template>
	<div>
		<select v-model="searchData.key">
			<option value="1">파트</option>
			<option value="2">제목</option>
			<option value="3">채널이름</option>
		</select>
		<input
			v-model="searchData.content"
			@focus="animationSelectEl"
			@keyup.enter="search"
		/>
		<i class="fa-solid fa-magnifying-glass" @click="search"></i>
		<!-- <button @click="search">검색</button> -->
	</div>
</template>

<script>
export default {
	name: "videoSearch",
	methods: {
		search() {
			this.$store.dispatch("getList", this.searchData);
		},
		animationSelectEl() {
			const select = document.querySelector("select");
			select.classList.add("selectAnimation");
		},
	},
	data() {
		return {
			searchData: {
				key: "1",
				content: "",
			},
		};
	},
};
</script>

<style scoped>
select {
	border: none;
	height: 2rem;
	width: 5rem;
	outline: none;
}

.selectAnimation {
	animation: borderAnimation 0.3s linear;
	animation-iteration-count: 2;
}

@keyframes borderAnimation {
	0% {
		border: none;
	}
	5% {
		border: 0.5px solid #5c81a5;
	}
	10% {
		border: 1px solid #435d79;
	}
	25% {
		border: 1.5px solid #3a536c;
	}
	50% {
		border: 2px solid #2c3e50;
	}
	75% {
		border: 1.5px solid #3a536c;
	}
	85% {
		border: 1px solid #435d79;
	}
	95% {
		border: 0.5px solid #5c81a5;
	}
	100% {
		border: none;
	}
}

input {
	height: 2rem;
	border: none;
	border-bottom: 1px solid #d6d7d8;
	margin-right: 5px;
}
input:focus {
	outline: none;
	border-bottom: 1px solid #2c3e50;
	transition: border-bottom 0.3s linear;
}

.fa-solid {
	cursor: pointer;
}
</style>