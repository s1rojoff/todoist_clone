<script setup>
import { defineProps } from "vue";
import {useStore} from '../../store'
let store = useStore()
defineProps(["array"]);
</script>

<template>
  <div
    v-for="item in array"
    :key="item.name"
    class="
      border
      md:ml-9
      hover:border-slate-500
      transition-all
      md:mt-12
      text-center
      md:w-[22%] md:pb-20 md:pt-5
      rounded-xl
      h-auto
    "
  >
    <div class="w-full flex justify-end md:pr-4">
      <input type="checkbox" v-model="store.selectChecked" class="md:right-3" />
    </div>
    <div class="flex justify-center md:pt-14">
      <img class="md:w-[55%]" :src="item.scr" alt="" />
    </div>
    <p class="text-lg font-semibold m-2">{{ item.name }}</p>
  </div>
</template>