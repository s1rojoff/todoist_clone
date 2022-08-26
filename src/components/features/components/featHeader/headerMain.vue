 <script setup>
import headerText from "./headerText.vue";
import imgContent from "./imgContent.vue"
import videoOverlay from "./videoOverlay.vue"
import { useStore } from "../../../../store";
const store = useStore()
</script>
<template>
  <div class="bg-hero w-full h-[100vh]">
    <div class="w-full flex justify-center">
        <div class="mt-[100px]">
            <header-text></header-text>
        </div>
    </div>
    <div class="w-full flex justify-end">
      <div 
      @click="store.$state.overlay = true"
      class="mr-32 mt-32 hover:opacity-90">
          <img-content></img-content>
      </div>
    </div>
    <div v-show="store.$state.overlay">
        <video-overlay></video-overlay>
    </div>
  </div>
</template>
<style scoped>
    .bg-hero{
        background-image: url("public/img/features-hero-bg.webp");
        background-size: cover;
        background-position: center;
    }
</style>