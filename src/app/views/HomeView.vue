<script>
import Header from "@/app/views/home/Header.vue";
import Features from "@/app/views/home/Features.vue";
import HowItWork from "@/app/views/home/HowItWork.vue";
import Footer from "@/app/views/components/Footer.vue";
import Testimonials from "@/app/views/home/Testimonials.vue";
import CreateTrack from "@/app/views/home/CreateTrack.vue";

export default {
  name: "HomeView",
  components: {
    'ui-header': Header,
    'ui-features': Features,
    'ui-testimonials': Testimonials,
    'ui-order': CreateTrack,
    'ui-footer': Footer,
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