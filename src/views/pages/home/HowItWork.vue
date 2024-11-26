<script>
import Curves from "@/components/Curves.vue";
import IdeaIcon from "@/components/IdeaIcon.vue";
import SettingIcon from "@/components/SettingIcon.vue";
import LikeIcon from "@/components/LikeIcon.vue";

export default {
  name: "HowItWork",
  components: {
    'ui-icon-idea': IdeaIcon,
    'ui-icon-setting': SettingIcon,
    'ui-icon-like': LikeIcon,
    'ui-icon-curves': Curves
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
                  <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading"> Chose track </h3>
                </div>
                <p class="text-base text-gray-400"> Chose your track. Or let us create exclusive track for you. Our library is growing by the day.</p>
              </div>
              <div class="mb-11 lg:max-w-sm">
                <div class="flex items-center justify-start mb-4">
                  <ui-icon-setting class="mr-2 w-[35px] h-[35px] bg-slate-900 rounded-md flex justify-center items-center" />
                  <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading"> Record audio message </h3>
                </div>
                <p class="text-base text-gray-400"> Use your micro to record your audio message. Then we combine your track & your message. Add your picture for Album cover.</p>
              </div>
              <div class="lg:max-w-sm">
                <div class="flex items-center justify-start mb-4">
                  <ui-icon-like class="mr-2 w-[35px] h-[35px] bg-slate-900 rounded-md flex justify-center font-semibold items-center" />
                  <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading"> Pay once, love forever </h3>
                </div>
                <p class="text-base text-gray-400"> Not another annoying subscription. Get lifetime access to your track in all major streaming platforms. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:ml-auto mx-auto w-10/12 lg:absolute lg:top-[4rem] lg:right-0 lg:w-1/2 max-w-max overflow-hidden bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-600 rounded-3xl demo-video-card">
      <img src="@/assets/spotify.png" alt="" class="relative transition duration-500 ease-in-out transform left-8 top-7 hover:-translate-x-5 hover:-translate-y-3 rounded-xl" width="600" height="280">
    </div>
  </section>
</template>