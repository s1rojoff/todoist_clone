<script setup>
import SvgBtn from "../../../../MainComponents/SvgBtn.vue";
import itemMenuSvg from "../Svg/itemMenuSvg.vue";
import { defineProps } from "vue";
const props = defineProps(['color','msg'])
</script>
<template>
  <div class="flex justify-between">
    <div class="flex w-[400px]">
      <div class="w-3 h-3 rounded-full mr-3 mt-2" :class="'bg-'+ color"></div>
      <div>
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="mr-3 p-2 ">
        <svg-btn width="w-[150px]">
          <template #svg>
           <div class="text-gray-700 ">
            <item-menu-svg />
           </div>
          </template>
          <template #title> More project actions </template>
        </svg-btn>
    </div>
  </div>


</template>