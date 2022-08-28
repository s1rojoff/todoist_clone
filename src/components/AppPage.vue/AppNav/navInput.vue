<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
import { ref } from "@vue/reactivity";
import searchSvg from "./Svg/searchSvg.vue";
import CloseSvg from "./Svg/closeSvg.vue";
let clickInput = ref(false)
</script>

<template>
  <div class="flex">
    <div :class="clickInput ? 'bg-opacity-100 text-black': 'bg-opacity-30'" class="px-2 py-1 text-white rounded-l-md bg-white bg-opacity-30">
      <search-svg></search-svg>
    </div>
    <input
    @focus="clickInput = true"
      class="
        border-none
        outline-none
        bg-white bg-opacity-30
        rounded-r-md
        placeholder:text-white
      "
      :class="clickInput ? 'w-[300px] bg-opacity-100  placeholder:text-gray-500 rounded-r-none' : ''"
      placeholder="Search"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-show="clickInput" 
    class="px-2 py-1 text-white rounded-r-md bg-white bg-opacity-30"
    :class="clickInput ? ' bg-opacity-100 text-gray-500 ' : '' "
    >
        <div @click="clickInput=false" class="p-[2px] hover:bg-gray-200">
            <CloseSvg/>
        </div>
    </div>
  </div>
</template>