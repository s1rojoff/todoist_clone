import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => {
    return {
      overlay: false,
      desc1: true,
      desc2: false,
      desc3: false,
      desc4: true,
      desc5: false,
      desc6: false,
      desc7: true,
      desc8: false,
      desc9: true,
      desc10: false,
      desc11: false,
      desc12: false,
      desc13: true,
      desc14: false,
      desc15: false,
      selectChecked: false,
      todayView: false,
      taskSection: false,
      showPlusSvg: false,
      checked : true,
      showModal : false,
      showSidebar : true,
      colors: [
        {
          id: 1,
          color: "bg-red-700",
          Name: "Berry Red",
        },
        {
          id: 2,
          color: "bg-red-600",
          Name: "Red",
        },
        {
          id: 3,
          color: "bg-orange-300",
          Name: "Orange",
        },
        {
          id: 4,
          color: "bg-yellow-400",
          Name: "Yellow",
        },
        {
          id: 5,
          color: "bg-lime-400",
          Name: "Olive Green ",
        },
        {
          id: 6,
          color: "bg-lime-600",
          Name: "Lime Green ",
        },
        {
          id: 6,
          color: "bg-green-600",
          Name: "Green ",
        },
        {
          id: 7,
          color: "bg-green-400",
          Name: "Mint Green ",
        },
        {
          id: 8,
          color: "bg-teal-600",
          Name: "Teal ",
        },
        {
          id: 9,
          color: "bg-sky-500",
          Name: "Sky Blue ",
        },
        {
          id: 10,
          color: "bg-blue-600",
          Name: "Light Blue  ",
        },
        {
          id: 11,
          color: "bg-blue-700 ",
          Name: "Blue  ",
        },
        {
          id: 12,
          color: "bg-violet-500",
          Name: "Grape  ",
        },
        {
          id: 13,
          color: "bg-violet-800",
          Name: "Violet",
        },
        {
          id: 14,
          color: "bg-purple-400",
          Name: "Lavender",
        },
        {
          id: 15,
          color: "bg-pink-400",
          Name: "Magenta",
        },
        {
          id: 16,
          color: "bg-rose-300",
          Name: "Salmon",
        },
        {
          id: 17,
          color: "bg-stone-500",
          Name: "Charcoal",
        },
        {
          id: 18,
          color: "bg-stone-400",
          Name: "Gray",
        },
        {
          id: 19,
          color: "bg-amber-700",
          Name: "Taupe",
        },
      ],
      todayTask: '',
      todayTasks : [],
      taskIndex : '',
      taskCount  : '',
      inbox_taskName: true,
      inbox_tasksSecName: '',
      rotateSvg: false,
      secInboxTask : '',
      inboxSecTasks: [],
      inboxSecTask_task: '',
      inboxSecTask_description: '',
      inboxMainTasks: [],
      inboxTask: '',
      inboxDescription: '',
      inboxSecTask :{
        task: '',
        description: ''
      },
      showBlock : false,
      Items : [],
      item : {
        name: "",
        color: ""
      }
    };
  },
})