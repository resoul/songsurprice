<script>
export default {
  name: "Testimonials"
}
</script>

<template>
  <section id="testimonials">
    <div class="container px-4 mx-auto">
      <div class="max-w-2xl mx-auto mb-20">
        <h2 class="mb-5 text-4xl font-semibold text-center text-white font-heading sm:text-5xl"> People
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">love</span> gifts </h2>
        <p class="text-center text-gray-100 sm:text-lg opacity-60">
          Our clients are happy to provide feedback about our platform
        </p>
      </div>
      <div class="w-10/12 mx-auto mb-4 -mt-12 sm:mb-0 sm:mt-0 sm:pt-6 sm:max-w-3xl">
        <div class="flex flex-wrap justify-center -m-6 divide-y divide-gray-600 md:-m-16 md:divide-y-0 md:divide-x">
          <div class="w-full p-6 md:w-1/2 md:p-16">
            <div class="flex flex-wrap -m-3">
              <div class="w-auto px-3 pt-5">
                <img class="rounded-lg w-14 h-14" src="@/assets/47053939_345844452866127_4549742191903244288_n.jpg" alt="">
              </div>
              <div class="flex-1 p-3">
                <p class="mb-4 text-sm text-gray-500">
                  <span class="font-serif text-sm sm:text-xl px-0.5">“</span>
                  <i>Using this platform to order a music track was an incredible experience! The process was seamless, and the final result exceeded my expectations. The music perfectly captured the vibe I was looking for. Highly recommend!</i>
                  <span class="font-serif text-xl px-0.5">”</span>
                </p>
                <p class="mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500"> Mark Roberts</p>
              </div>
            </div>
          </div>
          <div class="w-full p-6 md:w-1/2 md:p-16">
            <div class="flex flex-wrap -m-3">
              <div class="w-auto px-3 pt-5">
                <img class="rounded-lg w-14 h-14" src="@/assets/49329050_385215318706403_8704988687026356224_n.jpg" alt="">
              </div>
              <div class="flex-1 p-3">
                <p class="mb-4 text-sm text-gray-500">
                  <span class="font-serif text-sm sm:text-xl px-0.5">“</span>
                  <i>I’m absolutely thrilled with the custom music track I ordered! The platform made it easy to communicate my vision, and the final product was exactly what I wanted. The quality and creativity were top-notch. I’ll definitely be using this service again!</i>
                  <span class="font-serif text-xl px-0.5">”</span>
                </p>
                <p class="mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500"> Vence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>