<script setup>
import { defineProps, ref } from "vue";
let titleShow = ref(false);
const props = defineProps(["width"]);
</script>
<template>
  <div
    class="relative"
    @mouseenter.self=" titleShow = true"
    @mouseleave="titleShow = false "
  >
    <button
      class="
        p-1
        border-none
        outline-none
        hover:bg-white hover:bg-opacity-30
        rounded-md
        flex
        text-white
      "
    >
      <slot name="svg"></slot>
    </button>
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
          top-[60%]
          left-[50%]
          translate-x-[-50%] translate-y-[50%]
          z-50
        "
      >
        <span class="text-white text-xs">
          <slot name="title"></slot>
        </span>
      </div>
    </transition>
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