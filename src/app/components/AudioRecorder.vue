<script>
import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
import AudioRecorderItem from "@/app/components/AudioRecorderItem.vue";
export default {
  name: "AudioRecorder",
  components: {
    'ui-audio-recorder-item': AudioRecorderItem
  },
  emits: ['selectItem'],
  data() {
    return {
      progress: '00:00',
      duration: 0,
      showPauseBtn: false,
      isRecordBtnDisabled: false,
      recordBtnText: 'Record',
      pauseBtnText: 'Pause',
      audios: [],
      wavesurfer: null,
      record: null
    }
  },
  unmounted() {
    this.wavesurfer.destroy()
    this.record = null
  },
  mounted() {
    this.wavesurfer = WaveSurfer.create({
      container: this.$refs.mic,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
    })

    const plugin = RecordPlugin.create({ scrollingWaveform: true, renderRecordedAudio: true })
    this.record = this.wavesurfer.registerPlugin(plugin)
    // Render recorded audio
    this.record.on('record-end', (blob) => {
      this.audios.push({
        recordedUrl: URL.createObjectURL(blob),
        duration: this.duration
      })
    })

    this.showPauseBtn = false
    this.recordBtnText = 'Record'
    this.record.on('record-progress', (time) => {
      this.updateProgress(time)
    })
  },
  methods: {
    updateProgress(time) {
      this.duration = Math.floor((time % 60000) / 1000)
      this.progress = [
        Math.floor((time % 3600000) / 60000),
        Math.floor((time % 60000) / 1000),
      ].map((v) => (v < 10 ? '0' + v : v)).join(':')
    },
    onPause() {
      if (this.record.isPaused()) {
        this.record.resumeRecording()
        this.recordBtnText = 'Pause'
        return
      }

      this.record.pauseRecording()
      this.pauseBtnText = 'Resume'
    },
    onRecord() {
      if (this.record.isRecording() || this.record.isPaused()) {
        this.record.stopRecording()
        this.recordBtnText = 'Record'
        this.showPauseBtn = false
        return
      }
      this.isRecordBtnDisabled = true
      this.record.startRecording().then(() => {
        this.recordBtnText = 'Stop'
        this.isRecordBtnDisabled = false
        this.showPauseBtn = true
      })
    },
    selectItem(uri, duration) {
      this.$emit('selectItem', uri, duration);
    }
  }
}
</script>

<template>
  <div class="ui-audio-recorder">
    <div class="ui-audio-recorder-control">
      <button @click="onRecord" class="ui-card-button" v-text="recordBtnText" :disabled="isRecordBtnDisabled"></button>
      <button @click="onPause" class="ui-card-button" v-text="pauseBtnText" v-if="showPauseBtn"></button>
      <p v-text="progress"></p>
    </div>
    <div class="ui-audio-recorder-waveform" ref="mic"></div>
    <div class="ui-audio-recorder-recordings" v-if="audios.length">
      <ui-audio-recorder-item v-for="audio in audios" :recorded-url="audio.recordedUrl" :duration="duration" @select-item="selectItem" />
    </div>
  </div>
</template>