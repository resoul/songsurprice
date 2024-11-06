<script>
import Curves from "@/app/views/home/components/Curves.vue";
import IdeaIcon from "@/app/views/home/components/IdeaIcon.vue";
import SettingIcon from "@/app/views/home/components/SettingIcon.vue";
import LikeIcon from "@/app/views/home/components/LikeIcon.vue";

import { openModal } from "jenesius-vue-modal";
import SelectTrack from "@/app/views/modal/SelectTrack.vue";
import RecordVoice from "@/app/views/modal/RecordVoice.vue";
import Order from "@/app/views/modal/Order.vue";

export default {
  name: "HowItWork",
  components: {
    'ui-icon-idea': IdeaIcon,
    'ui-icon-setting': SettingIcon,
    'ui-icon-like': LikeIcon,
    'ui-icon-curves': Curves,
    SelectTrack
  },
  data() {
    return {
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
    async selectGenre() {
      const modal = await openModal(SelectTrack, { title: "Chose track" })
      modal.on('audioItem', (id, name, publicUrl) => {
        this.order.id = id
        this.order.name = name
        this.order.url = publicUrl
        modal.close()
      })
    },
    async selectRecordMessage() {
      const modal = await openModal(RecordVoice, { title: "Record audio message" })
      modal.on('voiceItem', (duration, blob) => {
        this.order.duration = duration
        this.order.blob = blob
        modal.close()
      })
    },
    async createOrder() {
      const modal = await openModal(Order, { title: "Order" })
      modal.on('promt', (name, email, desc) => {
        const caption = `name: ${name}, email: ${email}, text: ${desc}, id: ${this.order.id}, uri: ${this.order.url}, track-name: ${this.order.name}`
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
        })
        modal.close()
      })


      // const { data, error } = await this.$supabase.storage
      //     .from('messages')
      //     .upload('file_path1.webm', blob)
    }
  }
}
</script>

<template>
  <section id="how-it-works" class="container relative px-4 mx-auto overflow-hidden max-w-7xl mt-8 sm:mt-20">
    <div class="container px-4 mx-auto mb-12">
      <div class="flex flex-wrap -m-6">
        <div class="w-full p-6">
          <div class="relative flex flex-wrap -m-6">
            <div class="absolute items-center justify-center hidden w-full h-full sm:flex right-20">
              <ui-icon-curves />
            </div>
            <div class="w-full p-6 lg:w-1/2">
              <div class="mb-11 lg:max-w-sm">
                <div class="flex items-center justify-start mb-4">
                  <ui-icon-idea class="mr-2 w-[35px] h-[35px] bg-slate-900 rounded-md flex justify-center items-center" />
                  <h3 @click="selectGenre" class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading" style="cursor: pointer"> Chose track </h3>
                </div>
                <p class="text-base text-gray-400"> Chose your track. Or let us create exclusive track for you. Our library is growing by the day.</p>
              </div>
              <div class="mb-11 lg:max-w-sm">
                <div class="flex items-center justify-start mb-4">
                  <ui-icon-setting class="mr-2 w-[35px] h-[35px] bg-slate-900 rounded-md flex justify-center items-center" />
                  <h3 @click="selectRecordMessage" class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading" style="cursor: pointer"> Record audio message </h3>
                </div>
                <p class="text-base text-gray-400"> Use your micro to record your audio message. Then we combine your track & your message. Add your picture for Album cover.</p>
              </div>
              <div class="lg:max-w-sm">
                <div class="flex items-center justify-start mb-4">
                  <ui-icon-like class="mr-2 w-[35px] h-[35px] bg-slate-900 rounded-md flex justify-center font-semibold items-center" />
                  <h3 @click="createOrder" class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading" style="cursor: pointer"> Pay once, love forever </h3>
                </div>
                <p class="text-base text-gray-400"> Not another annoying subscription. Get lifetime access to your track in all major streaming platforms. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:ml-auto mx-auto w-10/12 lg:absolute lg:top-[4rem] lg:right-0 lg:w-1/2 max-w-max overflow-hidden bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-600 rounded-3xl demo-video-card">
      <img src="@/app/assets/spotify.png" alt="" class="relative transition duration-500 ease-in-out transform left-8 top-7 hover:-translate-x-5 hover:-translate-y-3 rounded-xl" width="600" height="280">
    </div>
  </section>
</template>