<script setup>
    import {useAttrs} from 'vue';
    const attrs = useAttrs()
</script>

<template>
    <button v-bind="attrs" class="text-black"  type="button" aria-expanded="false" data-testid="more_menu" data-action-hint="task-overflow-menu" aria-label="More task actions" tabindex="0"><svg width="15" height="3"><path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fill-rule="evenodd"></path></svg></button>
</template>