<script setup>
import Logo from "../HomePage/Header/Logo.vue";
import SelectAcc from "./SelectAcc.vue";
import GoogleSvg from "./Svgs/GoogleSvg.vue";
import FacebookSvg from "./Svgs/FacebookSvg.vue";
import AppleSvg from "./Svgs/AppleSvg.vue";
</script>
<template>
  <div>
    <div class=" translate-x-[18%] md:mt-5">
      <Logo/>
      <p class="text-3xl font-bold md:mt-32">
        <slot name="authSelect"></slot>
      </p>
      <SelectAcc class="md:mt-10">
        <template #logo>
          <GoogleSvg/>
        </template>
        <template #select>
          Continue with Google
        </template>
      </SelectAcc>
      <SelectAcc class="md:mt-3">
        <template #logo>
          <FacebookSvg/>
        </template>
        <template #select>
          Continue with Facebook
        </template>
      </SelectAcc>
      <SelectAcc class="md:mt-3">
        <template #logo>
          <AppleSvg/>
        </template>
        <template #select>
          Continue with Apple
        </template>
      </SelectAcc>
      <hr class="mt-3 md:w-[30%]">
      <div class="md:w-[30%] border rounded-xl pt-1 pb-2 md:pl-5 md:mt-3">
        <label for="email" class="text-sm">Email</label>
        <input type="email" class="border-b md:w-4/5 block border-none outline-none" placeholder="Enter your email">
      </div>
    </div>
    <div>
       
    </div>
  </div>
</template>