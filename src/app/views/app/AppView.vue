<script>
import * as yup from "yup";
export default {
  name: "AppView",
  data() {
    return {}
  },
  mounted() {
    // console.log(this.$supabase);
  },
  methods: {}
}
</script>

<template>
  <div class="p-4 lg:p-0">
    <span @click="$router.push({ name : 'app-genre' })">Step 1</span>
    <span @click="$router.push({ name : 'app-record-audio' })">Step 2</span>
    <span @click="$router.push({ name : 'app-compose' })">Step 3</span>
  </div>
</template>