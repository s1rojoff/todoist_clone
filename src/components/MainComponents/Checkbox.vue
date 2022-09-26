<script setup>
    import {useStore} from "../../store"
    const store = useStore()

</script>
<template>
    <div 
    @click="store.$state.checked = !store.$state.checked"
    class="w-9 transition-all duration-200 h-[22px] rounded-xl bg-gray-500 flex items-center border-2 p-[2px]" :class="store.$state.checked ? 'bg-green-600' : ''">
        <div class="w-4 h-4 rounded-full bg-white" :class="store.$state.checked ? 'translate-x-3' : ''"></div>
    </div>
</template>