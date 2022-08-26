<script setup>
import sectionAdd from "./sectionAdd.vue";
import logoImg from "./logoImg.vue";
import subText from "./subText.vue";
import subLink from "./subLink.vue"
</script>
<template>
  <section>
    <div class="p-32">
      <div class="mb-5">
        <section-add />
      </div>
      <div>
        <logo-img />
      </div>
      <div class="mt-10">
        <sub-text/>
      </div>
        <sub-link href="#"> &rightarrow; See all integrations</sub-link>
      </div>
  </section>
</template>