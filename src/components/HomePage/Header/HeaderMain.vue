<script setup>
import { ref } from "vue";
import Logo from "./Logo.vue";
import NavItem from "./NavItem.vue";
import BaseBtn from "../../MainComponents/BaseBtn.vue";
import main from '../../../js/VueRouter.js'
const {toSection} = main()
const div  =ref()
const items = ref([
  "Features",
  "Templates",
  "ForTeams",
  "Resources",
  "Pricing",
]);
</script>

<template>
  <div class="flex items-center w-full z-50 justify-between md:pl-32 md:pr-32 md:pt-1 bg-white md:pb-3 fixed">
    <div ref="div" class="flex items-center md:mt-2">
      <Logo />
      <NavItem v-for="item in items" :key="item" @click="toSection(`/${item}`)">{{ item }}</NavItem>
    </div>
    <div class="flex items-center md:mt-1.5 md:mr-3">
      <NavItem @click="toSection('/auth/login')">Log in</NavItem>
      <BaseBtn  class="md:ml-2" @click="toSection('/auth/signup')"/>
    </div>
  </div>
</template>