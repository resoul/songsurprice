<script>
export default {
  name: "CreateTrack",
  emits: ['createOrder'],
  methods: {
    createOrderModal() {
      this.$emit('createOrder')
    }
  }
}
</script>

<template>
  <div>
    <div class="p-4 lg:p-0">
      <h2 class="text-4xl font-semibold text-center text-white font-heading sm:text-5xl">
        Pay <span class="relative inline-flex">
        <h2 class="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">once.</h2>
      </span> Love forever. </h2>
      <div class="flex items-center justify-center">
        <div class="relative inline-flex items-center justify-center mt-6 group">
          <div class="absolute transition-all duration-200 rounded-full group-hover:shadow-purple-500/50 -inset-px bg-gradient-to-r from-purple-500 to-red-500 group-hover:shadow-lg"></div>
          <button @click="createOrderModal" class="relative inline-flex items-center justify-center px-8 py-3 text-sm font-normal text-white bg-black border border-transparent rounded-full cursor-pointer hover:bg-gray-900 md:text-xs lg:text-base">
            Order Your Exclusive Gift
          </button>
        </div>
      </div>
      <div class="mt-14 grid max-w-5xl grid-cols-1 gap-4 mx-auto">
        <div class="flex flex-col space-y-5 rounded-md bg-[#030405] p-8 md:col-span-2" style="display: none">
          <div class="flex items-center justify-start">
            <h2 class="w-10/12 text-4xl font-semibold text-gray-100"> Our simple <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">things</span>
            </h2>
          </div>
          <div class="pt-6 space-y-5 sm:pt-0">
            <div class="flex items-start justify-start space-x-4">
              <div class="flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg" style="background-color:rgb(247, 149, 51);">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-start contents-center">
                  <h3 class="m-0 font-semibold text-gray-200">134+ happy customers</h3>
                </div>
                <p class="text-sm text-gray-400">We make hundreds of music gift tracks.</p>
              </div>
            </div>
            <div class="flex items-start justify-start space-x-4">
              <div class="flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg" style="background-color:rgb(243, 112, 85);">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
                </svg>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-start contents-center">
                  <h3 class="m-0 font-semibold text-gray-200">Many features</h3>
                </div>
                <p class="text-sm text-gray-400">Create a memo and we will put intro track.</p>
              </div>
            </div>
            <div class="flex items-start justify-start space-x-4">
              <div class="flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg" style="background-color:rgb(239, 78, 123);">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                </svg>
              </div>
              <div class="flex flex-col mb-10">
                <div class="flex items-center justify-start contents-center">
                  <h3 class="m-0 font-semibold text-gray-200">Streaming</h3>
                </div>
                <p class="text-sm text-gray-400">Enjoy your track in all major streaming platforms</p>
              </div>
            </div>
            <div class="!-mt-5">
              <div class="flex items-center justify-start space-x-2">
                <p class="text-sm opacity-60">Used by</p>
                <div class="flex -space-x-3 overflow-hidden">
                  <img src="@/assets/49329050_385215318706403_8704988687026356224_n.jpg" alt="Avatar 1" class="h-8 w-8 rounded-full border-2 border-white/30">
                  <img src="@/assets/47053939_345844452866127_4549742191903244288_n.jpg" alt="Avatar 2" class="h-8 w-8 rounded-full border-2 border-white/30">
                  <img src="@/assets/49329050_385215318706403_8704988687026356224_n.jpg" alt="Avatar 4" class="h-8 w-8 rounded-full border-2 border-white/30">
                  <img src="@/assets/47053939_345844452866127_4549742191903244288_n.jpg" alt="Avatar 5" class="h-8 w-8 rounded-full border-2 border-white/30">
                </div>
              </div>
              <p class="text-sm mt-1.5 opacity-60"> + 100 other <span class="font-medium">makers</span>, <span class="font-medium">music creators</span> and <span class="font-medium">happy peoples</span>! </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col px-3 -mt-6 sm:px-0 sm:mt-0">
          <div class="relative flex-1 bg-gray-900 border border-black rounded-xl">
            <div class="flex flex-col items-center justify-center h-full p-6 text-center md:p-8">
              <div class="flex items-center justify-start" style="padding-bottom: 25px">
                <h2 class="text-4xl font-semibold text-gray-100"> Our simple <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">things</span>
                </h2>
              </div>
              <div class="pt-6 space-y-5 sm:pt-0">
                <div class="flex items-start justify-start space-x-4">
                  <div class="flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg" style="background-color:rgb(247, 149, 51);">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col">
                    <div class="flex items-center justify-start contents-center">
                      <h3 class="m-0 font-semibold text-gray-200">134+ happy customers</h3>
                    </div>
                    <p class="text-sm text-gray-400">We make hundreds of music gift tracks.</p>
                  </div>
                </div>
                <div class="flex items-start justify-start space-x-4">
                  <div class="flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg" style="background-color:rgb(243, 112, 85);">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col">
                    <div class="flex items-center justify-start contents-center">
                      <h3 class="m-0 font-semibold text-gray-200">Many features</h3>
                    </div>
                    <p class="text-sm text-gray-400">Create a memo and we will put intro track.</p>
                  </div>
                </div>
                <div class="flex items-start justify-start space-x-4">
                  <div class="flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg" style="background-color:rgb(239, 78, 123);">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col mb-10">
                    <div class="flex items-center justify-start contents-center">
                      <h3 class="m-0 font-semibold text-gray-200">Streaming</h3>
                    </div>
                    <p class="text-sm text-gray-400">Enjoy your track in all major streaming platforms</p>
                  </div>
                </div>
                <div class="!-mt-5">
                  <div class="flex items-center justify-start space-x-2">
                    <p class="text-sm opacity-60">Used by</p>
                    <div class="flex -space-x-3 overflow-hidden">
                      <img src="@/assets/49329050_385215318706403_8704988687026356224_n.jpg" alt="Avatar 1" class="h-8 w-8 rounded-full border-2 border-white/30">
                      <img src="@/assets/47053939_345844452866127_4549742191903244288_n.jpg" alt="Avatar 2" class="h-8 w-8 rounded-full border-2 border-white/30">
                      <img src="@/assets/49329050_385215318706403_8704988687026356224_n.jpg" alt="Avatar 4" class="h-8 w-8 rounded-full border-2 border-white/30">
                      <img src="@/assets/47053939_345844452866127_4549742191903244288_n.jpg" alt="Avatar 5" class="h-8 w-8 rounded-full border-2 border-white/30">
                    </div>
                  </div>
                  <p class="text-sm mt-1.5 opacity-60"> + 100 other <span class="font-medium">makers</span>, <span class="font-medium">music creators</span> and <span class="font-medium">happy peoples</span>! </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>