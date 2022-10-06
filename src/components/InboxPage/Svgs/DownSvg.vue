<script setup>
    import {useAttrs} from 'vue';
    const attrs = useAttrs();
</script>

<template>
    <svg v-bind="attrs" class="cursor-pointer" width="24" height="24"><path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path></svg>
</template>