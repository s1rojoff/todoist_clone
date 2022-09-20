<script setup>
    import  {ref} from 'vue'
    import EditSvg from './Svgs/EditSvg.vue'
    import DateSvg from './Svgs/DateSvg.vue'
    import CommentSvg from './Svgs/CommentSvg.vue'
    import MoreAction from './Svgs/MoreAction.vue'
    import SvgBtn from '../MainComponents/SvgBtn.vue'
    let hoverAction = ref(false)
    function editItem() {
        console.log('js')
    }
</script>
<template>
    <div class="mb-2 md:mt-2">
        <div class="flex  items-center justify-between" @mouseenter="hoverAction = true" @mouseleave="hoverAction = false">
            <div class="flex items-center">
                <input type="radio">
                <span class="md:ml-2"><slot></slot></span>
            </div>
            <div class="flex items-center" v-show="hoverAction">
                <EditSvg @click="editItem"/>
                <DateSvg class="md:ml-1"/>
                <CommentSvg class="md:ml-1" />
                <MoreAction class="md:ml-1.5" />
            </div>
        </div>
        <hr/>
    </div>
</template>