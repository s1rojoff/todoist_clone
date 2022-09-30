<script setup>
import downSvg from "../Svg/downSvg.vue";
import plusSvg from "../Svg/plusSvg.vue";
import SvgBtn from "../../../../MainComponents/SvgBtn.vue";
import { ref } from "vue";
import { useStore } from "../../../../../store";
import projectItem from "./projectItem.vue";
const store = useStore();
let rotateSvg = ref(false);
</script>
<template>
  <div >
    <div class="flex justify-between h-[50px]">
      <div class="flex w-full" @click="rotateSvg = !rotateSvg">
        <div
          class="mt-1 mr-3"
        >
          <down-svg class="transition-all" :class="rotateSvg ? '' : '-rotate-90'"></down-svg>
        </div>
        <div>
          <h1 class="font-bold">Projects</h1>
        </div>
      </div>
      <div>
        <svg-btn width="w-[80px]">
          <template #title>Add project</template>
          <template #svg>
            <div
            @click="store.$state.showModal = true"
              v-show="store.$state.showPlusSvg"
              class="
                text-gray-700
                hover:bg-black hover:bg-opacity-30
                p-1
                rounded-sm
              "
            >
              <plus-svg />
            </div>
          </template>
        </svg-btn>
      </div>
    </div>
    <ul>
        <li>
            <project-item color="red-900" msg="sanjxsain"></project-item>
        </li>
    </ul>
  </div>
</template>