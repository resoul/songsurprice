<script>
export default {
  name: "Form",
  data() {
    return {
      name: '',
      email: '',
      description: '',
    }
  },
  methods: {
    submit() {
      const text = `name: ${this.name}, email: ${this.email}, text: ${this.description}`

      const form = new FormData
      form.append('text', text)
      form.append('chat_id', import.meta.env.VITE_TELEGRAM_CHAT)

      fetch(import.meta.env.VITE_TELEGRAM + '/sendMessage', {
        method: 'POST',
        body: form
      })

      this.name = ''
      this.email = ''
      this.description = ''
    }
  }
}
</script>

<template>
  <div class="form-order">
    <h2>Let as know about you gift</h2>
    <form @submit.prevent="submit">
      <div class="ui-form-group">
        <input type="text" required placeholder="Name" v-model="name" />
      </div>
      <div class="ui-form-group">
        <input type="email" required placeholder="Email" v-model="email" />
      </div>
      <div class="ui-form-group">
        <textarea placeholder="Describe your song" required v-model="description"></textarea>
      </div>
      <button class="ui-card-button">Submit</button>
    </form>
  </div>
</template>
<style scoped lang="scss">
.form-order {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
  h2 {
    color: #fff;
    margin: 0 0 10px;
  }
  .ui-form-group {
    margin-bottom: 10px;
    input {
      width: 100%;
      padding: 10px 5px;
      display: block;
      border-radius: 12px;
      border: 1px solid hsla(160, 100%, 37%, 1);
    }
    textarea {
      width: 100%;
      padding: 10px 5px;
      border-radius: 12px;
      border: 1px solid hsla(160, 100%, 37%, 1);
      max-width: 550px;
      max-height: 180px;
    }
  }
}
</style>
