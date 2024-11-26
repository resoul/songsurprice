<script>
import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
import AudioRecorderItem from "@/views/components/AudioRecorderItem.vue";
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
      progressColor: 'rgb(100, 0, 100)'
    })

    const plugin = RecordPlugin.create({
      scrollingWaveform: true,
      renderRecordedAudio: true
    })

    this.record = this.wavesurfer.registerPlugin(plugin)
    // Render recorded audio
    this.record.on('record-end', (blob) => {
      this.audios.push({
        blob: blob,
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
    selectItem(duration, blob) {
      this.$emit('selectItem', duration, blob);
    }
  }
}
</script>

<template>
  <div class="ui-audio-recorder">
    <div class="ui-audio-recorder-control">
      <div>
        <button @click="onRecord" class="ui-card-button" v-text="recordBtnText" :disabled="isRecordBtnDisabled"></button>
        <span v-if="showPauseBtn">|</span>
        <button @click="onPause" class="ui-card-button" v-text="pauseBtnText" v-if="showPauseBtn"></button>
      </div>
      <p v-text="progress"></p>
    </div>
    <div class="ui-audio-recorder-waveform" ref="mic"></div>
    <div class="ui-audio-recorder-recordings" v-if="audios.length">
      <ui-audio-recorder-item v-for="audio in audios" :recorded-url="audio.recordedUrl" :blob="audio.blob" :duration="duration" @select-item="selectItem" />
    </div>
  </div>
</template>

<style lang="scss">
.ui-audio-recorder-control {
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: space-between;
    span {
      margin-right: 5px;
      margin-left: 5px;
    }
  }
}
.ui-audio-recorder-recordings {
  padding-top: 15px;
  overflow-y: auto;
  height: 100%;
  min-height: 150px;
  max-height: 350px;
  .ui-audio-recorder-item {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ccc;
    &:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: 0;
    }
  }
}
.ui-audio-recorder-waveform {
  padding-bottom: 5px;
  border-bottom: 3px solid #3b82f6;
}
.ui-audio-recorder-item-control {
  .select {
    margin-left: 10px;
  }
}
</style>