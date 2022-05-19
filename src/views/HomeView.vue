<template>
  <div class="home">
    <div v-for="(video, index) in videos" :key="index">
      <iframe
        :width="size.width"
        :height="size.height"
        :src="'https://www.youtube.com/embed/' + video.youtubeId"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>
        <h5>
          <router-link :to="`/videoDetail/${video.youtubeId}`">{{
            video.title
          }}</router-link>
        </h5>
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
      this.$store.dispatch("getList", this.searchdata);
    },
    getCommentList(payload) {
      this.$store.dispatch("getCommentList", payload);
    },
  },
  components: {},
};
</script>
