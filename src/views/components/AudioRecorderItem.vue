<script>
import WaveSurfer from "wavesurfer.js";

export default {
  name: "AudioRecorderItem",
  props: {
    blob: Blob,
    recordedUrl: String,
    duration: Number
  },
  emits: ['selectItem'],
  data() {
    return {
      wavesurfer: null,
      btnText: 'Play'
    }
  },
  unmounted() {
    this.wavesurfer.destroy()
  },
  mounted() {
    const container = this.$refs.wave
    this.wavesurfer = WaveSurfer.create({
      container,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
      url: this.recordedUrl,
    })
    this.wavesurfer.on('pause', () => (this.btnText = 'Play'))
    this.wavesurfer.on('play', () => (this.btnText = 'Pause'))
  },
  methods: {
    playPause() {
      this.wavesurfer.playPause()
    }
  }
}
</script>

<template>
<div class="ui-audio-recorder-item">
  <div class="ui-audio-recorder-item-wave" ref="wave"></div>
  <div class="ui-audio-recorder-item-control">
    <button v-text="btnText" @click="playPause" class="ui-card-button"></button>
    <button @click="$emit('selectItem', duration, blob)" class="ui-card-button select">Select</button>
  </div>
</div>
</template>