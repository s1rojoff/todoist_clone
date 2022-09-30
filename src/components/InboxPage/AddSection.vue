<script setup>
import {useAttrs} from 'vue';
const  attrs = useAttrs();
</script>

<template>
    <div v-bind="attrs" class="flex cursor-pointer items-center md:mt-5">
        <hr class="md:w-[40%] border-red-600">
        <p class="text-red-500 md:ml-5 text-sm">Add Section</p>
        <hr class="md:w-[40%] md:ml-5 border-red-600">
    </div>
</template>
<style scoped>
</style>