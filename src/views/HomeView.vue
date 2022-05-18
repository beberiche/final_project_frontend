<template>
  <div class="home">
    <!--<video-one  v-for = "video in videos" :key = "video.youtubeId" :video="video" :size="size"> </video-one> -->
    <div v-for="(video, index) in videos" :key="index">
      <video-one :video="video" :size="size" />
    </div>

    <div>
      <select v-model="searchdata.key">
        <option value="1">파트</option>
        <option value="2">제목</option>
        <option value="3">채널이름</option>
      </select>
      <input type="text" v-model="searchdata.content" />
      <button @click="search">검색</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import VideoOne from "@/component/VideoOne.vue";
export default {
  name: "VideoList",
  data() {
    return {
      size: {
        width: 300,
        height: 300,
      },
      searchdata: {
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
  },
  components: {
    VideoOne,
  },
};
</script>
