<script setup>
    import {defineEmits,ref} from 'vue'
    import FilterItem from './FilterItem.vue';
    import LabelItem from './LabelItem.vue';
    import BodyTitle from './BodyTitle.vue'
    let rotateFilter = ref(true);
    let rotateLabel = ref(true);
    function toggleVar() {
        rotateFilter.value = !rotateFilter.value;
        console.log(rotateFilter)
    }
</script>

<template>
    <div class="md:pl-32 md:pr-36 md:mt-7">
        <BodyTitle :rotateClass="[rotateFilter ? 'rotate-0' : '-rotate-90']"  @clickDown="rotateFilter = !rotateFilter">Filters</BodyTitle>
        <div class="md:pl-5"><hr></div>
        <div v-if="rotateFilter">
            <FilterItem/>
            <FilterItem/>
            <FilterItem/>
        </div>
        <BodyTitle :rotateClass="[rotateLabel ? 'rotate-0' : '-rotate-90']"  @clickDown="rotateLabel = !rotateLabel" class="md:mt-10">Labels</BodyTitle>
        <div v-if="rotateLabel">
            <LabelItem/>
            <LabelItem/>
            <LabelItem/>
            <LabelItem/>
            <LabelItem/>
        </div>
    </div>
</template>