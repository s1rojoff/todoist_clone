<script setup>
import sectionImg from './sectionImg.vue';
import SectionText from './sectionText.vue';
</script>
<template>
    <section>
        <div class="px-32">
            <div class="flex justify-between">
                <div>
                    <section-img/>
                </div>
                <div class="ml-20 mt-10">
                    <SectionText/>
                </div>
            </div>

        </div>
    </section>
</template>