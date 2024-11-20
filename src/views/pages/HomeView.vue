<script>
import Footer from "@/views/components/Footer.vue";
import Header from "@/views/components/Header.vue";
import CreateTrack from "@/views/pages/home/CreateTrack.vue";
import Features from "@/views/pages/home/Features.vue";
import HowItWork from "@/views/pages/home/HowItWork.vue";
import Testimonials from "@/views/pages/home/Testimonials.vue";
export default {
  components: {
    'ui-header': Header,
    'ui-footer': Footer,
    'ui-features': Features,
    'ui-testimonials': Testimonials,
    'ui-order': CreateTrack,
    'ui-how-it-work': HowItWork
  }
}
</script>

<template>
  <ui-header class="relative z-50" />
  <ui-features class="container relative px-4 mx-auto overflow-hidden max-w-7xl mt-8 sm:mt-20" />
  <ui-how-it-work class="container relative px-4 mx-auto overflow-hidden max-w-7xl mt-8 sm:mt-20" />
  <ui-order class="-mt-12 mb-8 sm:mb-20" />
  <ui-testimonials class="relative overflow-hidden mb-20" />
  <ui-footer class="relative px-3 py-24 -mt-10 sm:px-0" />
</template>