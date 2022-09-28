<script setup>
    import {ref} from 'vue';
    import bodyAddTask from '../TodayPage/bodyAddTask.vue'
    import AddSection from './AddSection.vue'
    import MainPageImg from './Svgs/MainPageImg.vue'
    import SoroqSvg from '../TodayPage/Svgs/SoroqSvg.vue'
    import InputTaskName from './InputTaskName.vue'
    import ActiveAdd from '../MainComponents/ActiveAdd.vue'
    import SectionItem from './SectionItem.vue'
    import InboxTaskBoard from './InboxTaskBoard.vue'
    import TaskItem from '../TodayPage/TaskItem.vue'
    import {useStore} from "../../store";
    const store = useStore();
    let taskSecName = ref('');
    let secName = ref('');
    let showTaskBoard = ref(false);
    let inboxSecTask = ref('')
    let secNameInput = ref(true)
    function closeTaskInput() {
        store.inbox_taskName = true;
        store.inbox_tasksSecName = ''
    }
    function taskSecNameAdd() {
        secName.value = store.inbox_tasksSecName
        store.inbox_tasksSecName = '';
        secNameInput.value = false
    }
    function showBoard() {
        if(secName.value){
            showTaskBoard.value = !showTaskBoard.value
        }
    }
    function cancelInbox() {
        console.log('cancel')
    }
    function addTaskInbox() {
        if(store.inboxSecTask.task){
            store.inboxSecTasks.push(store.inboxSecTask);
        }
        console.log(store.inboxSecTasks);
    }
</script>

<template>
    <bodyAddTask class="md:ml-3"/>
    <AddSection class="add-section" @click="store.inbox_taskName = false"/>
    <div v-show="store.inbox_taskName">
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
    <div v-show="!store.inbox_taskName">
        <div v-show="secNameInput">
            <InputTaskName v-model="store.inbox_tasksSecName"/>
            <div class="flex items-center md:mt-1">
                <ActiveAdd @click="taskSecNameAdd" :class="[store.inbox_tasksSecName ? 'bg-red-600' : 'bg-red-200']" class="text-white">
                </ActiveAdd>
                <ActiveAdd class="hover:bg-gray-100 md:ml-1" @click="closeTaskInput">
                    Cancel
                </ActiveAdd>
            </div>
        </div>
        <div v-if="secName">
            <SectionItem v-show="secName">{{secName}}</SectionItem>
            <bodyAddTask @click="showBoard" v-if="!showTaskBoard" class="md:ml-3 md:mt-3"/>
            <TaskItem v-for="(task, index) in store.inboxSecTasks" :key="index">
                {{task.task}} <br>
                <p class="text-[11px] text-gray-500 -mt-1">{{task.description}}</p>
            </TaskItem>
            <InboxTaskBoard v-if="showTaskBoard" class="md:mt-3" @cancel="cancelInbox" @addTask="addTaskInbox"  v-model="inboxSecTask" :secName="`/${secName}`"/>
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