<script setup>
import Logo from "../HomePage/Header/Logo.vue";
import SelectAcc from "./SelectAcc.vue";
import GoogleSvg from "./Svgs/GoogleSvg.vue";
import FacebookSvg from "./Svgs/FacebookSvg.vue";
import AppleSvg from "./Svgs/AppleSvg.vue";
import EyeSvg from "./Svgs/EyeSvg.vue";
import EyeSlashSvg from "./Svgs/EyeSlashSvg.vue";
import main from '../../js/VueRouter.js'
import { ref } from "vue";
import BaseBtn from "../MainComponents/BaseBtn.vue";
let changeType = ref(false);
const {toSection} = main()
</script>
<template>
  <div class="mb-20 flex items-center ml-60">
    <div class="md:mt-5">
      <Logo />
      <p class="text-3xl font-bold md:mt-32">
        <slot name="authSelect"></slot>
      </p>
      <SelectAcc class="md:mt-10" @click="toSection('/today')">
        <template #logo>
          <GoogleSvg />
        </template>
        <template #select> Continue with Google </template>
      </SelectAcc>
      <SelectAcc class="md:mt-3">
        <template #logo>
          <FacebookSvg />
        </template>
        <template #select> Continue with Facebook </template>
      </SelectAcc>
      <SelectAcc class="md:mt-3">
        <template #logo>
          <AppleSvg />
        </template>
        <template #select> Continue with Apple </template>
      </SelectAcc>
      <hr class="mt-3" />
      <div class="border rounded-xl pt-1 pb-2 md:pl-5 md:mt-3">
        <label for="email" class="text-sm">Email</label>
        <input
          type="email"
          class="border-b block border-none outline-none"
          placeholder="Enter your email"
        />
      </div>
      <div
        class="border rounded-xl pt-1 pb-2 md:pl-5 md:mt-3 relative"
      >
        <label for="email" class="text-sm">Password</label>
        <input
          :type="changeType ? 'text' : 'password'"
          class="border-b md:w-4/5 block border-none outline-none"
          placeholder="Enter your email"
        />
        <div class="absolute right-3 bottom-2">
          <EyeSvg
            v-show="changeType"
            @click="changeType = false"
            class="cursor-pointer"
          />
          <EyeSlashSvg
            v-show="!changeType"
            @click="changeType = true"
            class="cursor-pointer"
          />
        </div>
      </div>
      <BaseBtn class="md:w-full md:mt-3 md:pb-3 md:pt-3">
        <slot name="btnName"></slot>
      </BaseBtn>
      <div class="md:mt-2">
        <u class="text-blue-500 text-sm"><slot name="forgot_password"></slot></u>
        <p class="text-sm md:mt-3">
          By continuing with Google, Apple, or Email, you agree to Todoist’s
          <a href="#" class="cursor-pointer text-blue-500"
            ><u>Terms of Service</u></a
          >
          and
          <a class="cursor-pointer text-blue-500" href="#"
            ><u>Privacy Policy.</u></a
          >
        </p>
        <p class="text-sm text-center md:mt-3"><slot name="select"></slot></p>
      </div>
    </div>
    <div class="md:mt-48 md:pl-20">
      <img class="md:w-2/3" src="../../../public/img/auth-page-img.png" alt="">
    </div>
  </div>
</template>