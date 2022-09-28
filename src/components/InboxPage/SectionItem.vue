<script setup>
    import {ref} from 'vue'
    import {useStore} from "../../store";
    import DownSvg from './Svgs/DownSvg.vue'
    import moreActionInbox from './Svgs/moreActionInbox.vue'
    const store = useStore()
</script>

<template>
    <div class="flex items-center justify-between md:mt-3">
        <div class="flex items-center">
            <DownSvg @click="store.rotateSvg = !store.rotateSvg" class="cursor-pointer" :class="[store.rotateSvg ? '-rotate-90': 'rotate-0']"/>
            <p class="font-bold text-sm"><slot></slot></p>
        </div>
        <moreActionInbox/>
    </div>
</template>