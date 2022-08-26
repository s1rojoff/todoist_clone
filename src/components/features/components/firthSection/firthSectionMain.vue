  <script setup>
import secondSecText from "../secondSection/secondSecText.vue";
import selectItem from "../secondSection/selectItem.vue";
import boardSvg from "./Svg/boardSvg.vue";
import filterSvg from "./Svg/filterSvg.vue";
import labelSvg from "./Svg/labelSvg.vue";
import themeSvg from "./Svg/themeSvg.vue";
import { useStore } from "../../../../store";
import { TransitionGroup } from "vue";
const store = useStore();
const Src = [
  "public/img/boards.webp",
  "public/img/labels.webp",
  "public/img/filters.webp",
  "public/img/themes.webp",
];
function replaceSrc() {
  if (store.$state.desc9) {
    return Src[0];
  }
  if (store.$state.desc10) {
    return Src[1];
  }
  if (store.$state.desc11) {
    return Src[2];
  }
  if(store.$state.desc12){
    return Src[3]
  }
}
function descriptionShow(arg1, arg2, arg3,arg4) {
  store.$state.desc9 = arg1;
  store.$state.desc10 = arg2;
  store.$state.desc11 = arg3;
  store.$state.desc12 = arg4;
}
</script>
  <template>
  <section class="w-full mt-24 flex justify-center sec-bg">
    <div class="w-[80%] flex justify-between">
      <div class="w-[400px] mr-[100px]">
        <div class="mb-3">
          <second-sec-text>
            <template #title>
              <h1 class="leading-[50px]">
               Personalize your task views
              </h1>
            </template>
            <template #description>
              Build your own task views to fit your unique style and workflow.
            </template>
          </second-sec-text>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(true, false, false,false)"
        >
          <select-item
            :className="store.$state.desc9 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <board-svg></board-svg>
            </template>
            <template #title> Boards</template>
            <template #description>
              <p v-show="store.$state.desc9">
               help you see the big picture with Kanban-style cards.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, true,false, false)"
        >
          <select-item
            :className="store.$state.desc10 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <label-svg></label-svg>
            </template>
            <template #title>Labels </template>
            <template #description>
              <p v-show="store.$state.desc10">
                help you find the right group of tasks in seconds.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, false, true,false)"
        >
          <select-item
            :className="store.$state.desc11 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <filter-svg></filter-svg>
            </template>
            <template #title> Filters </template>
            <template #description>
              <p v-show="store.$state.desc11">
                give you custom task views based on due dates, project, assignee, and more.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, false,false, true)"
        >
          <select-item
            :className="store.$state.desc12 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <theme-svg></theme-svg>
            </template>
            <template #title> Themes </template>
            <template #description>
              <p v-show="store.$state.desc12">
                match your style, mood, and personality with 10+ colors.
              </p>
            </template>
          </select-item>
        </div>
      </div>
      <div class="w-[900px] translate-x-[150px] mt-10">
        <img
          :src="replaceSrc()"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
    .sec-bg{
        background-image: url("public/img/section2-bg.webp");
        background-size: cover;
    }
</style>
 