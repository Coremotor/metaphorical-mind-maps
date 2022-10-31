import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ number: 0 as number, title: "Eduardo" as string }),
  getters: {
    doubleCount: (state) => state.number * 2,
  },
  actions: {
    increment() {
      this.number++;
    },
  },
});
