<script setup>
  import modalSection from './modalSection.vue';
  import { useStore } from '../../../../../store';
  const store = useStore()
</script>
<template>
    <div
    v-show="store.$state.showModal" 
    class="fixed  top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-10">
        <section>
            <modal-section></modal-section>
        </section>    
    </div>
</template>