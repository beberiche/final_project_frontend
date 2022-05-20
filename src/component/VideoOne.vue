<template>
  <div>
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
      <h5 v-text="video.title" />
      <h5 v-text="video.channelName" />
      <h5 v-text="video.fitPartName" />
      <h5 v-text="video.viewCnt" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    video: Object,
    size: Object,
  },
};
</script>

<style></style>
