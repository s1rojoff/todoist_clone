  <script setup>
import secondSecText from "../secondSection/secondSecText.vue";
import selectItem from "../secondSection/selectItem.vue";
import prioritySvg from "./Svg/prioritySvg.vue";
import heartSvg from "./Svg/heartSvg.vue";
import reminderSvg from "./Svg/reminderSvg.vue";
import { useStore } from "../../../../store";
import { TransitionGroup } from "vue";
const store = useStore();
const Src = [
  "public/img/priorities.webp",
  "public/img/favorites.webp",
  "public/img/reminder.webp",
];
function replaceSrc() {
  if (store.$state.desc4) {
    return Src[0];
  }
  if (store.$state.desc5) {
    return Src[1];
  }
  if (store.$state.desc6) {
    return Src[2];
  }
}
function descriptionShow(arg1, arg2, arg3) {
  store.$state.desc4 = arg1;
  store.$state.desc5 = arg2;
  store.$state.desc6 = arg3;
}
</script>
  <template>
  <section class="w-full mt-16 flex justify-center">
    <div class="w-[80%] flex justify-between">
      <div class="w-[400px] mr-[100px]">
        <div class="mb-3">
          <second-sec-text>
            <template #title>
              <h1 class="leading-[50px]">
                Focus your energy on the right things
              </h1>
            </template>
            <template #description>
              Todoist surfaces the right tasks at the right times so you always
              know what to focus on next.
            </template>
          </second-sec-text>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(true, false, false)"
        >
          <select-item
            :className="store.$state.desc4 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <priority-svg></priority-svg>
            </template>
            <template #title> Priority levels </template>
            <template #description>
              <p v-show="store.$state.desc4">
               highlight the day’s most important tasks.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, true, false)"
        >
          <select-item
            :className="store.$state.desc5 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <heart-svg></heart-svg>
            </template>
            <template #title>Favorites </template>
            <template #description>
              <p v-show="store.$state.desc5">
                keep key projects, labels, or filters top of mind.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, false, true)"
        >
          <select-item
            :className="store.$state.desc6 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <reminder-svg></reminder-svg>
            </template>
            <template #title> Reminders </template>
            <template #description>
              <p v-show="store.$state.desc6">
                alert you about your most time-sensitive tasks.
              </p>
            </template>
          </select-item>
        </div>
      </div>
      <div class=" w-[700px] mt-10">
        <img :src="replaceSrc()" alt="" :class="`${store.$state.desc6 ? 'h-[600px]' : ''}`" />
      </div>
    </div>
  </section>
</template>
 