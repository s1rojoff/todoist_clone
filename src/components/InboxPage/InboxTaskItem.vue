<script setup>
    import  {ref,defineProps,useAttrs,defineEmits} from 'vue'
    import deleteSvg from '../TodayPage/Svgs/deleteSvg.vue'
    import DateSvg from '../TodayPage/Svgs/DateSvg.vue'
    import CommentSvg from '../TodayPage/Svgs/CommentSvg.vue'
    import MoreAction from '../TodayPage/Svgs/MoreAction.vue'
    import SvgBtn from '../MainComponents/SvgBtn.vue'
    defineEmits(['deleteTask'])
    import {useStore} from "../../store";
    const  store = useStore();
    let hoverAction = ref(false)
    const attrs = useAttrs()
</script>
<template>
    <div v-bind="attrs" class="mb-2 md:mt-2">
        <div class="flex  items-center justify-between" @mouseenter="hoverAction = true" @mouseleave="hoverAction = false">
            <div class="flex items-center">
                <input type="radio">
                <span class="md:ml-2"><slot></slot></span>
            </div>
            <div class="flex items-center" v-show="hoverAction">
                <deleteSvg @click="$emit('deleteTask')"/>
                <DateSvg class="md:ml-1"/>
                <CommentSvg class="md:ml-1" />
                <MoreAction class="md:ml-1.5" />
            </div>
        </div>
        <hr/>
    </div>
</template>