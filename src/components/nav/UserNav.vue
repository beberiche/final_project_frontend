<template>
	<nav>
		<div class="user-icon">
			<i class="fa-solid fa-user"></i>
		</div>
		<div class="user-welcome">
			<div>
				반갑습니다 <strong>{{ this.$store.state.user.id }}</strong> 님!
			</div>
			<div>오늘도 저희와 득근득근 하시죠!</div>
		</div>
		<div class="user-info">
			<div>
				현재 팔로워 :
				<strong>{{ this.$store.state.user.follows.length }}</strong> 명
			</div>
			<div>
				현재 찜목록 :
				<strong>{{ this.$store.state.user.likes.length }}</strong> 개
			</div>
			<button class="user-logout" @click="userLogout">로그아웃</button>
			<back-btn></back-btn>
		</div>
	</nav>
</template>

<script>
import BackBtn from "@/components/utils/BackBtn.vue";
export default {
	components: {
		BackBtn,
	},
	methods: {
		userLogout() {
			if (confirm(`로그아웃 하시겠습니까??`))
				this.$store.commit("DELETE_TOKEN");
		},
	},
};
</script>

<style scoped>
nav {
	min-width: 250px;
	min-height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: #ffffff;
	margin: 0 30px;
	border: 0.7px solid #8b9092;
	box-shadow: 3px 3px 5px -3px rgba(196, 196, 196, 0.83);
	padding: 30px;
	text-align: center;
	font-size: 0.85rem;
}
.user-welcome {
	margin-bottom: 20px;
}

.user-icon {
	width: 4rem;
	height: 4rem;
	font-size: 3rem;
	border-radius: 50%;
	overflow: hidden;
	background-color: rgb(44, 62, 80);
	align-self: center;
	border: 1px solid rgb(44, 62, 80);
	margin-bottom: 20px;
}

.fa-solid {
	color: #f9f9f9;
}

button {
	border: none;
	font-size: 0.8rem;
	padding: 5px 10px;
	margin: 0 10px;
	border-radius: 5px 5px 5px 5px;
	background-color: #e7e7e7;
}

button:hover {
	background-color: #2c3e50;
	color: #ffffff;
	transition: all 0.3s linear;
}

.user-logout {
	margin-top: 10px;
}
</style>