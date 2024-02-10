<script>
export default {
  name: "AudioPlayer",
  props: {
    title: String
  },
  data() {
    return {
      audioSource: null,
      isModalOpen: false,
      isSound: true,
      isSongStarted: false,
      repeat: false,
      shuffle: false,
      currentIndex: 0,
      lastSoundValue: 1,
      volume: 1,
      currentDuration: 0,
      maxDuration: 0,
      duration: '',
      currentTime: '',
      items: [
        {
          id: 1,
          uri: '/a/2track_5.mp3',
          author: 'Kung Fighters',
          name: 'The Pretender',
          duration: '03:03'
        },
        {
          id: 2,
          uri: '/a/4track_funky_7.mp3',
          author: 'System of a Revenge',
          name: 'The Past Starts Slow...',
          duration: '02:43'
        },
        {
          id: 3,
          uri: '/a/6track_dubstep.mp3',
          author: 'Archiduke',
          name: 'Killer Queen',
          duration: '03:31'
        },
        {
          id: 4,
          uri: '/a/7track_Future_Bass.mp3',
          author: 'System of a Revenge',
          name: 'The Past Starts Slow...',
          duration: '03:19'
        },
        {
          id: 5,
          uri: '/a/9track_pop_4.mp3',
          author: 'System of a Revenge',
          name: 'Seven Nation Army',
          duration: '02:36'
        },
        {
          id: 6,
          uri: '/a/3track_2.mp3',
          author: 'The Black Stripes',
          name: 'Hypnopulse',
          duration: '03:10'
        }
      ]
    }
  },
  watch: {
    volume: {
      handler(value) {
        this.isSound = value !== 0;
        this.audioSource.volume = value
      }
    }
  },
  mounted() {},
  computed: {
    isLastBtnDisabled() {
      return this.currentIndex === (this.items.length - 1)
    },
    isFirstBtnDisabled() {
      return this.currentIndex === 0
    }
  },
  methods: {
    playSong(item) {
      const started = item.isSongStarted
      this.items.forEach(i => i.isSongStarted = false)
      const index = this.items.findIndex(i => i.id === item.id)

      if (started && this.currentIndex === index) {
        this.isModalOpen = false
        this.stopAudioSong()
      } else {
        if (!this.isModalOpen) this.isModalOpen = true
        this.currentIndex = index
        this.updateAudioSong(item)
      }
    },
    playPrevSong() {
      this.items.forEach(i => i.isSongStarted = false)
      if (this.currentIndex) this.currentIndex--;
      this.updateAudioSong(this.items[this.currentIndex])
    },
    playNextSong() {
      this.items.forEach(i => i.isSongStarted = false)
      if (!this.isLastBtnDisabled) this.currentIndex++;
      this.updateAudioSong(this.items[this.currentIndex])
    },
    onSound() {
      this.volume = this.lastSoundValue
      this.isSound = true
    },
    muteSound() {
      this.lastSoundValue = this.audioSource.volume
      this.isSound = false
      this.volume = 0
    },
    play() {
      this.audioSource.play()
      this.isSongStarted = false
      this.items[this.currentIndex].isSongStarted = true
    },
    pause() {
      this.audioSource.pause()
      this.isSongStarted = true
      this.items[this.currentIndex].isSongStarted = false
    },
    updateAudioSong(item) {
      this.stopAudioSong()
      item.isSongStarted = true
      this.currentTime = item.duration
      this.audioSource = new Audio(item.uri)
      this.currentDuration = 0
      this.maxDuration = 0
      this.audioSource.volume = this.volume
      this.audioSource.addEventListener('timeupdate', this.timeupdate, false)
      this.audioSource.addEventListener('ended', this.ended, false)
      this.play()
    },
    stopAudioSong() {
      if (this.audioSource) {
        this.audioSource.removeEventListener('timeupdate', this.timeupdate, false)
        this.audioSource.removeEventListener('ended', this.timeupdate, false)
        this.pause()
        this.audioSource = null
      }
    },
    changeDuration() {
      this.audioSource.currentTime = this.currentDuration
    },
    timeupdate() {
      this.duration = this.convertDuration(this.audioSource.currentTime)
      if (!this.maxDuration) this.maxDuration = this.audioSource.duration
    },
    ended() {
      if (this.repeat) {
        this.audioSource.currentTime = 0
        this.currentDuration = 0
        this.play()
      }

      if (this.shuffle) {
        var numbers = []
        for (var i in this.items) {
          if (this.currentIndex === Number(i)) continue;
          numbers.push(Number(i))
        }
        this.currentIndex = numbers[Math.floor(Math.random() * numbers.length)]
        this.playSong(this.items[this.currentIndex])
      }
    },
    onShuffle() {
      this.shuffle = !this.shuffle
      if (this.shuffle) this.repeat = false
    },
    onRepeat() {
      this.repeat = !this.repeat
      if (this.repeat) this.shuffle = false
    },
    convertDuration(duration) {
      const hr = Math.floor(duration / 3600);
      const min = Math.floor((duration - (hr * 3600)) / 60);
      const sec = Math.floor(duration - (hr * 3600) - (min * 60));
      return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }
  }
}
</script>

