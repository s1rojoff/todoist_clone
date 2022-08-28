<script setup>
import fooTopSecText from "./fooTopSecText.vue";
import FooterSecImg from "./FooterSecImg.vue";
import BaseBtn from "../../../MainComponents/BaseBtn.vue";
</script>
<template>
  <section>
    <div class="bg-slate-200 flex justify-center">
      <div class="flex justify-between w-[1200px] border-b-2 border-slate-300 border-solid">
        <div class="mt-36">
          <foo-top-sec-text />
          <base-btn> Get Started</base-btn>
        </div>
        <div class="-translate-y-24">
          <FooterSecImg />
        </div>
      </div>
    </div>
  </section>
</template>