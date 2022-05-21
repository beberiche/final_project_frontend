<template>
	<div>
		<select v-model="searchData.key">
			<option value="1">파트</option>
			<option value="2">제목</option>
			<option value="3">채널이름</option>
		</select>
		<input type="text" v-model="searchData.content" @keyup.enter="search" />
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
input {
	height: 2rem;
	border: none;
	border-bottom: 1px solid #2c3e50;
	margin-right: 5px;
}
input:focus {
	outline: none;
}

.fa-solid {
	cursor: pointer;
}
</style>