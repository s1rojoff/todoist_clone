<script setup>
    import {useAttrs} from 'vue'
    const attrs = useAttrs()
</script>
<template>
    <div :="attrs" class="flex items-center cursor-pointer item pl-2 pr-2 rounded justify-between hover:bg-gray-200">
        <div class="flex items-center">
            <slot name="svg">

            </slot>
            <p class="text-sm">
                <slot name="selectName">
                </slot>
            </p>
        </div>
        <select class="border-none select shadow-none text-sm outline-none">
            <slot name="item"></slot>
        </select>
    </div>
</template>

<style scoped>
    .item:hover .select{
        background-color: #e5e7eb;
    }
</style>
