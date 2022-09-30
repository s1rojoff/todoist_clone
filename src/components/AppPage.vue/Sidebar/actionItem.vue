<script setup></script>
<template>
    <div class="flex p-1 hover:bg-gray-100 h-[35px]">
        <div class="mx-2">
            <slot name="svg"></slot>
        </div>
        <div class="text-sm text-gray-500">
            <slot name="text"></slot>
        </div>
    </div>
</template>