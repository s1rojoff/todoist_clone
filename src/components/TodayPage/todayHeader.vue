<script setup>
import { useAttrs } from "vue";
import { useStore } from "../../store";
import mainDate from "../../js/getDate.js";
import ViewSvg from "./Svgs/ViewSvg.vue";
let { week, day, month, getDate } = mainDate();
const attrs = useAttrs();
const store = useStore();
function nima() {
  store.todayView = !store.todayView;
  console.log(store.todayView);
}
</script>

<template>
  <div class="md:pl-32 md:pr-36 md:mt-7" v-bind="attrs">
    <div class="flex items-end justify-between md:mb-2">
      <div class="flex items-end">
        <p class="font-bold text-xl">Today</p>
        <p class="text-sm text-gray-500 md:ml-2">
          {{ week }} {{ day }} {{ month }}
        </p>
      </div>
      <div
        @click="nima"
        class="
          flex
          items-center
          hover:bg-gray-200
          pt-0.5
          pb-0.5
          pl-1
          pr-2
          rounded
        "
      >
        <ViewSvg />
        <span class="text-gray-500 text-xs cursor-pointer">View</span>
      </div>
    </div>
  </div>
</template>