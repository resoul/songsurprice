<script>
export default {
  name: "Header"
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
                <router-link to="/">Home</router-link>
              </li>
            </ul>
          </div>
          <div class="hidden w-auto lg:block">
            <router-link :to="{ name: 'order' }" class="relative block px-5 py-2 overflow-hidden text-lg text-white border-2 group font-heading" style="border-image:linear-gradient(to left, #f8721d, #d347ef, #5146e6) 1;">
              <div class="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0" style="background-image:linear-gradient(to left, #f8721d, #d347ef, #5146e6);"></div>
              <p class="relative z-10 group-hover:text-white">Create a track</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>