<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      videoSource: null
    }
  },
  mounted() {
    this.loadVideo()
  },
  methods: {
    async loadVideo() {
      try {
        const response = await fetch('/v/EAAAF.mp4')
        const blob = await response.blob()
        this.videoSource = URL.createObjectURL(blob)
      } catch (error) {
        console.error('failed to load:', error)
      }
    },
    restartVideo() {
      const video = this.$refs.videoPlayer;
      video.currentTime = 0;
      video.play();
    }
  }
}
</script>

<template>
<div>
  <video class="ui-video" :src="videoSource" autoplay muted ref="videoPlayer" @ended="restartVideo"></video>
  <div class="ui-gradient-wrapper">
    <img src="../assets/gradient.png" class="ui-gradient-overview" alt="gradient">
  </div>
</div>
</template>
