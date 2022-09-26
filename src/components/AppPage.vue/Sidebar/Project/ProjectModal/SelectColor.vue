<script setup>
import { reactive, computed, ref } from "vue";
import colorsName from "./colorsName.vue";
import ColorsName from "./colorsName.vue";
import {useStore} from "../../../../../store"
const store = useStore()
let showBlock = ref("false");
var colorName = reactive("")
const btn = ref("")
function ReturnColor(a) {
  colorName = store.$state.colors.at(a)
  btn.value.innerHTML =  colorName.Name
}
</script>
<template>
  <div class="relative">
    <button
      ref="btn"
      class="border-gray-300 border-2 w-full flex py-[2px]"
      @click="showBlock = !showBlock"
    >
    Choose color
    </button>
    <div
      class="w-full h-[300px] overflow-y-scroll bg-white absolute"
      v-show="showBlock"
    >
      <div class="px-5">
        <div
          v-for="(item, index) in store.$state.colors"
          :key="item.id"
          class="flex hover:bg-slate-300"
          @click="ReturnColor(index)"
        > 
        <ColorsName :color="item.color">
          <template #text>
            {{item.Name}}
          </template>
        </ColorsName>
        </div>
      </div>
    </div>
  </div>
</template>




