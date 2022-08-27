<script setup>
import { defineProps, ref } from "vue";
let titleShow = ref(false);
const props = defineProps(["width"]);
</script>
<template>
  <div @mouseenter="titleShow = true" @mouseleave="titleShow = false" class="hover:bg-gray-200">
    <div class="mr-2 flex justify-between p-1 relative">
      <div class="flex">
        <div class="mt-1">
          <slot name="svg"></slot>
        </div>
        <div class="p-1 text-gray-500">
          <slot></slot>
        </div>
      </div>
      <transition>
        <div
          v-show="titleShow"
          :class="width"
          class="
            bg-black
            rounded-md
            py-1
            px-2
            absolute
            left-[100%]
            translate-x-[-50%] translate-y-[50%]
          "
        >
          <span class="text-white text-xs">
            <slot name="title"></slot>
          </span>
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>