<script>
import Header from "@/app/views/contact/Header.vue";
import Footer from "@/app/views/components/Footer.vue";
export default {
  name: "ContactView",
  components: {
    'ui-header': Header,
    'ui-footer': Footer,
  }
}
</script>

<template>
  <ui-header class="relative z-50" />
  <ui-footer class="relative px-3 py-24 -mt-10 sm:px-0" />
</template>