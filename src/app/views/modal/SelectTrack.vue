<template>
  <div class="modal-window modal-item widget__modal-wrap">
    <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading" style="cursor: pointer;text-align: center">{{ title }}</h3>
    <div class="relative rounded-xl overflow-auto p-8">
      <ui-audio v-if="showRelease" :genre-id="selectedId" @selected-audio-item="selectedAudioItem" />
      <div v-else class="grid grid-cols-4 gap-4">
        <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500" v-for="genre in genres" :key="genre.id" @click="selectGenre(genre)" :style="`cursor:pointer;background-color:${genre.backgroundColor}`">
          {{ genre.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AudioPlayer from "@/app/components/AudioPlayer.vue";
export default {
  props: {
    title: String
  },
  components: {
    'ui-audio': AudioPlayer,
  },
  emits: ['audioItem'],
  data() {
    return {
      showRelease: false,
      selectedId: 0,
      genres: null
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    selectGenre(genre) {
      this.selectedId = genre.id
      this.showRelease = true
    },
    async fetch() {
      const { data: genres, error } = await this.$supabase.from('genres').select()
      if (error === null) this.genres = genres
    },
    selectedAudioItem(item) {
      this.$emit('audioItem', item.id, item.name, item.publicUrl)
    }
  }
}
</script>