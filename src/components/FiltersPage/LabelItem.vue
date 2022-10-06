<script setup>
import LabelSvg from './Svgs/LabelSvg.vue'
import FavoritesSvg from './Svgs/FavoritesSvg.vue'
import EditSvg from '../TodayPage/Svgs/EditSvg.vue'
import MoreAction from '../TodayPage/Svgs/MoreAction.vue'
</script>

<template>
    <div class="md:ml-3 md:mt-1">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <LabelSvg/>
                <p class="text-sm">alik</p>
            </div>
            <div class="flex items-center filter">
                <FavoritesSvg/>
                <EditSvg class="md:ml-1.5"/>
                <MoreAction class="md:ml-1.5"/>
            </div>
        </div>
        <div class="md:pl-2 md:mt-1"><hr></div>
    </div>
</template>