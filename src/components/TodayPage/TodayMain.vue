<script setup>
    import {useStore} from "../../store";
    import TodayHeader from './todayHeader.vue';
    import TodayBody from './todayBody.vue';
    import TodayFooter from './todayFooter.vue';
    import ViewActions from './ViewActions.vue';
    const  store = useStore()

</script>

<template>
    <div class="w-full">
        <TodayHeader/>
        <ViewActions v-show="store.todayView"/>
        <div v-show="!store.taskSection">
            <TodayBody/>
            <TodayFooter/>
        </div>
    </div>
</template>