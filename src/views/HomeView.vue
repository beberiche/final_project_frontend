<template>
  <div class="home">
    <div v-for="(video, index) in videos" :key="index">
      <router-link :to="`/videoDetail/${video.youtubeId}`">
        <img :src="`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`"
      /></router-link>
      <div>
        <h5 v-text="video.title" />
        <h5 v-text="video.channelName" />
        <h5 v-text="video.fitPartName" />
        <h5 v-text="video.viewCnt" />
      </div>
    </div>

    <div>
      <select v-model="searchData.key">
        <option value="1">파트</option>
        <option value="2">제목</option>
        <option value="3">채널이름</option>
      </select>
      <input type="text" v-model="searchData.content" />
      <button @click="search">검색</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
//import VideoOne from "@/component/VideoOne.vue";
export default {
  name: "VideoList",
  data() {
    return {
      size: {
        width: 300,
        height: 300,
      },
      searchData: {
        key: "",
        content: "",
      },
    };
  },
  computed: {
    ...mapState(["videos"]),
  },
  created() {
    this.$store.dispatch("getList", this.serch);
  },
  methods: {
    search() {
      console.log(this.searchData);
      this.$store.dispatch("getList", this.searchData);
    },
    getCommentList(payload) {
      this.$store.dispatch("getCommentList", payload);
    },
  },
  components: {},
};
</script>
