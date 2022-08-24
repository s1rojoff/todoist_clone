<script setup>
    import {useStore} from "../../../store";
    const store = useStore()
</script>

<template>
    <div class="md:pt-40">
        <div class="text-center md:mt-10">
            <p class="md:text-6xl font-bold">Organize your <br> work and life, finally.</p>
            <p class="md:text-2xl md:mt-3">Become focused, organized, and calm with Todoist. <br> The world’s #1 task
                manager and to-do list app.</p>
            <BaseBtn class="mt-5 md:pl-7 md:pr-7"/>
        </div>
        <div class="flex items-end">
            <img alt="" class="md:w-1/4 md:h-1/4" src="public/img/home-page-left.webp">
            <img alt="" class="md:w-3/4 md:h-3/4 md:-ml-40" src="public/img/home-page-center.webp">
            <img alt="" class="md:w-1/3 md:h-1/3 -z-10 md:-ml-80" src="public/img/home-page-right.webp">
        </div>
        <div class="-mt-16">
            <img alt="" class="z-40 rotate-180 w-full md:h-36" src="public/img/home-page-back1.webp">
            <img alt="" class="md:h-36 w-full" src="public/img/home-page-back1.webp">
        </div>
        <div>
            <div>
                <p>300,000+ REVIEWS</p>
                <p>★★★★★</p>
                <p>App Store and Google Play</p>
            </div>
        </div>
    </div>
</template>