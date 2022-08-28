<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(["href"])
</script>
<template>
    <div class="mt-5">
        <a  :href="href" class="text-blue-400 no-underline hover:underline text-base">
           <slot></slot>
        </a>
    </div>
</template>