<script>
import AudioPlayer from "@/views/components/AudioPlayer.vue";
import AudioRecorder from "@/views/components/AudioRecorder.vue";
import * as yup from "yup";
export default {
  emits: ['order', 'voiceItem'],
  components: {
    'ui-audio': AudioPlayer,
    'ui-audio-recorder': AudioRecorder
  },
  data() {
    const schema = yup.object().shape({
      desc: yup.string().required("Description is required!").min(10, 'Message must be at least 10 characters'),
      email: yup.string().required("Email is required!").email(),
      name: yup.string().required("Name is required!"),
    });

    return {
      schema,
      loading: false,
      isGenresFetched: false,
      isMoodsFetched: false,
      isTrackFetched: false,
      formData: {
        desc: '',
        name: '',
        email: '',
      },
      title: 'Let\'s start',
      tab: '',
      showPromo: true,
      showGenres: false,
      showMoods: false,
      showAudioPlayer: false,
      showRecordPlayer: false,
      showForm: false,
      selectedGenderId: 0,
      genres: null,
      moods: null,
      order: {
        id: 0,
        name: '',
        url: '',
        duration: '',
        blob: null,
      }
    }
  },
  methods: {
    selectGenre(genre) {
      this.selectedGenderId = genre.id
      this.showGenres = false
      this.showRecordPlayer = false
      this.showAudioPlayer = true
      this.showForm = false
      this.title = genre.name
    },
    selectMood(mood) {
      this.selectedGenderId = mood.id
      this.showMoods = false
      this.showGenres = false
      this.showRecordPlayer = false
      this.showAudioPlayer = true
      this.showForm = false
      this.title = mood.name
      this.tab = 'mood'
    },
    showAllTracksTab() {
      this.showMoods = false
      this.showGenres = false
      this.showRecordPlayer = false
      this.showAudioPlayer = true
      this.showForm = false
      this.title = 'All track'
      this.tab = 'track'
    },
    selectedAudioItem(item) {
      this.order.id = item.id
      this.order.name = item.name
      this.order.url = item.publicUrl

      this.title = 'Record Voice'
      this.showGenres = false
      this.showAudioPlayer = false
      this.showRecordPlayer = true
      this.showForm = false
    },
    notSelectedAudioItem() {
      switch (this.tab) {
        case 'mood':
          this.showMoodTab()
          break;
        case 'genre':
          this.showGenresTab()
          break;
        case 'track':
          this.showPromoTab()
          break;
      }
      this.selectedGenderId = 0
      this.showAudioPlayer = false
      this.showRecordPlayer = false
      this.showForm = false
    },
    selectVoiceItem(duration, blob) {
      this.showGenres = false
      this.showAudioPlayer = false
      this.showRecordPlayer = false
      this.showForm = true
      this.title = 'Fill the Form'
      this.order.duration = duration
      this.order.blob = blob
    },
    submitForm() {
      this.loading = true
      try {
        this.schema.validateSync(this.formData)
        const caption = `name: ${this.formData.name}, email: ${this.formData.email}, text: ${this.formData.desc}, id: ${this.order.id}, uri: ${this.order.url}, track-name: ${this.order.name}`

        const form = new FormData
        form.append('audio', this.order.blob, 'voice.webm')
        form.append('caption', caption)
        form.append('chat_id', import.meta.env.VITE_TELEGRAM_CHAT)
        form.append('duration', this.order.duration)

        fetch(import.meta.env.VITE_TELEGRAM + '/sendAudio', {
          method: 'POST',
          body: form
        }).then(() => {
          this.$notify({
            text: "We will back to you shortly",
            group: 'custom'
          });
          this.$emit('order')
        })

        // const { data, error } = await this.$supabase.storage
        //     .from('messages')
        //     .upload('file_path1.webm', blob)

        this.loading = false
      } catch ({ message }) {
        this.loading = false
        this.$notify({
          title: "Important message",
          text: message,
          group: 'main',
          type: "error",
        });
      }
    },
    showMoodTab() {
      this.title = 'Choose Mood'
      this.showPromo = false
      this.showGenres = false
      this.showMoods = true
      this.fetchMoods()
      this.tab = 'mood'
    },
    showGenresTab() {
      this.title = 'Select Genres'
      this.showPromo = false
      this.showGenres = true
      this.showMoods = false
      this.fetchGenres()
      this.tab = 'genre'
    },
    showPromoTab() {
      this.title = 'Let\'s start'
      this.showPromo = true
      this.showGenres = false
      this.showMoods = false
      this.fetchGenres()
    },
    async fetchGenres() {
      if (!this.isGenresFetched) {
        const { data: genres, error } = await this.$supabase.from('genres').select()
        if (error === null) {
          this.genres = genres
          this.isGenresFetched = true
        }
      }
    },
    async fetchMoods() {
      if (!this.isMoodsFetched) {
        const { data: moods, error } = await this.$supabase.from('Moods').select()
        if (error === null) {
          this.moods = moods
          this.isMoodsFetched = true
        }
      }
    }
  }
}
</script>

