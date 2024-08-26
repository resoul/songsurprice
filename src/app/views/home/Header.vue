<script>
export default {
  name: "Header",
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<template>
  <section>
    <div class="flex items-center justify-between px-8 py-5 sm:px-24">
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="hidden w-auto lg:block">
            <ul class="flex items-center mr-10">
              <li class="text-lg text-white font-heading mr-9 hover:text-gray-200">
                <a href="/#features">Features</a>
              </li>
              <li class="text-lg text-white font-heading mr-9 hover:text-gray-200">
                <a href="/#how-it-works">How It Works</a>
              </li>
              <li class="text-lg text-white font-heading mr-9 hover:text-gray-200">
                <a href="/#testimonials" class="router-link-active router-link-exact-active">Testimonials</a>
              </li>
            </ul>
          </div>
          <div class="hidden w-auto lg:block">
            <router-link to="/" class="relative block px-5 py-2 overflow-hidden text-lg text-white border-2 group font-heading" style="border-image:linear-gradient(to left, #f8721d, #d347ef, #5146e6) 1;">
              <div class="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0" style="background-image:linear-gradient(to left, #f8721d, #d347ef, #5146e6);"></div>
              <p class="relative z-10 group-hover:text-white">Create a track</p>
            </router-link>
          </div>
          <div class="flex sm:hidden">
            <div class="hamburger" @click="showMenu = !showMenu">
              <div class="ZmYW_"></div>
              <div class="ZmYW_ jorTa"></div>
              <div class="ZmYW_"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ hidden : !showMenu }" class="fixed top-0 bottom-0 left-0 z-50 w-4/6 navbar-menu sm:max-w-xs">
      <div class="fixed inset-0 bg-gray-800 navbar-backdrop opacity-80"></div>
      <nav class="relative z-10 h-full py-8 bg-white px-9">
        <div class="flex flex-wrap justify-between h-full">
          <div class="w-full">
            <div class="flex items-center justify-between -m-2">
              <div class="w-auto p-2">
                <a class="inline-block" href="#"></a>
              </div>
              <div class="w-auto p-2">
                <button class="navbar-burger" @click="showMenu = !showMenu">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center w-full py-8">
            <ul>
              <li class="mb-12" style="display: none">
                <a class="text-lg font-medium text-gray-900 font-heading hover:text-gray-700" href="#">Features</a>
              </li>
              <li class="mb-12" style="display: none">
                <a class="text-lg font-medium text-gray-900 font-heading hover:text-gray-700" href="#">Solutions</a>
              </li>
              <li class="mb-12" style="display: none">
                <a class="text-lg font-medium text-gray-900 font-heading hover:text-gray-700" href="#">Resources</a>
              </li>
              <li style="display: none">
                <a class="text-lg font-medium text-gray-900 font-heading hover:text-gray-700" href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col justify-end w-full">
            <div class="flex flex-wrap">
              <div class="w-full">
                <button @click="showMenu = !showMenu" class="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                  <div class="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0 bg-gradient-cyan"></div>
                  <div class="px-5 py-2 bg-white rounded-lg">
                    <p class="relative z-10">Create track</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>