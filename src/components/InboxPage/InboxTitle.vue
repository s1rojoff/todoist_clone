<script setup>
    import hoverBtn from '../TodayPage/hoverBtn.vue'
    import ViewSvg from '../TodayPage/Svgs/ViewSvg.vue'
    import CommentSvg from './Svgs/CommentSvg.vue'
    import SvgBtn from '../MainComponents/SvgBtn.vue'
    import moreActionInbox from './Svgs/moreActionInbox.vue'
</script>
<template>
    <div class="flex items-center justify-between">
        <p class="text-xl font-bold">Inbox</p>
        <div class="flex items-center">
            <SvgBtn>
                <template #svg>
                    <hoverBtn>
                        <CommentSvg/>
                        <p class="text-xs text-gray-500">Comment</p>
                    </hoverBtn>
                </template>
                <template #title>
                    Comments
                </template>
            </SvgBtn>
            <SvgBtn>
                <template #svg>
                    <hoverBtn>
                        <ViewSvg/>
                        <p class="text-xs text-gray-500">View</p>
                    </hoverBtn>
                </template>
                <template #title>
                    Views
                </template>
            </SvgBtn>
            <moreActionInbox/>
        </div>
    </div>
</template>