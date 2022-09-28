<script setup>
import menuSvg from "./Svg/menuSvg.vue";
import homeSvg from "./Svg/homeSvg.vue";
import plusSvg from "./Svg/plusSvg.vue";
import notifSvg from "./Svg/notifSvg.vue";
import infoSvg from "./Svg/infoSvg.vue";
import productivySvg from "./Svg/productivySvg.vue";
import SvgBtn from "../../MainComponents/SvgBtn.vue";
import letterHelper from "../../MainComponents/letterHelper.vue";
import HomePage from "../../../views/HomePage.vue";
import PlusSvg from "./Svg/plusSvg.vue";
import NavInput from "./navInput.vue";
import { useStore } from "../../../store";
import { ref } from "@vue/reactivity";
const store = useStore()
const ClickM = ref("")

function keyboardEvent (e) {
    if (e.keyCode === 77) {
      store.$state.showSidebar = !store.$state.showSidebar
    }
  }
  window.addEventListener('keyup', keyboardEvent)
</script>
<template>
  <nav>
    <div class="w-full px-14 py-2 bg-red-600 flex justify-between">
      <div class="flex">
        <div ref="ClickM" class="mr-2 ">
          <svg-btn width="w-[100px]">
            <template #svg>
              <menu-svg />
            </template>
            <template #title>
              Close menu <letter-helper>m</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="mr-3">
          <svg-btn width="w-[150px]">
            <template #svg>
              <home-svg></home-svg>
            </template>
            <template #title>
              Go to home <letter-helper>G</letter-helper> then
              <letter-helper>H</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div>
          <NavInput/>
        </div>
      </div>
      <div class="flex">
        <div class="mr-2">
          <svg-btn width="w-[95px]">
            <template #svg>
              <PlusSvg />
            </template>
            <template #title>
              Add task <letter-helper>Q</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="mr-2">
          <svg-btn width="w-[170px]">
            <template #svg> <productivy-svg></productivy-svg>0/5 </template>
            <template #title>
              Open Productivy <letter-helper>O</letter-helper> then
              <letter-helper>P</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="mr-2">
          <svg-btn width="w-[220px] translate-x-[-180px]">
            <template #svg>
              <info-svg />
            </template>
            <template #title>
              Open Help & Information <letter-helper>O</letter-helper> then
              <letter-helper>P</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div>
          <svg-btn width="w-[200px] translate-x-[-170px]">
            <template #svg>
              <notif-svg />
            </template>
            <template #title>
              Open notifications <letter-helper>O</letter-helper> then
              <letter-helper>P</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="ml-2">
          <div>
            <svg-btn width="w-[220px] translate-x-[-170px]">
              <template #svg>
                <img
                  src="../../../../public/img/apps-illustrations.webp"
                  alt=""
                  class="w-9 rounded-full"
                />
              </template>
              <template #title>
                Open profile photo menu <letter-helper>O</letter-helper> then
                <letter-helper>U</letter-helper>
              </template>
            </svg-btn>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>