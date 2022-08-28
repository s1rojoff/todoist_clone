<script setup>
import {ref} from 'vue'
import { defineProps } from 'vue';
const props = defineProps(["className"])
import FooterLogo from "./FooterLogo.vue";
import TwitterLogo from "../HomeContent/Svgs/TwitterLogo.vue";
import YoutubeSvg from "../HomeContent/Svgs/YoutubeSvg.vue";
import FacebookSvg from "../HomeContent/Svgs/FacebookSvg.vue";
import InstagramSvg from "../HomeContent/Svgs/InstagramSvg.vue";
import FooterRight from "./FooterRight.vue";
const langs = ref(['English', 'Dansk', 'Norsk', 'Polski', 'Russian'])
</script>

<template>
  <div :class="className" class="bg-[#FFF9F3] md:pl-32 md:pr-32 flex md:pt-10 md:pb-10">
    <div>
      <FooterLogo />
      <p class="text-gray-900 md:mt-5">
        Join millions of people who organize work and life with Todoist.
      </p>
      <div class="flex items-center md:mt-3">
        <TwitterLogo />
        <YoutubeSvg class="ml-2" />
        <FacebookSvg class="ml-2" />
        <InstagramSvg class="ml-2" />
      </div>
    </div>
    <div>
      <FooterRight class="ml-28" />
    </div>
  </div>
  <div class="bg-slate-300 w-full md:pl-32 md:pr-40 md:pt-4 md:pb-4 flex items-center justify-between">
    <p class="font-mono text-xs">
      <a href="#">Security</a> | <a href="#">Privacy</a> |
      <a href="#">Terms</a> &nbsp; &nbsp; &copy;Doist Inc
    </p>
    <select class="pl-3 pr-3 pt-0.5 border-none outline-none rounded pb-0.5">
        <option v-for="lang in langs" :key="lang" :value="lang">{{lang}}</option>
    </select>
  </div>
</template>