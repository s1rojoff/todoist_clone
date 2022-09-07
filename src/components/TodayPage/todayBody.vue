<script setup>
import BodyAddTask from "./bodyAddTask.vue";
import BodyImgSvg from "./Svgs/bodyImgSvg.vue";
import BaseBtn from "../MainComponents/BaseBtn.vue";
</script>

<template>
  <div class="md:pl-32 md:pr-36 md:mt-3 text-center">
    <BodyAddTask />
    <div class="flex justify-center md:mt-12">
      <BodyImgSvg />
    </div>
    <p class="md:mt-5">Get a clear view of the day ahead</p>
    <p class="text-sm md:mt-4 text-gray-500">
      All your tasks that are due today will show up here.
    </p>
    <button
      class="
        bg-red-500
        md:mt-6
        text-white text-sm
        md:pt-1.5 md:pb-1.5 md:pl-3 md:pr-3
        rounded
      "
    >
      Add a task
    </button>
    <div class="flex justify-center md:mt-5">
      <div
        class="
          border
          flex
          items-center
          md:w-1/4 md:pt-1.5 md:pb-1.5 md:pl-3
          rounded
        "
      >
        <img src="../../../public/img/idea.png" class="md:w-5 md:h-5" alt="" />
        <p class="text-sm md:pl-2">Establish a daily habit</p>
      </div>
    </div>
  </div>
</template>
