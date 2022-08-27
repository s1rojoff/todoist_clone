import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => {
    return {
      overlay : false,
      desc1 : true,
      desc2 : false,
      desc3 : false,
      desc4 : true,
      desc5 : false,
      desc6 : false,
      desc7 : true,
      desc8 : false,
      desc9 : true,
      desc10 : false,
      desc11 : false,
      desc12 : false,
      desc13 : true,
      desc14 : false,
      desc15 : false,
      isActive1 : false, 
      isActive2 : true, 
      isActive3 : false, 
      isActive4 : false, 
    };
  },
})