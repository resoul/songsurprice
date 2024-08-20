<script>
import Header from "@/app/views/home/Header.vue";
import Features from "@/app/views/home/Features.vue";

export default {
  name: "HomeView",
  components: {
    'ui-header': Header,
    'ui-features': Features
  }
}
</script>

<template>
  <ui-header class="relative z-50" />
  <ui-features class="container relative px-4 mx-auto overflow-hidden max-w-7xl mt-8 sm:mt-20" />
</template>