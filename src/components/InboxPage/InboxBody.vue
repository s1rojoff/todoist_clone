<script setup>
    import {ref} from 'vue';
    import bodyAddTask from '../TodayPage/bodyAddTask.vue'
    import AddSection from './AddSection.vue'
    import MainPageImg from './Svgs/MainPageImg.vue'
    import SoroqSvg from '../TodayPage/Svgs/SoroqSvg.vue'
    import InputTaskName from './InputTaskName.vue'
    import ActiveAdd from '../MainComponents/ActiveAdd.vue'
    import {useStore} from "../../store";
    const store = useStore();
    let taskSecName = ref('')
</script>

<template>
    <bodyAddTask/>
    <div v-show="store.inbox_taskName">
        <AddSection class="add-section" @click="store.inbox_taskName = false"/>
        <div class="flex justify-center">
            <MainPageImg class="md:w-1/4"/>
        </div>
        <div class="text-center">
            <p>All clear</p>
            <p class="text-sm text-gray-500 md:mt-5">Looks like everything's organized in the right place.</p>
            <div class="flex justify-center md:mt-36 cursor-pointer">
                <div class="flex items-center">
                    <SoroqSvg/>
                    <u class="text-red-600 text-sm">How to best use the Inbox</u>
                </div>
            </div>
        </div>
    </div>
    <div>
        <InputTaskName v-model="store.inbox_tasksSecName"/>
        <div class="flex items-center md:mt-1">
            <ActiveAdd :class="[store.inbox_tasksSecName ? 'bg-red-600' : 'bg-red-200']" class="text-white">
                Add section
            </ActiveAdd>
            <ActiveAdd class="hover:bg-gray-100 md:ml-1" @click="store.inbox_taskName = true">
                Cancel
            </ActiveAdd>
        </div>
    </div>
</template>

<style scoped>
    .add-section{
        opacity: 0;
    }
    .add-section:hover{
        opacity: 1;
        transition: all 0.2s ease;
    }
</style>