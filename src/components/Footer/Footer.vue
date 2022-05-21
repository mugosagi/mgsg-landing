<script setup>
import FooterMenu from './FooterMenu.vue';
</script>

<template>
  <footer class="max-w-screen-2xl w-full m-auto mt-20 px-5 pb-5 z-30">
    <ul class="flex flex-col text-2xl lg:text-7xl gap-5">
      <li><a href="tel:+123456789">+12[3456]789-012</a></li>
      <li><a href="mailto:hello@hello.com">mugosagi@gmail.com</a></li>
      <li><FooterMenu /></li>
    </ul>

    <div class="w-full h-0.5 bg-fg mt-7 mb-2"></div>
    <div
      class="flex flex-col lg:flex-row text-right lg:text-center justify-between lg:text-lg text-sm"
    >
      <span>
        Ripped by
        <a
          class="font-black"
          href="https://www.instagram.com/mugosagi/"
          target="_blank"
        >
          mgsg
        </a>
      </span>
      <p>Svobody Square, 8. Kharkiv, Ukraine</p>
      <p>©{{ new Date().getFullYear() }} nobody. All right isn't reserved.</p>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.droplink {
  @apply relative
          inline-block;
  min-width: fit-content;

  .submenu {
    background: var(--main-bg-color);
    border: 2px solid var(--main-fg-color);
    &.open {
      @apply !flex flex-col;
    }
  }
  .submenu {
    @apply absolute /* hidden */   z-10  invisible right-0 bottom-0 py-5 px-10 text-left gap-7;

    & li {
      @apply block p-0;
    }
    & a {
      @apply block py-3 px-5 whitespace-nowrap;
    }
  }
  &:hover .submenu {
    visibility: visible;
    height: auto;
    z-index: 11;
  }
  &:focus-within .submenu {
    visibility: visible;
    height: auto;
    z-index: 11;
  }
}
</style>
