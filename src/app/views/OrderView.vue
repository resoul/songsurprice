<script>
import Header from "@/app/views/order/Header.vue";
import Footer from "@/app/views/components/Footer.vue";
import * as yup from "yup";
export default {
  name: "OrderView",
  components: {
    'ui-header': Header,
    'ui-footer': Footer,
  },
  data() {
    const schema = yup.object().shape({
      promt: yup.string().required("Promt is required!").min(10, 'Message must be at least 25 characters'),
      email: yup.string().required("Email is required!").email(),
      name: yup.string().required("Name is required!"),
    });

    return {
      schema,
      loading: false,
      formData: {
        promt: '',
        name: '',
        email: '',
      }
    }
  },
  methods: {
    submitForm() {
      this.loading = true
      try {
        this.schema.validateSync(this.formData)
        const text = `name: ${this.formData.name}, email: ${this.formData.email}, text: ${this.formData.promt}`
        const form = new FormData
        form.append('text', text)
        form.append('chat_id', import.meta.env.VITE_TELEGRAM_CHAT)
        fetch(import.meta.env.VITE_TELEGRAM + '/sendMessage', {
          method: 'POST',
          body: form
        }).then(() => {
          this.loading = false
          this.$notify({
            text: "We will back to you shortly",
            group: 'custom'
          });
        })
      } catch ({ message }) {
        this.loading = false
        this.$notify({
          title: "Important message",
          text: message,
          group: 'main',
          type: "error",
        });
      }
    }
  }
}
</script>

<template>
  <ui-header class="mb-8 relative z-50" />
  <div class="mb-8 sm:mb-20">
    <div class="p-4 lg:p-0">
      <h2 class="text-4xl font-semibold text-center text-white font-heading sm:text-5xl">Create a <span class="relative inline-flex"><h2 class="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">track</h2></span></h2>
      <form @submit.prevent="submitForm">
      <div class="mt-14 grid max-w-5xl grid-cols-1 gap-4 mx-auto md:grid-cols-1">
        <div class="flex flex-col space-y-5 rounded-md bg-[#030405] p-8 md:col-span-2">
          <div class="pt-6 space-y-5 sm:pt-0">
            <div class="flex items-start justify-start space-x-4">
              <div class="max-w-sm mx-auto w-full">
                <div class="mb-5">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 text-white">Name</label>
                  <input v-model="formData.name" id="name" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mb-5">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-white">Email</label>
                  <input v-model="formData.email" id="email" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mb-5">
                  <label for="promt" class="block mb-2 text-sm font-medium text-gray-900 text-white">Promt</label>
                  <textarea style="max-height: 250px;min-height: 160px" placeholder="Please describe your track" v-model="formData.promt" id="promt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col px-3 -mt-6 sm:px-0 sm:mt-0">
          <div class="relative flex-1 rounded-xl">
            <div class="flex flex-col items-center justify-center h-full p-6 text-center md:p-8">
              <div class="relative inline-flex items-center justify-center mt-6 group">
                <div class="absolute transition-all duration-200 rounded-full group-hover:shadow-purple-500/50 -inset-px bg-gradient-to-r from-purple-500 to-red-500 group-hover:shadow-lg"></div>
                <button type="submit" class="text-white bg-black border border-transparent hover:bg-gray-900 md:text-xs lg:text-base rounded-full cursor-pointer relative inline-flex items-center justify-center px-8 py-3 text-sm font-normal" :disabled="loading">
                  <span v-text="loading ? 'Loading' : 'Submit'"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
  <ui-footer class="relative px-3 py-24 -mt-10 sm:px-0" />
</template>