<template>
  <div class="ui-release">
    <h2 class="ui-release-title" v-text="title"></h2>
    <ul class="ui-release-player">
      <li v-for="(item, index) in items" :key="index" @click="playSong(item)">
        <div class="cover">
          <i :class="item.isSongStarted ? 'pause-icon' : 'play-icon'">
            <svg v-if="item.isSongStarted"><path transform="scale(0.8)" d="M14.5 2A1.5 1.5 0 0116 3.5v17a1.5 1.5 0 01-3 0v-17A1.5 1.5 0 0114.5 2m0-2C12.57 0 11 1.57 11 3.5v17c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-17C18 1.57 16.43 0 14.5 0zm-11 0C1.57 0 0 1.57 0 3.5V12h2V3.5a1.5 1.5 0 113 0v17a1.5 1.5 0 01-3 0V18H0v2.5C0 22.43 1.57 24 3.5 24S7 22.43 7 20.5v-17C7 1.57 5.43 0 3.5 0z"/><path d="M0 14h2v2H0z"/></svg>
            <svg viewBox="0 0 512 512" v-else><path d="m422 183l-254-167c-16-11-33-16-49-16-35 0-72 28-72 88l0 336c0 60 37 88 72 88 16 0 33-5 48-16l257-167c26-17 41-44 41-72 0-29-15-56-43-74z m-24 107l-256 167c-8 6-16 8-23 8-16 0-26-15-26-41 0 0 0-10 0-28 0 0 0 0 0 0l-46 0 0-140 46 0c0-84 0-168 0-168 0-26 10-41 26-41 7 0 15 2 23 8l255 167c28 19 30 49 1 68z m-351 13l46 0 0 46-46 0z"></path></svg>
          </i>
        </div>
        <div class="composition">
          <span class="composition-name" v-text="item.name"></span>
          <span class="composition-author" v-text="item.author"></span>
        </div>
        <div class="composition-time">
          <time class="published" v-text="item.duration"></time>
        </div>
      </li>
    </ul>
  </div>
  <teleport to="body">
    <div class="ui-release-audio" v-if="isModalOpen">
      <div class="ui-release-audio-controls">
        <button class="ui-btn-audio-control" @click="playPrevSong" :disabled="isFirstBtnDisabled"><img alt="Prev Btn" src="../assets/svg/prev-song.svg" /></button>
        <button class="ui-btn-audio-control" v-if="isSongStarted" @click="play"><img alt="Play" src="../assets/svg/play-icon.svg" /></button>
        <button class="ui-btn-audio-control" v-else  @click="pause"><img alt="Pause" src="../assets/svg/pause-icon.svg" /></button>
        <button class="ui-btn-audio-control" @click="playNextSong" :disabled="isLastBtnDisabled"><img alt="Next Btn" src="../assets/svg/next-song.svg" /></button>
        <button class="ui-btn-audio-control" @click="onRepeat">
          <img v-if="repeat" src="../assets/svg/repeat.svg" alt="Repeat" />
          <img v-else src="../assets/svg/repeat-off.svg" alt="Repeat Off" />
        </button>
        <button class="ui-btn-audio-control" @click="onShuffle">
          <img v-if="shuffle" src="../assets/svg/shuffle-on.svg" alt="Shuffle Off" />
          <img v-else src="../assets/svg/shuffle.svg" alt="Shuffle" />
        </button>
        <div class="ui-btn-audio-control-duration" v-text="duration"></div>
        <div class="ui-btn-audio-control-slider">
          <input type="range" min="0" :max="maxDuration" @click="changeDuration" v-model="currentDuration" step="0.1"/>
        </div>
        <div class="ui-btn-audio-control-duration" v-text="currentTime"></div>
        <button class="ui-btn-audio-control" v-if="isSound" @click="muteSound"><img alt="Mute" src="../assets/svg/sound.svg" /></button>
        <button class="ui-btn-audio-control" v-else  @click="onSound"><img alt="Sound On" src="../assets/svg/no-sound.svg" /></button>
        <div class="ui-btn-audio-control-volume">
          <input type="range" min="0" max="1" v-model="volume" step="0.1"/>
        </div>
      </div>
    </div>
  </teleport>
</template>
