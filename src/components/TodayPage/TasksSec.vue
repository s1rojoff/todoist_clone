<script setup>
import TaksBoard from './TaksBoard.vue'
import TaskItem from './TaskItem.vue'
    import {useStore} from "../../store";
const  store = useStore();

</script>
<template>
    <div class="flex justify-center">
        <div class="md:mt-10 md:pl-32 md:pr-36 w-full">
           <div>
               <TaskItem :dynId="index" v-for="(task, index) in store.todayTasks" :key="index">
                   {{task}}
               </TaskItem>
           </div>
            <TaksBoard/>
        </div>
    </div>
</template>