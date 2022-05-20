<template>
  <div>
    {{ comment.nickName }} | {{ comment.content }} | {{ comment.date }}
    <hr />

    <input type="text" v-model="subcomment.nickName" placeholder="닉네임" />
    <input type="text" v-model="subcomment.userId" placeholder="userId" />
    <input type="text" v-model="subcomment.content" placeholder="내용" />
    <button @click="createSubComment">등록</button>
    <hr />
    <div v-for="(subcomment, index) in subcomments" :key="index">
      {{ subcomment.userId }}|{{ subcomment.nickName }} |
      {{ subcomment.content }} |
      {{ subcomment.date }}
      <button @click="deleteSubComment(subcomment.subNo)">삭제</button>
      <button @click="updateform(subcomment.subNo)">수정</button>
      <div :id="subcomment.subNo" style="display: none">
        <input
          type="text"
          id="nickName"
          v-model="updatesubcomment.nickName"
          :placeholder="subcomment.nickName"
        />

        <input
          type="text"
          id="userId"
          :placeholder="subcomment.userId"
          readonly
        />
        <input
          type="text"
          id="userId"
          v-model="updatesubcomment.content"
          :placeholder="subcomment.content"
        />
        <button
          @click="
            updateSubComment([
              comment.commentNo,
              subcomment.subNo,
              subcomment.userId,
            ])
          "
        >
          완료
        </button>
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: "",
      subcomment: {
        subNo: 0,
        commentNo: 0,
        nickName: "",
        content: "",
        userId: "",
        date: "",
      },
      updatesubcomment: {
        subNo: 0,
        commentNo: 0,
        nickName: "",
        content: "",
        userId: "",
        date: "",
      },
    };
  },
  computed: {
    ...mapState(["comment", "video", "subcomments"]),
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    this.id = pathName[pathName.length - 1];
    this.$store.dispatch("GetComment", this.id);
    this.$store.dispatch("GetSubComments", this.id);
  },

  methods: {
    updateSubComment(payload) {
      console.log(payload);
      this.updatesubcomment.commentNo = payload[0];
      this.updatesubcomment.subNo = payload[1];
      this.updatesubcomment.userId = payload[2];
      this.$store.dispatch("updateSubComment", this.updatesubcomment);
    },
    updateform(subcommentno) {
      if (document.getElementById(subcommentno).style.display == "none") {
        document.getElementById(subcommentno).style.display = "block";
      } else {
        document.getElementById(subcommentno).style.display = "none";
      }
    },
    deleteSubComment(payload) {
      this.$store.dispatch("deleteSubComment", [this.id, payload]);
    },
    createSubComment() {
      this.subcomment.commentNo = this.id;
      this.$store.dispatch("createSubComment", this.subcomment);
    },
  },
};
</script>

<style></style>
