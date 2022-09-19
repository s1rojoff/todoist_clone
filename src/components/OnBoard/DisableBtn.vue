<script setup>
    import {useAttrs} from 'vue'
    const  attrs = useAttrs()
</script>

<template>
    <button v-bind="attrs"  class="text-sm font-semibold bg-red-300 cursor-not-allowed p-2 rounded-lg text-white"><slot></slot></button>
</template>