<script setup>
import HeaderMenu from './HeaderMenu.vue';
</script>

<template>
  <header
    class="w-full lg:px-5 fixed top-0 lg:top-5 inset-0 h-14 lg:h-20 z-20 px-5"
  >
    <nav
      class="max-w-screen-2xl mx-auto flex items-center h-full border-2 border-fg bg-bg"
    >
      <a class="text-xl lg:text-4xl marquee-wrap" href="#">
        <span class="sr-only">Hound homepage</span>
        <li class="h-full" aria-hidden="true">
          <ul v-for="el in [...Array(10).values()]" :key="el">
            [M]GSG
          </ul>
        </li>
      </a>
      <div class="h-full w-0.5 bg-fg"></div>
      <div class="flex-1"></div>
      <div class="uppercase items-center gap-7 hidden lg:flex">
        <a class="link" href="#">
          <span aria-hidden="true">[0]</span>Process
        </a>
        <a class="link" href="#"> <span aria-hidden="true">[1]</span>Blog </a>
        <a class="link" href="#"> <span aria-hidden="true">[2]</span>About </a>
      </div>
      <div class="h-full w-0.5 bg-fg ml-8"></div>
      <a class="text-xl uppercase marquee-wrap !hidden lg:!block" href="#">
        <span class="sr-only">Get a quote page</span>
        <li aria-hidden="true">
          <ul v-for="el in [...Array(10).values()]" :key="el">
            [get a quote]
          </ul>
        </li>
      </a>
      <HeaderMenu class="h-full block lg:hidden" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.link {
  @apply text-lg font-medium hover:font-normal focus-within:font-light;
}
</style>
