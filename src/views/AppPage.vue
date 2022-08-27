<script setup>
import NavMain from "../components/AppPage.vue/AppNav/navMain.vue";
import Sidebar from "../components/AppPage.vue/Sidebar/Sidebar.vue";
</script>
<template>
  <main>
    <nav-main></nav-main>
    <div class="flex">
        <sidebar></sidebar>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>