<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="inline-flex w-full justify-center h-full py-0">
      External links
      <svg
        aria-hidden="true"
        class="lg:w-16 lg:h-16 h-6 w-6 ml-2"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
        />
      </svg>
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
        class="absolute right-0 bottom-full text-xl mt-2 w-56 origin-top-right divide-y bg-bg"
      >
        <div class="px-1 py-1 flex flex-col gap-2 font-semibold">
          <MenuItem v-slot="{ active }">
            <a
              aria-label="Behance link"
              href="#"
              target="_blank"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              [BE]
              <svg aria-hidden="true" class="w-6 h-6 ml-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                />
              </svg>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              aria-label="Youtube link"
              href="#"
              target="_blank"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              [YT]
              <svg aria-hidden="true" class="w-6 h-6 ml-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                />
              </svg>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              aria-label="Facebook link"
              href="#"
              target="_blank"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              [FB]
              <svg aria-hidden="true" class="w-6 h-6 ml-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                />
              </svg>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              aria-label="Dribble link"
              href="#"
              target="_blank"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              [DRBL]
              <svg aria-hidden="true" class="w-6 h-6 ml-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                />
              </svg>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              aria-label="Instagram link"
              href="#"
              target="_blank"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              [INSTG]
              <svg aria-hidden="true" class="w-6 h-6 ml-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                />
              </svg>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              aria-label="Vimeo link"
              href="#"
              target="_blank"
              :class="{ 'link-hover': active }"
              class="link flex w-full items-center px-2 py-2"
            >
              [VIMEO]
              <svg aria-hidden="true" class="w-6 h-6 ml-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
                />
              </svg>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
