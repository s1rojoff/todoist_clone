  <script setup>
  import secondSecImg from "./secondSecImg.vue";
  import secondSecText from "./secondSecText.vue";
  import selectItem from "./selectItem.vue";
  import PlusSvg from "./Svg/plusSvg.vue";
  import ReturnSvg from "./Svg/returnSvg.vue";
  import SubtaskSvg from "./Svg/subtaskSvg.vue";
  import { useStore } from "../../../../store";
  import { TransitionGroup } from "vue";
  const store = useStore()
  const Src = ["public/img/quick-add.webp","public/img/recurring-due-dates.webp","public/img/sections-subtasks.webp"]
  function replaceSrc(){
    if (store.$state.desc1) {
      return Src[0]
    }
    if (store.$state.desc2) {
      return Src[1]
    }
    if (store.$state.desc3) {
      return Src[2]
    }
  }
  function descriptionShow(arg1,arg2,arg3){
      store.$state.desc1 = arg1
      store.$state.desc2 = arg2
      store.$state.desc3 = arg3
  }
  </script>
  <template>
    <section class="w-full mt-20 flex justify-center ">
      <div class="w-[80%] flex justify-between bg-dots">
        <div class="translate-x-[-150px] w-[700px]">
          <img :src="replaceSrc()" alt="">
        </div>
        <div class="w-[400px] mr-[100px]">
          <div class="mb-3">
            <second-sec-text>
              <template #title>
                <h1 class=" leading-[50px]">Start each day feeling calm and in control</h1>
              </template>
              <template #description>
                Get a clear overview of everything on your plate and never lose track of an important task.
              </template>
            </second-sec-text>
          </div>
          <div class="mb-3 rounded-xl"
          @click="descriptionShow(true,false,false)">
            <select-item :className="store.$state.desc1 ? 'bg-red-100' : 'bg-gray-100'">
              <template #svg>
                <plus-svg></plus-svg>
              </template>
              <template #title> Quick Add </template>
              <template #description>
                <p v-show="store.$state.desc1">lets you capture and organize tasks in seconds.</p>
              </template>
            </select-item>
          </div>
          <div class="mb-3 rounded-xl"
          @click="descriptionShow(false,true,false)">
            <select-item :className="store.$state.desc2 ? 'bg-red-100' : 'bg-gray-100'">
              <template #svg>
                <return-svg></return-svg>
              </template>
              <template #title> Recurring due dates </template>
              <template #description>
                <p v-show="store.$state.desc2"> help you remember deadlines and build habits.</p>
              
              </template>
            </select-item>
          </div>
          <div class="mb-3 rounded-xl"
          @click="descriptionShow(false,false,true)"
          >
            <select-item :className="store.$state.desc3  ? 'bg-red-100' : 'bg-gray-100'">
              <template #svg>
                <subtask-svg></subtask-svg>
              </template>
              <template #title> Sections & subtasks </template>
              <template #description>
                <p v-show="store.$state.desc3">  ensure that your projects stay neatly organized.</p>
              </template>
            </select-item>
          </div>
        </div>
      </div>
    </section>
  </template>
  <style scoped>
  .bg-dots {
    background-image: url("public/img/dots-bg.webp");
    background-size: cover;
    background-position: center;
  }
  </style>