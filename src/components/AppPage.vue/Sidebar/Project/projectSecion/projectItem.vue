<script setup>
import SvgBtn from "../../../../MainComponents/SvgBtn.vue";
import itemMenuSvg from "../Svg/itemMenuSvg.vue";
import { defineProps, ref } from "vue";
import ProjectActions from "../../projectActions.vue";
const props = defineProps(["color", "msg"]);
let showActions = ref(false)
</script>
<template>
  <div class="flex justify-between">
    <div class="flex w-[400px] h-[50px]">
      <div class="w-3 h-3 rounded-full mr-3 mt-2" :class="color"></div>
      <div>
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="mr-3 p-2">
          <div class="text-gray-700 relative">
            <div class="p-1 py-2 hover:bg-gray-300"  @click="showActions = !showActions">
              <item-menu-svg />
            </div>
            <div v-show="showActions" class="absolute top-8 -left-8 z-20">
              <project-actions></project-actions>
            </div>
          </div>
    </div>
  </div>
</template>