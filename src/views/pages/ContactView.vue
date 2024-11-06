<script>
import Footer from "@/views/components/Footer.vue";
import Header from "@/views/components/Header.vue";
export default {
  components: {
    'ui-header': Header,
    'ui-footer': Footer
  }
}
</script>

<template>
  <ui-header class="relative z-50" />
  <ui-footer class="relative px-3 py-24 -mt-10 sm:px-0" />
</template>