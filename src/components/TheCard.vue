<template>
  <div
    class="card"
    @click="$emit('onCardClick', card, isSelected)"
    :class="{ selected: isSelected }"
  >
    <img class="image" v-if="isOpen" :src="card.img" alt="card_image" />
    <img class="image" v-else :src="shirtImage" alt="card_image" />
    <span class="number">{{ index + 1 }}</span>
  </div>
</template>

<script lang="ts">
import type { Card } from "@/types/cards";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheCard",
  props: {
    card: {} as () => Card,
    shirtImage: String,
    isOpen: Boolean,
    index: Number,
    isSelected: Boolean,
  },
});
</script>

<style scoped>
.card {
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 280px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: 0.2s;
}
.image {
  height: 100%;
}
.card:hover {
  z-index: 100;
  transform: scale(2);
}
.number {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  top: 20px;
  left: 20px;
  font-size: 16px;
  font-weight: 700;
}
.selected {
  opacity: 0.1;
}
.selected:hover {
  z-index: 0;
  transform: none;
}
</style>
