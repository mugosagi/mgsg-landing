<template>
  <div class="w-full flex mt-20 flex-col">
    <div class="marquee sticky top-5 z-10"><h2>Projects</h2></div>
    <div class="max-w-screen-2xl flex flex-col mx-auto w-full z-20">
      <a
        href="#"
        v-for="i in 20"
        :key="i"
        class="my-5"
        :class="`${i % 2 ? 'mr-auto' : 'ml-auto'}`"
        :style="`margin-${!(i % 2) ? 'right' : 'left'}: ${Math.floor(
          Math.random() * 10
        )}rem`"
      >
        <img
          :src="`https://picsum.photos/500?random=${i}`"
          class="object-cover"
          alt="Project image"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const amount = ref(10);

onMounted(() => (amount.value = ~~(window.innerWidth / 110)));
</script>

<style lang="scss" scoped>
$tw: 60vw;

.marquee {
  margin: 2rem 0;
  font-size: 10vw;
  overflow: hidden;
}

.marquee--long {
  font-size: 1.25vw;
}

.marquee h2 {
  @apply text-fg;
  display: inline-block;
  white-space: nowrap;
  width: $tw;
  text-shadow: $tw 0 currentColor, calc($tw * 2) 0 currentColor,
    calc($tw * 3) 0 currentColor, calc($tw * 6) 0 currentColor;

  will-change: transform;
  animation: marquee 3s linear infinite;
  animation-play-state: running;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee h2 {
    animation: none;
  }
}
</style>
