<script setup>
    import {useAttrs} from 'vue'
    const  attrs = useAttrs()
</script>

<template>
    <div v-bind="attrs" class="flex md:pt-0.5 hover:bg-gray-100 cursor-pointer md:pb-0.5 rounded items-center md:pl-1 md:pr-1.5">
        <slot></slot>
    </div>
</template>