<script>
export default {
  name: "App"
}
</script>
<template>
  <router-view />
  <notifications position="bottom right" group="custom" classes="my-notification" />
  <notifications position="bottom right" group="main" />
</template>
