<script setup>
    import {defineProps, defineEmits} from 'vue'
    defineProps(['modelValue']);
    defineEmits(['update:modelValue']);
</script>

<template>
    <input placeholder="Name this section" class="border w-full rounded md:mt-10 pl-2 outline-none md:h-9" type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>