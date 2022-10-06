<script setup>
    import {defineEmits,useAttrs,defineProps} from 'vue'
    import DownSvg from '../InboxPage/Svgs/DownSvg.vue'
    import BtnShell from '../TodayPage/Svgs/BtnShell.vue'
    import SvgBtn from '../MainComponents/SvgBtn.vue'
    import PlusSvg from  './Svgs/PlusSvg.vue'
    defineEmits(['clickDown', 'clickPlus']);
    defineProps(['rotateClass'])
    const attrs = useAttrs()
</script>

<template>
    <div v-bind="attrs" class="flex items-center justify-between">
        <div class="flex items-center">
            <DownSvg :class="rotateClass"  @click="$emit('clickDown')"/>
            <p class="font-bold text-sm"><slot></slot></p>
        </div>
        <SvgBtn width="md:w-24" @click="$emit('clickPlus')">
            <template #svg>
                <BtnShell>
                    <PlusSvg/>
                </BtnShell>
            </template>
            <template #title>
                Add new filter
            </template>
        </SvgBtn>
    </div>
</template>