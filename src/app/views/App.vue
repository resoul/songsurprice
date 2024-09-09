<script>
import Header from "@/app/views/app/Header.vue";
import Footer from "@/app/views/components/Footer.vue";
import * as yup from "yup";
export default {
  name: "App",
  components: {
    'ui-header': Header,
    'ui-footer': Footer,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!").email(),
      name: yup.string().required("Name is required!"),
    });
    return {
      session: null,
      schema,
      loading: false,
      formData: {
        name: '',
        email: '',
      }
    }
  },
  mounted() {
    this.verifyOtp();
    this.$supabase.auth.getSession().then(({ data }) => {
      this.session = data.session;
    });
    this.$supabase.auth.onAuthStateChange((_, session) => {
      this.session = session;
    })
  },
  methods: {
    async submitForm() {
      this.loading = true
      try {
        this.schema.validateSync(this.formData)
        const { data, error } = await this.$supabase.auth.signInWithOtp({
          email: this.formData.email,
          options: {
            shouldCreateUser: true,
            emailRedirectTo: `${import.meta.env.VITE_BASE_APP_URL}?email=${this.formData.email}`,
            data: {
              name: this.formData.name,
            }
          }
        });
        if (error === null) {
          this.loading = false
          this.$notify({
            title: "Important message",
            text: "Please confirm your email",
            group: 'main',
            type: "warn",
          });
        }
      } catch ({message}) {
        this.loading = false
        this.$notify({
          title: "Important message",
          text: message,
          group: 'main',
          type: "error",
        });
      }
    },
    async verifyOtp() {
      if (this.$route.query && this.$route.query.email) {
        const email = this.$route.query.email;
        const token = this.$route.query.token;
        const { data: { session }, error } = await this.$supabase.auth.verifyOtp({
          email,
          token: token,
          type: 'email',
        })
        if (error === null) {
          const query = Object.assign({}, this.$route.query)
          delete query.email
          this.$router.replace({ query })

          this.$notify({
            title: "Important message",
            text: "Email Confirmed",
            group: 'main',
            type: "success",
          });
        }
      }
    }
  }
}
</script>

<template>
  <ui-header class="mb-8 relative z-50" />
  <div class="mb-8 sm:mb-20" v-if="session">
    <router-view />
  </div>
  <div class="mb-8 sm:mb-20" v-else>
    <div class="p-4 lg:p-0">
      <h2 class="text-4xl font-semibold text-center text-white font-heading sm:text-5xl">Let's create an account first</h2>
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
                    <span v-text="loading ? 'Loading' : 'Create'"></span>
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