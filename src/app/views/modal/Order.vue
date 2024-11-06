<template>
  <div class="modal-window modal-item widget__modal-wrap">
    <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600 font-heading" style="cursor: pointer;text-align: center">{{ title }}</h3>
    <div class="relative rounded-xl overflow-auto p-8">
      <form @submit.prevent="submitForm">
        <div class="grid max-w-5xl grid-cols-1 gap-4 mx-auto md:grid-cols-1">
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
                    <label for="promt" class="block mb-2 text-sm font-medium text-gray-900 text-white">Description</label>
                    <textarea style="max-height: 250px;min-height: 160px" placeholder="Please describe your track" v-model="formData.desc" id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col px-3 -mt-6 sm:px-0 sm:mt-0">
            <div class="relative flex-1 rounded-xl">
              <div class="flex flex-col items-center justify-center h-full text-center">
                <div class="relative inline-flex items-center justify-center group">
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
</template>
<script>
import * as yup from "yup";
export default {
  props: {
    title: String
  },
  emits: ['promt'],
  data() {
    const schema = yup.object().shape({
      desc: yup.string().required("Description is required!").min(10, 'Message must be at least 10 characters'),
      email: yup.string().required("Email is required!").email(),
      name: yup.string().required("Name is required!"),
    });

    return {
      schema,
      loading: false,
      formData: {
        desc: '',
        name: '',
        email: '',
      }
    }
  },
  mounted() {
  },
  methods: {
    submitForm() {
      this.loading = true
      try {
        this.schema.validateSync(this.formData)
        this.$emit('promt', this.formData.name, this.formData.email, this.formData.desc)
        this.loading = false
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