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
          color: "#b8255f",
          Name: "Berry Red",
        },
        {
          id: 2,
          color: "#db4035",
          Name: "Red",
        },
        {
          id: 3,
          color: "#ff9d3a",
          Name: "Orange",
        },
        {
          id: 4,
          color: "#fad000",
          Name: "Yellow",
        },
        {
          id: 5,
          color: "#afb83b",
          Name: "Olive Green ",
        },
        {
          id: 6,
          color: "#7ecc49",
          Name: "Lime Green ",
        },
        {
          id: 6,
          color: "#299438",
          Name: "Green ",
        },
        {
          id: 7,
          color: "#6accbc",
          Name: "Mint Green ",
        },
        {
          id: 8,
          color: "#158fad",
          Name: "Teal ",
        },
        {
          id: 9,
          color: "#14aaf5",
          Name: "Sky Blue ",
        },
        {
          id: 10,
          color: "#96c3eb",
          Name: "Light Blue  ",
        },
        {
          id: 11,
          color: "#4073ff",
          Name: "Blue  ",
        },
        {
          id: 12,
          color: "#884dff",
          Name: "Grape  ",
        },
        {
          id: 13,
          color: "#af38eb",
          Name: "Violet",
        },
        {
          id: 14,
          color: "#eb96eb",
          Name: "Lavender",
        },
        {
          id: 15,
          color: "#e05194",
          Name: "Magenta",
        },
        {
          id: 16,
          color: "#ff8d85",
          Name: "Salmon",
        },
        {
          id: 17,
          color: "#808080",
          Name: "Charcoal",
        },
        {
          id: 18,
          color: "#b8b8b8",
          Name: "Gray",
        },
        {
          id: 19,
          color: "#ccac93",
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
      inboxSecTask :{
        task: '',
        description: ''
      }
    };
  },
})