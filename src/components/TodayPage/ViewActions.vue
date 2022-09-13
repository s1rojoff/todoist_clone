<script setup>
import {ref} from 'vue'
import ViewItem from './ViewItem.vue'
import GroupSvg from './Svgs/GroupSvg.vue';
import SortSvg from './Svgs/SortSvg.vue';
import AssignSvg from './Svgs/AssignSvg.vue';
const groupArr = ref(['Default', 'Due date', 'Assigne', 'Date added', 'Priority', 'Label', 'Project'])
</script>
<template>
  <div class="right-14 md:w-64 absolute">
    <div class="border md:-mt-1 pl-2 pr-2 pt-2 pb-1 rounded">
      <p class="md:pl-3">Sort</p>
      <ViewItem class="md:mt-2">
        <template #svg>
          <GroupSvg/>
        </template>
        <template #selectName>
          Group by
        </template>
        <template #item>
          <option class="text-md" v-for="item in groupArr" :key="item" :value="item">{{item}}</option>
        </template>
      </ViewItem>
      <ViewItem class="md:mt-2">
        <template #svg>
          <SortSvg/>
        </template>
        <template #selectName>
          Sort by
        </template>
        <template #item>
          <option class="text-md" v-for="item in groupArr" :key="item" :value="item">{{item}}</option>
        </template>
      </ViewItem>
      <ViewItem class="md:mt-2">
        <template #svg>
          <AssignSvg/>
        </template>
        <template #selectName>
          Assigned to
        </template>
        <template #item>
          <option class="text-md" v-for="item in groupArr" :key="item" :value="item">{{item}}</option>
        </template>
      </ViewItem>
    </div>
  </div>
</template>