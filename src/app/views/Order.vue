<script>
import AudioPlayer from "@/app/components/AudioPlayer.vue";
export default {
  name: "Order",
  components: {
    'ui-audio': AudioPlayer
  },
  data() {
    return {
      currentPage: 0,
      minPage: 0,
      maxPage: 3,
      isNotify: false,
      message: null,
      canContinue: false,
      selectedAudio: {
        id: 0,
        uri: null,
        author: null,
        name: null,
        duration: null
      },
      selectedIndex: null,
      selectedGenre: null,
      genres: ['Techno', 'Drum and Bass', 'Deep House', 'Classic', 'Ambient', 'Minimal', 'Trance'],
      titles: ['Genres', 'Tracks', 'Voice', 'Completed']
    }
  },
  watch: {
    selectedGenre: {
      handler(value) {
        if (value) {
          this.canContinue = true;
        }
      }
    },
    isNotify: {
      handler(value) {
        if (value) {
          setTimeout(() => {
            this.isNotify = false
          }, 3000)
        }
      }
    }
  },
  methods: {
    setActiveClass(index) {
      if (index === this.currentPage) {
        return 'current'
      } else if (index > this.currentPage) {
        return 'pending'
      }

      return 'completed'
    },
    audioSelection(item) {
      this.canContinue = true
      this.selectedAudio = item
    },
    isNeedNotify() {
      switch (this.currentPage) {
        case 0:
          if (!this.canContinue) {
            this.isNotify = true;
            this.message = 'Please select genre';
          }
          break;
        case 1:
          if (!this.canContinue) {
            this.isNotify = true;
            this.message = 'Please select song';
          }
          break;
        case 2:
          this.canContinue = true
              break;
        case 3:
          this.canContinue = true
          break;
      }
    },
    submit() {
      this.isNeedNotify();
      if (this.canContinue && this.maxPage !== this.currentPage) this.currentPage++;
      this.canContinue = false
      if (this.currentPage === 3) {
        const text = `genre: ${this.selectedGenre}, song: ${this.selectedAudio.author} : ${this.selectedAudio.name}`
        this.sendMessage(text)
      }
    },
    sendMessage(text) {
      fetch(import.meta.env.VITE_TELEGRAM + '/sendMessage?chat_id=-4121938659&text=' + text)
    }
  }
}
</script>

<template>
  <div class="ui-stepper">
    <div class="ui-stepper-nav">
      <div v-for="(title, index) in titles" class="ui-stepper-item" :class="setActiveClass(index)">
        <h3 class="ui-stepper-title" v-text="title"></h3>
      </div>
    </div>
    <form class="ui-stepper-form" @submit.prevent="submit">
      <div class="ui-stepper-step" v-if="currentPage === 0">
        <label class="ui-stepper-label" v-for="genre in genres" :key="genre" :class="{ active: genre === selectedGenre }">
          <input type="radio" :name="genre" :value="genre" v-model="selectedGenre"> {{ genre }}
        </label>
      </div>
      <div class="ui-stepper-step" v-else-if="currentPage === 1">
        <span class="ui-stepper-audio-selection" :class="{ active: canContinue }">
          You selected: <span v-text="selectedAudio.author" class="author"></span>, <span v-text="selectedAudio.name" class="name"></span>
        </span>
        <ui-audio :title="selectedGenre" @selected-item="audioSelection" />
      </div>
      <div class="ui-stepper-step" v-else-if="currentPage === 2">media recorder</div>
      <div class="ui-stepper-step" v-else-if="currentPage === 3">place order</div>
      <button v-text="currentPage === 3 ? 'Submit' : 'Next'" class="ui-card-button" :class="{ active: canContinue }"></button>
    </form>
  </div>
  <teleport to="body">
    <transition name="bounce">
      <div class="ui-notification" v-if="isNotify">{{ message }}</div>
    </transition>
  </teleport>
</template>
