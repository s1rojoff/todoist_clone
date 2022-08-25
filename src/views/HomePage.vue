<script setup>
import HeaderMain from '../components/HomePage/Header/HeaderMain.vue';
import MainContent from '../components/HomePage/HomeContent/MainContent.vue';
import FooterMain from '../components/HomePage/Footer/FooterMain.vue';

</script>

<template>
<div>
    <HeaderMain/>
    <router-view>
        <MainContent/>
    </router-view>
    <FooterMain/>
</div>
</template>