<script setup>
    import {useAttrs} from 'vue'
    const attrs = useAttrs();
</script>

<template>
    <div v-bind="attrs" class="font-semibold cursor-pointer md:pt-1 text-sm md:pb-1 md:pl-5 md:pr-5 rounded">
        <slot>Add</slot>
    </div>
</template>