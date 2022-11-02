<template>
  <div class="card-wrapper" ref="card" @mousedown="onMouseDown($event)">
    <div class="card" @click.right.stop="toggle" @contextmenu.prevent>
      <img class="image" :src="card.img" alt="card_image" />
      <div class="unSelect" @click.stop="unSelectCard">
        <img class="close-icon" :src="closeIcon" alt="closeIcon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Card } from "@/types/cards";
import closeIcon from "@/assets/icons/icons8-close.svg";

export default defineComponent({
  name: "TheSelectedCard",
  data: () => ({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    el: null as HTMLElement | null,
    closeIcon,
  }),
  props: {
    card: Object as () => Card,
  },
  mounted() {
    this.el = this.$refs.card as HTMLElement;
    if (this.el) {
      this.el.style.top = (this.card?.top || 0) + "px";
      this.el.style.left = (this.card?.left || 0) + "px";
    }
  },
  computed: {
    top() {
      return this.el ? this.el.offsetTop - this.pos2 : 0;
    },
    left() {
      return this.el ? this.el.offsetLeft - this.pos1 : 0;
    },
  },
  methods: {
    toggle() {
      this.$emit("toggleShowCard", this.card?.img);
    },
    unSelectCard() {
      this.$emit("unSelectCard", this.card);
    },
    onMouseDown(e: MouseEvent) {
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.onMouseUp;
    },
    onMouseUp() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
    elementDrag(e: MouseEvent) {
      this.pos1 = this.pos3 - e.clientX;
      this.pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      if (this.el) {
        this.el.style.top = this.top + "px";
        this.el.style.left = this.left + "px";
      }
    },
  },
});
</script>

<style scoped>
.card-wrapper {
  position: absolute;
  border-radius: 16px;
}
.card {
  cursor: move;
  width: 200px;
  height: 280px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.image {
  height: 100%;
  border-radius: 16px;
  pointer-events: none;
}
.unSelect {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 5px;
}
.close-icon {
  width: 16px;
  height: 16px;
}
</style>
