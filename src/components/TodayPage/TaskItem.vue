<script setup>
    import  {ref,defineProps} from 'vue'
    import deleteSvg from './Svgs/deleteSvg.vue'
    import DateSvg from './Svgs/DateSvg.vue'
    import CommentSvg from './Svgs/CommentSvg.vue'
    import MoreAction from './Svgs/MoreAction.vue'
    import SvgBtn from '../MainComponents/SvgBtn.vue'
    import {useStore} from "../../store";
    defineProps(['dynId'])
    const  store = useStore();
    let hoverAction = ref(false)
    function deleteItem() {
       store.todayTasks.splice(store.taskIndex,1)
    }

</script>
<template>
    <div :id="dynId" class="mb-2 md:mt-2">
        <div class="flex  items-center justify-between" @mouseenter="hoverAction = true" @mouseleave="hoverAction = false">
            <div class="flex items-center">
                <input type="radio">
                <span class="md:ml-2"><slot></slot></span>
            </div>
            <div class="flex items-center" v-show="hoverAction">
                <deleteSvg @click="deleteItem"/>
                <DateSvg class="md:ml-1"/>
                <CommentSvg class="md:ml-1" />
                <MoreAction class="md:ml-1.5" />
            </div>
        </div>
        <hr/>
    </div>
</template>