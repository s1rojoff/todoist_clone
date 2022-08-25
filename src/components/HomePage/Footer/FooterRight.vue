<script setup>
import { ref, useAttrs } from 'vue';
const attrs = useAttrs()
 const features = ref(['How It Works', 'For Teams', 'Pricing', 'Templates'])
 const resources = ref(['Download Apps', 'Help Center', 'Productivity Methods', 'Refer a friend', 'Integrations', 'Channel Partners', 'Developer API', 'Status']);
 const company = ref(['About Us', 'We are hiring!', 'Blog', 'Press', 'Twist'])
</script>

<template>
    <div class="grid grid-cols-3 gap-10" v-bind="attrs">
        <ul>
            <li class="text-sm text-gray-700">FEATURES</li>
            <li v-for="item in features" :key="item" class="mt-2 cursor-pointer">{{item}}</li>
        </ul>
        <ul>
            <li class="text-sm text-gray-700">RESOURCES</li>
            <li v-for="item in resources" :key="item" class="mt-2 cursor-pointer">{{item}}</li>
        </ul>
        <ul>
            <li class="text-sm text-gray-700">COMPANY</li>
            <li v-for="item in company" :key="item" class="mt-2 cursor-pointer">{{item}}</li>
        </ul>
    </div>
</template>