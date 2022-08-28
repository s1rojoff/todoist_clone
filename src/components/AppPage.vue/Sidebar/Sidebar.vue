<script setup>
import sidebarItem from "./sidebarItem.vue";
import inboxSvg from "./Svg/inboxSvg.vue";
import letterHelper from "../../MainComponents/letterHelper.vue";
import TodaySvg from "./Svg/todaySvg.vue";
import UpcomingSvg from "./Svg/upcomingSvg.vue";
import FilterSvg from "./Svg/filterSvg.vue";
</script>
<template>
  <div class="pl-8 pt-8 w-[300px] h-[100vh] bg-gray-100">
    <router-link active-class="active-link" exact-active-class="exact-active-link" to="project">
      <sidebar-item width="w-[200px]">
        <template #svg>
          <div class="text-blue-500">
            <inbox-svg></inbox-svg>
          </div>
        </template>
        Inbox
        <template #title>
          Go to Inbox <letter-helper>G</letter-helper> then
          <letter-helper>i</letter-helper>
        </template>
      </sidebar-item>
    </router-link >
    <router-link active-class="active-link" exact-active-class="exact-active-link" to="today">
      <sidebar-item width="w-[200px]">
        <template #svg>
          <div class="text-green-500">
            <TodaySvg />
          </div>
        </template>
        Today
        <template #title>
          Go to Today <letter-helper>G</letter-helper> then
          <letter-helper>T</letter-helper>
        </template>
      </sidebar-item>
    </router-link>
    <router-link active-class="active-link" exact-active-class="exact-active-link" to="upcoming">
      <sidebar-item width="w-[200px]">
        <template #svg>
          <div class="text-purple-700">
            <UpcomingSvg />
          </div>
        </template>
        Upcoming
        <template #title>
          Go to Upcoming <letter-helper>G</letter-helper> then
          <letter-helper>U</letter-helper>
        </template>
      </sidebar-item>
    </router-link>
    <router-link active-class="active-link" exact-active-class="exact-active-link" to="filters">
      <sidebar-item width="w-[200px]">
        <template #svg>
          <div class="text-yellow-500">
            <FilterSvg />
          </div>
        </template>
        Filters & Labels
        <template #title>
          Go to Filters & Labels <letter-helper>G</letter-helper> then
          <letter-helper>V</letter-helper>
        </template>
      </sidebar-item>
    </router-link>
  </div>
</template>
<style>
      .active {
    background-color: rgb(214, 215, 215);
}

.exact-active-link {
    background-color: rgb(243 244 246);
}
</style>