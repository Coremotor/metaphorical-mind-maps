<template>
  <div class="card-wrapper" ref="card" @mousedown="mouseDown">
    <div class="card" @click.stop="toggle">
      <img class="image" :src="card.img" alt="card_image" />
      <button class="unSelect" @click.stop="unSelectCard">x</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Card } from "@/types/cards";

export default defineComponent({
  name: "TheSelectedCard",
  data: () => ({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
  }),
  props: {
    card: Object as () => Card,
  },
  methods: {
    toggle() {
      this.$emit("toggleShowCard", this.card?.img);
    },
    unSelectCard() {
      this.$emit("unSelectCard", this.card);
    },
    mouseDown(e: any) {
      const el = this.$refs.card;
      console.log(e);
    },
  },
});
</script>

<style scoped>
.card-wrapper {
  /*position: absolute;*/
}
.card {
  cursor: pointer;
  width: 200px;
  height: 280px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.image {
  height: 100%;
}
.unSelect {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 5px;
}
</style>
