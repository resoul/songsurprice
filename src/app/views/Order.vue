<script>
export default {
  name: "Order",
  data() {
    return {
      currentPage: 0,
      minPage: 0,
      maxPage: 3,
      titles: ['Details', 'Compose', 'Order', 'Completed']
    }
  },
  methods: {
    setActiveClass(index) {
      if (index === this.currentPage) {
        return 'current'
      } else if (index > this.currentPage) {
        return 'pending'
      }

      return 'completed'
    },
    submit() {
      if (this.maxPage !== this.currentPage) this.currentPage++;
    }
  }
}
</script>

<template>
  <div class="ui-stepper">
    <div class="ui-stepper-nav">
      <div v-for="(title, index) in titles" class="ui-stepper-item" :class="setActiveClass(index)">
        <h3 class="ui-stepper-title" v-text="title"></h3>
      </div>
    </div>
    <form class="ui-stepper-form" @submit.prevent="submit">
      <button v-text="currentPage === 3 ? 'Submit' : 'Next'"></button>
    </form>
  </div>
</template>
