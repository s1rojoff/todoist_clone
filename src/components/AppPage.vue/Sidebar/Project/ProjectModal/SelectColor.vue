<script setup>
import { reactive, computed, ref } from "vue";
import colorsName from "./colorsName.vue";
import ColorsName from "./colorsName.vue";
import {useStore} from "../../../../../store"
const store = useStore()
store.$state.showBlock 
var colorName = reactive("")
const btn = ref("")
let colorValue = ref("")
function ReturnColor(a) {
  colorName = store.$state.colors.at(a)
  btn.value.innerHTML =  colorName.Name
  colorValue.value = colorName.color
  store.$state.item.color = colorName.color
  store.$state.showBlock=false
  console.log(store.$state.item);
  console.log(store.$state.Items);
}
</script>
<template>
  <div>
    <button
      class="border-gray-300 border-2 w-full flex py-[2px]"
      @click="store.$state.showBlock = !store.$state.showBlock"
    >
    <div class="w-3 h-3 rounded-full mx-3 mt-[5px]" :class="colorValue"></div>
     <div ref="btn">Choose color</div>
    </button>
    <div
      class="w-full h-[300px] overflow-y-scroll bg-white"
      v-show="store.$state.showBlock"
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




