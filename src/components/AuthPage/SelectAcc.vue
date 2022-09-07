<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs()
</script>

<template>
  <div
  v-bind="attrs"
    class="
      border
      rounded-xl
      hover:bg-gray-200
      transition-all
      flex
      cursor-pointer
      items-center
      md:pl-24 md:pt-2.5 md:pb-2.5
    "
  >
    <slot name="logo"></slot>
    <p class="md:ml-3 font-bold text-lg">
      <slot name="select"></slot>
    </p>
  </div>
</template>