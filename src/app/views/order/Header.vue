<script>
export default {
  name: "Header"
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>