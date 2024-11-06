<script>
import { container } from "jenesius-vue-modal";
export default {
  components: {
    WidgetContainerModal : container
  }
}
</script>
<template>
  <router-view />
  <notifications position="bottom right" group="custom" classes="my-notification" />
  <notifications position="bottom right" group="main" />
  <widget-container-modal />
</template>