<script>
export default {
  name: "Header",
  data() {
    return {
      session: null
    }
  },
  mounted() {
    this.$supabase.auth.getSession().then(({ data }) => {
      this.session = data.session;
    });
    this.$supabase.auth.onAuthStateChange((_, session) => {
      this.session = session;
    })
  },
  methods: {
    async signOut() {
      const { error } = await this.$supabase.auth.signOut()
      if (error === null) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<template>
  <section>
    <div class="flex items-center justify-between px-8 py-5 sm:px-24">
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="hidden w-auto lg:block">
            <ul class="flex items-center mr-10">
              <li class="text-lg text-white font-heading mr-9 hover:text-gray-200">
                <router-link to="/">Home</router-link>
              </li>
              <li class="text-lg text-white font-heading mr-9 hover:text-gray-200" v-if="session">
                <span class="text-white" style="cursor: pointer" @click="signOut">Sign Out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>