<script setup>
 import { useStore } from '../../../../store';
 const store =useStore()
</script>
<template>
  <div
  @click.self="store.$state.overlay =false"
    class="
    top-0
    left-0
    z-[60]
      w-full
      h-[100vh]
      bg-black
      bg-opacity-50
      flex
      items-center
      justify-center
      fixed
    "
  >
    <div class="flex">
      <div>
        <iframe
          width="1143"
          height="603"
          src="https://www.youtube.com/embed/8ZKq0r-g87M"
          title="What's Todoist?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="-ml-5 -mt-5">
        <div 
        @click="store.$state.overlay =false"
        class="w-11 h-11 rounded-full flex justify-center items-center bg-white hover:opacity-80">
            <span class="text-xl font-bold">X</span>
        </div>
      </div>
    </div>
  </div>
</template>