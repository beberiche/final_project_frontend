<template>
  <span class="comment-btn" :id="commentId" v-if="mycomment(commentId)">
    <button @click="updateform(commentNo)">수정</button>
    <button class="delete-btn" @click="deleteComment(commentNo)">삭제</button>
  </span>
</template>

<script>
export default {
  props: ["commentNo", "commentId"],
  methods: {
    mycomment(commentId) {
      if (this.$store.state.user.id == commentId) {
        return true;
      }
      return false;
    },
    updateform(commentno) {
      if (document.getElementById(commentno).style.display == "none") {
        document.getElementById(commentno).style.display = "block";
      } else {
        document.getElementById(commentno).style.display = "none";
      }
    },
    deleteComment(payload) {
      console.log(payload);
      let idx = 0;
      for (let index = 0; index < this.$store.state.comments.length; index++) {
        if (this.$store.state.comments[index].commentNo == payload) {
          idx = index;
        }
      }
      this.$store.dispatch("deleteComment", [payload, idx]);
    },
    
  },
};
</script>

<style scoped>
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