<template>
  <div class="modal-window modal-item widget__modal-wrap" style="border: 1px solid #fff; padding: 10px; border-radius: 8px">
    <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading" style="text-align: center"  v-text="title" />
    <div class="relative rounded-xl overflow-auto p-8">
      <div class="grid grid-cols-3 gap-4" v-if="showPromo">
        <div @click="showAllTracksTab" class="p-4 rounded-lg shadow-lg bg-fuchsia-500" style="cursor: pointer; background-color: rgb(27, 132, 255);">
          All tracks
        </div>
        <div @click="showGenresTab" class="p-4 rounded-lg shadow-lg bg-fuchsia-500" style="cursor: pointer; background-color: rgb(255, 111, 30);">
          Genres
        </div>
        <div @click="showMoodTab" class="p-4 rounded-lg shadow-lg bg-fuchsia-500" style="cursor: pointer; background-color: rgb(37, 47, 74);">
          Moods
        </div>
      </div>
      <template v-if="showGenres">
        <div class="grid grid-cols-4 gap-4">
          <template v-for="genre in genres" :key="genre.id">
            <div @click="selectGenre(genre)" class="p-4 rounded-lg shadow-lg bg-fuchsia-500"  :style="`cursor:pointer;background-color:${genre.backgroundColor}`" v-text="genre.name" />
          </template>
        </div>
        <div style="display: flex; justify-content: space-between;padding-top: 15px">
          <button @click="showPromoTab"><< Back</button>
        </div>
      </template>
      <template v-if="showMoods">
        <div class="grid grid-cols-2 gap-4">
          <template v-for="mood in moods" :key="mood.id">
            <div @click="selectMood(mood)" class="p-4 rounded-lg shadow-lg bg-fuchsia-500"  :style="`cursor:pointer;background-color:${mood.mood_background_colour}`" v-text="mood.name" />
          </template>
        </div>
        <div style="display: flex; justify-content: space-between;padding-top: 15px">
          <button @click="showPromoTab"><< Back</button>
        </div>
      </template>
      <div v-if="showAudioPlayer">
        <ui-audio :genre-id="selectedGenderId" :tab="tab" @not-selected="notSelectedAudioItem" @selected-audio-item="selectedAudioItem" />
      </div>
      <div v-if="showRecordPlayer" class="relative rounded-xl overflow-auto p-8">
        <ui-audio-recorder  @select-item="selectVoiceItem" />
      </div>
      <template v-if="showForm">
        <div class="relative rounded-xl overflow-auto p-8">
          <form @submit.prevent="submitForm">
            <div class="grid max-w-5xl grid-cols-1 gap-4 mx-auto md:grid-cols-1">
              <div class="flex flex-col space-y-5 rounded-md bg-[#030405] p-8 md:col-span-2">
                <div class="pt-6 space-y-5 sm:pt-0">
                  <div class="flex items-start justify-start space-x-4">
                    <div class="max-w-sm mx-auto w-full">
                      <div class="mb-5">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 text-white">Name</label>
                        <input v-model="formData.name" id="name" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      </div>
                      <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-white">Email</label>
                        <input v-model="formData.email" id="email" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      </div>
                      <div class="mb-5">
                        <label for="promt" class="block mb-2 text-sm font-medium text-gray-900 text-white">Description</label>
                        <textarea style="max-height: 250px;min-height: 160px" placeholder="Please describe your track" v-model="formData.desc" id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-3 -mt-6 sm:px-0 sm:mt-0">
                <div class="relative flex-1 rounded-xl">
                  <div class="flex flex-col items-center justify-center h-full text-center">
                    <div class="relative inline-flex items-center justify-center group">
                      <div class="absolute transition-all duration-200 rounded-full group-hover:shadow-purple-500/50 -inset-px bg-gradient-to-r from-purple-500 to-red-500 group-hover:shadow-lg"></div>
                      <button type="submit" class="text-white bg-black border border-transparent hover:bg-gray-900 md:text-xs lg:text-base rounded-full cursor-pointer relative inline-flex items-center justify-center px-8 py-3 text-sm font-normal" :disabled="loading">
                        <span v-text="loading ? 'Loading' : 'Submit'"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </template>
    </div>
  </div>
</template>