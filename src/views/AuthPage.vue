<script setup>
import Logo from "../components/HomePage/Header/Logo.vue";
import BaseBtn from "../components/MainComponents/BaseBtn.vue";
import FooterMain from "../components/HomePage/Footer/FooterMain.vue";
import main from '../js/VueRouter.js'

let {toSection} = main()
</script>

<template>
  <div class="md:mt-4">
    <div class="md:ml-36">
        <Logo />
    </div>
    <div class=" md:mt-20 text-center md:mb-40">
        <img class="md:w-1/3 translate-x-3/4 ml-28" src="public/img/auth-page-image.webp" alt="" />
        <p class="text-3xl font-bold md:mt-10">Hmmm, that page doesn’t exist.</p>
        <p class="text-xl md:mt-2">Get back to organizing work and life or visit our <a class="text-blue-500" href="#">Help Center</a>.</p>
        <BaseBtn @click="toSection('/')" class="mt-5 md:pl-6 md:pr-6 md:pt-1.5 md:pb-1.5">Home</BaseBtn>
    </div>
    <FooterMain/>
  </div>
</template>