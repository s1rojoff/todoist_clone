<script setup>
    import hoverBtn from './hoverBtn.vue'
    import TodaySvg from './Svgs/TodaySvg.vue'
    import InboxSvg from './Svgs/InboxSvg.vue'
    import SvgBtn from '../MainComponents/SvgBtn.vue'
    import letterHelper from '../MainComponents/letterHelper.vue'
    import BtnShell from './Svgs/BtnShell.vue'
    import LabelSvg from './Svgs/LabelSvg.vue'
    import PrioritySvg from './Svgs/PrioritySvg.vue'
    import ReminderSvg from './Svgs/ReminderSvg.vue'
    import ActiveAdd from '../MainComponents/ActiveAdd.vue'
    import {useStore} from "../../store";
    const  store = useStore();
    function closeTaskBoard(){  
        store.todayTask = '';
        store.taskSection = !store.taskSection;
    }

    function addTask() {
        if(store.todayTask){
            store.todayTasks.push(store.todayTask);
            store.todayTask =''
        }
    }
</script>

<template>
    <div class="border w-full rounded-xl md:pl-3 md:pb-2 md:pr-3 md:pt-2">
        <textarea v-model="store.todayTask" class="border-none md:w-full text-sm outline-none" rows="1" placeholder="Task name"></textarea>
        <input type="text" class="font-thin text-sm" placeholder="Description">
        <div class="flex items-center md:mt-5 justify-between">
            <div class="flex items-center">
                <SvgBtn>
                    <template #svg>
                        <hoverBtn>
                            <TodaySvg/>
                            <p class="text-green-700 md:ml-0.5 text-sm">Today</p>
                        </hoverBtn>
                    </template>
                    <template #title>
                        Today
                    </template>
                </SvgBtn>
                <SvgBtn width="md:w-32">
                    <template #svg>
                        <hoverBtn class="md:ml-2">
                            <InboxSvg/>
                            <p class="text-blue-700 md:ml-0.5 text-sm">Inbox</p>
                        </hoverBtn>
                    </template>
                    <template #title>
                        <div>
                            Select a project
                            <letterHelper>#</letterHelper>
                        </div>
                    </template>
                </SvgBtn>


            </div>
            <div class="flex items-center">
                <SvgBtn width="md:w-28">
                    <template #svg>
                        <BtnShell>
                            <LabelSvg/>
                        </BtnShell>
                    </template>
                    <template #title>
                        Add label(s)
                        <letterHelper>@</letterHelper>
                    </template>
                </SvgBtn>
                <SvgBtn width="md:w-52">
                    <template #svg>
                        <BtnShell>
                            <PrioritySvg/>
                        </BtnShell>
                    </template>
                    <template #title>
                        Set the priority
                        <letterHelper>p1</letterHelper>,
                        <letterHelper>p2</letterHelper>,
                        <letterHelper>p3</letterHelper>,
                        <letterHelper>p3</letterHelper>
                    </template>
                </SvgBtn>
                <SvgBtn width="md:w-28">
                    <template #svg>
                        <BtnShell>
                            <ReminderSvg/>
                        </BtnShell>
                    </template>
                    <template #title>
                        Add reminder(s)
                    </template>
                </SvgBtn>
            </div>
        </div>

    </div>
    <div class="flex justify-end md:mt-3">
        <div class="flex items-center">
            <ActiveAdd @click="closeTaskBoard"  class="md:mr-5 cursor-pointer bg-gray-100">Cancel</ActiveAdd>
            <ActiveAdd @click="addTask" :class="[store.todayTask ? 'cursor-pointer bg-red-700' : 'cursor-not-allowed']" class="bg-red-300 text-white">Add</ActiveAdd>
        </div>
    </div>
</template>