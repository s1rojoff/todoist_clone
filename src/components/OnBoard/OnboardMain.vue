<script setup>
import { ref } from "vue";
import {useStore} from '../../store'
import Logo from "../HomePage/Header/Logo.vue";
import SelectCard from "./SelectCard.vue";
import LabelSvg from "../features/components/firthSection/Svg/labelSvg.vue";
import ActiveBtn from "./ActiveBtn.vue";
import DisableBtn from "./DisableBtn.vue";
const store = useStore()
const cards = [
  {
    scr: "../../../public/img/onboard-personal.png",
    name: "Personal",
  },
  {
    scr: "../../../public/img/onboard-workl.png",
    name: "Work",
  },
  {
    scr: "../../../public/img/onboard-education.png",
    name: "Education",
  },
];

</script>

<template>
  <div class="md:pl-24 md:pr-36 md:pt-8 pb-20">
    <div class="flex items-center justify-between">
      <Logo />
      <div class="flex items-center">
        <div class="bg-red-600 w-2 h-2 rounded-full"></div>
        <div class="bg-red-200 md:ml-5 w-2 h-2 rounded-full"></div>
        <div class="bg-red-200 md:ml-5 w-2 h-2 rounded-full"></div>
        <span class="text-red-600 md:ml-8 text-sm font-semibold">Skip</span>
      </div>
    </div>
    <div class="text-center md:mt-16">
      <p class="text-xl font-bold">How do you plan to use Todoist?</p>
      <p class="text-gray-500 md:mt-4">Choose all that apply.</p>
    </div>
    <div class="flex justify-center">
      <SelectCard :array="cards" />
    </div>
    <div
      class="
        bg-red-100
        md:w-[72%]
        flex
        items-center
        md:pl-28 md:translate-x-44 md:pt-3 md:pb-3
        rounded-xl
        md:mt-6
      "
    >
      <div class="w-9 h-9 bg-white flex justify-center rounded-full">
        <img src="../../../public/img/idea.png" class="w-5 h-5 mt-2" alt="" />
      </div>
      <p class="font-semibold text-sm md:pl-4">
        Please answer two quick questions to ensure you’ll have a great start
        with Todoist 😀
      </p>
    </div>
    <div class="flex justify-center md:mt-10">
      <DisableBtn v-show="!store.selectChecked">Continue</DisableBtn>
      <ActiveBtn v-show="store.selectChecked">Continue</ActiveBtn>
    </div>
  </div>
</template>