<script>
import AudioRecorder from "@/app/components/AudioRecorder.vue";
export default {
  props: {
    title: String
  },
  emits: ['voiceItem'],
  components: {
    'ui-audio-recorder': AudioRecorder
  },
  methods: {
    selectItem(uri, duration, blob) {
      this.$emit('voiceItem', duration, blob)
    }
  }
}
</script>

<template>
  <div class="modal-window modal-item widget__modal-wrap">
    <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading" style="cursor: pointer;text-align: center">{{ title }}</h3>
    <div class="relative rounded-xl overflow-auto p-8">
      <ui-audio-recorder  @select-item="selectItem" />
    </div>
  </div>
</template>