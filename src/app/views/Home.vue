<script>
import AudioPlayer from "@/app/components/AudioPlayer.vue";
import VideoPlayer from "@/app/components/VideoPlayer.vue";
export default {
  name: "Home",
  components: {
    'ui-audio': AudioPlayer,
    'ui-video': VideoPlayer
  },
  data() {
    return {
      headline: 'Get Musical Tracks as a Gift',
      desc: [
          'Welcome to our unique music portal, where melodies become gifts!',
          'We are delighted to offer you incredible moments and magical sounds – just choose your gift from our diverse catalog of musical tracks.',
          'Join us and treat yourself and your loved ones to the pleasure of sonic harmony – because the best moments deserve the most beautiful music!'
      ]
    }
  }
}
</script>

<template>
  <div class="ui-promo">
    <div class="ui-promo-holder"><ui-video class="ui-video-preview" /></div>
  </div>
  <div class="ui-welcome">
    <div class="ui-music-box">
      <div class="ui-music-box-img">
        <img src="../assets/band.png" alt="Band"/>
      </div>
      <div class="ui-music-box-desc">
        <h2 v-text="headline"></h2>
        <p v-for="text in desc"> {{ text }}</p>
      </div>
    </div>
    <div class="ui-releases">
      <ui-audio title="New Release" />
      <div class="ui-start-journey">
        <button @click="$router.push('/form')" class="ui-card-button">Start the journey now</button>
      </div>
    </div>
    <div class="ui-music-about">
      <h2 v-text="headline"></h2>
      <img src="/i/wave.png" alt="wave" />
      <p v-for="text in desc"> {{ text }}</p>
    </div>
  </div>
</template>
