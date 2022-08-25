  <script setup>
import secondSecText from "../secondSection/secondSecText.vue";
import selectItem from "../secondSection/selectItem.vue";
import delegateSvg from "./Svg/delegateSvg.vue";
import notifSvg from "./Svg/notifSvg.vue";
import { useStore } from "../../../../store";
import { TransitionGroup } from "vue";
const store = useStore();
const Src = [
  "public/img/delegate-tasks.webp",
  "public/img/notifications.webp",
];
function replaceSrc() {
  if (store.$state.desc7) {
    return Src[0];
  }
  if (store.$state.desc8) {
    return Src[1];
  }
}
function descriptionShow(arg1, arg2) {
  store.$state.desc7 = arg1;
  store.$state.desc8 = arg2;

}
</script>
  <template>
  <section class="w-full mt-20 flex justify-center">
    <div class="w-[80%] flex justify-between">
      <div class=" w-[700px] bg-phone">
        <img :src="replaceSrc()" alt=""  class="h-[600px] translate-x-24"/>
      </div>
      <div class="w-[400px] mr-[100px]">
        <div class="mb-3">
          <second-sec-text>
            <template #title>
              <h1 class="leading-[50px]">
               Share the workload
              </h1>
            </template>
            <template #description>
              From business ventures to grocery lists, divide and conquer your daily tasks in shared projects.
            </template>
          </second-sec-text>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(true, false)"
        >
          <select-item
            :className="store.$state.desc7 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <delegate-svg></delegate-svg>
            </template>
            <template #title>Delegate tasks</template>
            <template #description>
              <p v-show="store.$state.desc7">
                to other people and free up your mental space.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, true)"
        >
          <select-item
            :className="store.$state.desc8 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <notif-svg></notif-svg>
            </template>
            <template #title>Notifications </template>
            <template #description>
              <p v-show="store.$state.desc8">
                let you know when people post comments, complete tasks, and more.
              </p>
            </template>
          </select-item>
        </div>
      </div>
    </div>
  </section>
</template>
  <style scoped>
.bg-phone {
  background-image: url("public/img/phone-bg.webp");
  background-size: 900px;
  background-repeat: no-repeat ;
  background-position: right;
}
</style>