<script setup>
import infoSvg from "./Svg/infoSvg.vue";
import BaseInput from "../../../../MainComponents/BaseInput.vue";
import SelectColor from "./SelectColor.vue";
import Checkbox from "../../../../MainComponents/Checkbox.vue";
import SelectView from "./SelectView.vue";
import BaseBtn from "../../../../MainComponents/BaseBtn.vue";
import { useStore } from "../../../../../store";
const store = useStore();
function addProject() {
  if (store.$state.item.color && store.$state.item.name) {
    let item ={
      color : store.$state.item.color,
      name : store.$state.item.name,
    }
    store.$state.Items.push(item);
  }
}
</script>
<template>
  <div class="bg-white w-[500px] rounded-xl">
    <div
      class="
        flex
        justify-between
        px-5
        py-5
        border-b-2 border-gray-200
        bg-gray-100
        rounded-t-lg
      "
    >
      <div>
        <h1 class="font-bold">Add project</h1>
      </div>
      <div>
        <div>
          <info-svg></info-svg>
        </div>
      </div>
    </div>
    <div class="px-5 mb-3">
      <div>
        <h1 class="font-bold">Name</h1>
      </div>
      <div>
        <base-input
          v-model="store.$state.item.name"
          class="w-full rounded-sm border-gray-300 border-2"
        ></base-input>
      </div>
    </div>
    <div class="px-5">
      <div>
        <h1 class="font-bold">Color</h1>
      </div>
      <div class="mb-5">
        <select-color></select-color>
      </div>
      <div class="flex">
        <div>
          <checkbox></checkbox>
        </div>
        <div class="mb-4">
          <h1>Add to favorites</h1>
        </div>
      </div>
    </div>
    <div
      class="
        px-5
        py-4
        border-t-2 border-gray-200
        bg-gray-100
        flex
        justify-end
        rounded-b-xl
      "
    >
      <div>
        <base-btn
          @click="store.$state.showModal = false"
          class="bg-gray-200 hover:bg-gray-300 text-black h-10"
          >Cancel</base-btn
        >
        <base-btn class="bg-red-300 h-10" @click="addProject">Add</base-btn>
      </div>
    </div>
  </div>
</template>