<script setup>
import { useStore } from "../../../../store";
import { defineProps } from "vue";
const store = useStore();
const props =  defineProps(["className"])
</script>
<template>
  <div>
    <div
      :class="className" class=" p-5 "
    >
      <div class="flex justify-between">
        <div class="w-6 ml-5">
          <slot name="svg"></slot>
        </div>
        <div class="w-[300px]">
          <div class="font-bold text-xl">
            <slot name="title"></slot>
          </div>
        
            <div class="text-base">
              <slot name="description"></slot>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
v-show="store.$state.description"