<script setup>
import { defineProps } from "vue";
const props = defineProps(["color"]);
</script>
<template>
  <div class="flex w-full">
    <div class="w-3 h-3 rounded-full mr-3 mt-1" :class="'bg-' + '['+color+ ']'"></div>
    <p class="text-sm text-gray-400">
      <slot name="text"></slot>
    </p>
  </div>
</template>