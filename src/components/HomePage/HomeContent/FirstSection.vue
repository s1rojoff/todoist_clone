<script setup>
import AdobeSvg from "./Svgs/AdobeSvg.vue";
import AmazonSvg from "./Svgs/AmazonSvg.vue";
import DisneySvg from "./Svgs/DisneySvg.vue";
import ShopifySvg from "./Svgs/ShopifySvg.vue";
import NyuSvg from "./Svgs/NyuSvg.vue";
import { useStore } from "../../../store";
import AppleSvg from "./Svgs/AppleSvg.vue";
import BaseBtn from "../../MainComponents/BaseBtn.vue";
const store = useStore();
</script>

<template>
  <div class="md:pt-40">
    <div class="text-center md:mt-10">
      <p class="md:text-6xl font-bold">
        Organize your <br />
        work and life, finally.
      </p>
      <p class="md:text-2xl md:mt-3">
        Become focused, organized, and calm with Todoist. <br />
        The world’s #1 task manager and to-do list app.
      </p>
      <BaseBtn class="mt-5 md:pl-7 md:pr-7"/>
    </div>
    <div class="flex items-end">
      <img
        alt=""
        class="md:w-1/4 md:h-1/4"
        src="public/img/home-page-left.webp"
      />
      <img
        alt=""
        class="md:w-3/4 md:h-3/4 md:-ml-40"
        src="public/img/home-page-center.webp"
      />
      <img
        alt=""
        class="md:w-1/3 md:h-1/3 -z-10 md:-ml-80"
        src="public/img/home-page-right.webp"
      />
    </div>
    <div class="-mt-16 relative">
      <img
        alt=""
        class="rotate-180 md:h-32 w-full"
        src="public/img/home-page-back1.webp"
      />
      <img
        alt=""
        class="md:h-32 w-full"
        src="public/img/home-page-back1.webp"
      />
    </div>
    <div class="md:pl-32 md:pr-32 flex items-center absolute -mt-40 md:ml-28">
      <div class="md:w-1/2 md:ml-32">
        <p class="text-xs font-bold">300,000+ REVIEWS</p>
        <p class="text-lg">★★★★★</p>
        <p class="text-xl font-semibold">App Store and Google Play</p>
      </div>
      <div class="md:w-1/2 ml-28">
        <div class="flex items-center">
          <AdobeSvg />
          <AmazonSvg class="md:ml-10" />
          <DisneySvg class="md:ml-10" />
        </div>
        <div class="flex items-center mt-2">
            <ShopifySvg/>
            <NyuSvg class="md:ml-7"/>
            <AppleSvg class="md:ml-5"/>
        </div>
      </div>
    </div>
  </div>
</template>