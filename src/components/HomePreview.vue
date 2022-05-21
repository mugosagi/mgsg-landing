<template>
  <div class="min-h-screen w-full flex flex-col px-5">
    <div class="flex flex-col relative max-w-screen-2xl w-full mx-auto">
      <h1
        ref="title"
        class="title"
        :style="`text-shadow: ${titlePoints.rXP / 50}px ${
          titlePoints.rYP / 10
        }px rgba(227,6,19,.8), ${titlePoints.rXP / 10}px ${
          titlePoints.rYP / 60
        }px rgba(0,159,227,.7)`"
        @mousemove="titleMove"
      >
        <div>Lorem ipsum</div>
        <div class="text-right">dolor sit amet</div>
        <div>consectetur.</div>
      </h1>

      <div class="quote-block">
        <p class="quote">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          asperiores quasi? Aspernatur suscipit iure nam ea repellendus
          blanditiis, eos, corporis et nihil quos autem, facere eius nisi
          numquam magni hic.
        </p>
      </div>
    </div>

    <img
      src="https://picsum.photos/1000"
      class="mx-auto object-cover mt-14"
      alt="Preview image"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const titlePoints = reactive({ rYP: 0, rXP: 0 });
const title = ref();

const titleMove = (e) => {
  titlePoints.rXP =
    e.pageX - title.value.offsetLeft - title.value.clientWidth / 2;
  titlePoints.rYP =
    e.pageY - title.value.offsetTop - title.value.clientHeight / 2;
};
</script>

<style lang="scss" scoped>
.title {
  @apply text-4xl lg:text-9xl  mr-auto font-semibold flex flex-col gap-5 mt-5 mb-auto lg:w-full w-1/2 ml-0 lg:ml-auto;
}

.quote-block {
  @apply absolute top-14 right-0 hidden xl:flex flex-row-reverse;

  .quote {
    @apply px-10 mb-24 block w-max relative text-justify max-w-xs text-xs;

    &::before {
      content: open-quote;
      top: 0;
      left: 0;
    }

    &::after {
      content: close-quote;
      bottom: 0;
      right: 0;
    }

    &::before,
    &::after {
      quotes: '«' '»' '‹' '›';
      line-height: 1.5;
      font-size: 3em;
      text-align: center;
      position: absolute;
    }
  }
}
</style>
