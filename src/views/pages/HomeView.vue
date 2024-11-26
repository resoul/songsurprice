<script>
import Footer from "@/views/components/Footer.vue";
import Header from "@/views/components/Header.vue";
import CreateTrack from "@/views/pages/home/CreateTrack.vue";
import Features from "@/views/pages/home/Features.vue";
import HowItWork from "@/views/pages/home/HowItWork.vue";
import Testimonials from "@/views/pages/home/Testimonials.vue";
import { openModal } from "jenesius-vue-modal";
import Order from "@/views/components/Order.vue";
export default {
  components: {
    'ui-header': Header,
    'ui-footer': Footer,
    'ui-features': Features,
    'ui-testimonials': Testimonials,
    'ui-order': CreateTrack,
    'ui-how-it-work': HowItWork
  },
  methods: {
    async createOrder() {
      const modal = await openModal(Order)
      modal.on('order', () => {
        modal.close()
      })
    }
  }
}
</script>

<template>
  <ui-header class="relative" @create-order="createOrder" />
  <ui-features class="container relative px-4 mx-auto overflow-hidden max-w-7xl mt-8 sm:mt-20" />
  <ui-how-it-work class="container relative px-4 mx-auto overflow-hidden max-w-7xl mt-8 sm:mt-20" />
  <ui-order class="mb-8 sm:mb-20" @create-order="createOrder" />
  <ui-testimonials class="relative overflow-hidden mb-20" />
  <ui-footer class="relative px-3 py-24 -mt-10 sm:px-0" />
</template>