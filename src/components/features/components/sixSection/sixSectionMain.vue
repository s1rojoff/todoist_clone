  <script setup>
import secondSecText from "../secondSection/secondSecText.vue";
import selectItem from "../secondSection/selectItem.vue";
import emailSvg from "./Svg/emailSvg.vue";
import commentSvg from "./Svg/commentSvg.vue";
import calendarSvg from "./Svg/calendarSvg.vue";
import { useStore } from "../../../../store";
import { TransitionGroup } from "vue";
const store = useStore();
const Src = [
  "public/img/mails.webp",
  "public/img/comments.webp",
  "public/img/calendar.webp",
];
function replaceSrc() {
  if (store.$state.desc13) {
    return Src[0];
  }
  if (store.$state.desc14) {
    return Src[1];
  }
  if (store.$state.desc15) {
    return Src[2];
  }
}
function descriptionShow(arg1, arg2, arg3) {
  store.$state.desc13 = arg1;
  store.$state.desc14 = arg2;
  store.$state.desc15 = arg3;
}
</script>
  <template>
  <section class="w-full mt-20 flex justify-center">
    <div class="w-[80%] flex justify-between">
      <div class="w-[700px] bg-phone">
        <img :src="replaceSrc()" alt="" />
      </div>
      <div class="w-[400px] mr-[100px]">
        <div class="mb-3">
          <second-sec-text>
            <template #title>
              <h1 class="leading-[50px]">
                Centralize all your work in one place
              </h1>
            </template>
            <template #description>
              Simplify your workflow by connecting Todoist to your email,
              calendar, and files.
            </template>
          </second-sec-text>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(true, false, false)"
        >
          <select-item
            :className="store.$state.desc13 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <email-svg></email-svg>
            </template>
            <template #title>Add tasks via email</template>
            <template #description>
              <p v-show="store.$state.desc13">
                by forwarding emails into Todoist as tasks or comments.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, true, false)"
        >
          <select-item
            :className="store.$state.desc14 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <comment-svg></comment-svg>
            </template>
            <template #title>Comments & file uploads </template>
            <template #description>
              <p v-show="store.$state.desc14">
                (including voice notes) give rich context to your tasks.
              </p>
            </template>
          </select-item>
        </div>
        <div
          class="mb-3 rounded-xl"
          @click="descriptionShow(false, false, true)"
        >
          <select-item
            :className="store.$state.desc15 ? 'bg-red-100' : 'bg-gray-100'"
          >
            <template #svg>
              <calendar-svg></calendar-svg>
            </template>
            <template #title>Calendar feeds </template>
            <template #description>
              <p v-show="store.$state.desc15">
                display your scheduled tasks inside your calendar of choice.
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
  background-image: url("public/img/section3-bg.webp");
  background-size: cover;
}
</style>