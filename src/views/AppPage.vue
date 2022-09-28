<script setup>
import { onMounted } from "@vue/runtime-core";
import NavMain from "../components/AppPage.vue/AppNav/navMain.vue";
import Sidebar from "../components/AppPage.vue/Sidebar/Sidebar.vue";
import { useStore } from "../store";
const store = useStore()

</script>
<template>
  <main >
    <nav-main></nav-main>
    <div class="flex">
      <transition name="flora">
        <div v-show="store.$state.showSidebar">
          <sidebar></sidebar>
        </div>
      </transition>
      <div class="md:w-4/5">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
<style scoped>
.flora-enter-active,
.flora-leave-active {
  transition: all 0.3s ease;
}
.flora-enter-active {
  animation: flora-in 0.3s reverse;
}
.flora-leave-active {
  animation: flora-in 0.3s;
}
@keyframes flora-in {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-600px);
  }
}
</style>