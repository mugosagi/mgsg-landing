<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton
      class="inline-flex marquee-wrap w-full justify-center px-4 h-full py-0 text-xl lg:text-4xl font-bold"
    >
      <span class="sr-only">Hound homepage</span>
      <li class="h-full" aria-hidden="true">
        <ul v-for="el in [...Array(10).values()]" :key="el">
          MENU
        </ul>
      </li>
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y bg-bg"
      >
        <div class="px-1 py-1 flex flex-col gap-2 font-semibold text-fg">
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              <span aria-hidden="true">[0]</span>Process
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              <span aria-hidden="true">[1]</span>Blog
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              <span aria-hidden="true">[2]</span>About
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
