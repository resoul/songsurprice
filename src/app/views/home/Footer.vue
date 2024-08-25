<script>
export default {
  name: "Footer"
}
</script>

<template>
  <section>
    <div class="container relative z-10 px-4 mx-auto">
      <div class="flex flex-wrap -m-6">
        <div class="w-full px-6 py-6 md:w-1/2 lg:w-5/12 md:px-20">
          <div class="flex flex-col justify-between h-full max-w-sm">
            <p class="text-sm text-gray-200 mb-6">
              With a passion for music, we deliver exceptional services that resonate with our clients. Trusted by many satisfied customers, we transform musical visions into reality, creating harmony and success together.
            </p>
          </div>
        </div>
        <div class="w-full p-6 md:w-1/2 lg:w-2/12">
          <div class="h-full">
            <h3 class="text-base font-medium text-gray-500 mb-7 font-heading tracking-px">Company</h3>
            <ul>
              <li class="mb-4">
                <a class="text-base font-medium text-white font-heading hover:text-gray-200" href="/#features">Features</a>
              </li>
              <li class="mb-4">
                <a class="text-base font-medium text-white font-heading hover:text-gray-200" href="/#how-it-works">How It Works</a>
              </li>
              <li class="mb-4" style="display: none">
                <a href="/blog" class="text-base font-medium text-white font-heading hover:text-gray-200">Blog</a>
              </li>
              <li class="mb-4" style="display: none">
                <a href="/terms" class="text-base font-medium text-white font-heading hover:text-gray-200">Terms</a>
              </li>
              <li class="mb-4" style="display: none">
                <a href="/privacy" class="text-base font-medium text-white font-heading hover:text-gray-200">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full p-6 md:w-1/2 lg:w-2/12">
          <div class="h-full">
            <h3 class="text-base font-medium text-gray-500 mb-7 font-heading tracking-px">Support</h3>
            <ul>
              <li class="mb-4">
                <a class="text-base font-medium text-white font-heading hover:text-gray-200" href="mailto:support@songsurprise.net">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full p-6 md:w-1/2 lg:w-3/12">
          <div class="flex flex-col justify-between h-full">
            <div>
              <h3 class="text-base font-medium text-gray-500 mb-7 font-heading tracking-px">About</h3>
              <p>
                <a href="https://twitter.com/" class="hover:opacity-100 opacity-80" target="_blank">
                  Twitter <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-fuchsia-300 opacity-90 to-indigo-400">SongSurprise</span>
                </a>
              </p>
              <p>
                <a href="https://instagram.com/" class="hover:opacity-100 opacity-80" target="_blank">
                  Instagram <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-fuchsia-300 opacity-90 to-indigo-400">SongSurprise</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>