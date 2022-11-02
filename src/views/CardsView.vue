<template>
  <div class="wrapper">
    <div
      v-if="show"
      class="popup"
      @click.right.stop="toggleShowCard"
      @contextmenu.prevent
    >
      <div class="window" @click.right.stop @contextmenu.prevent>
        <img class="image" :src="img" alt="card_image" />
      </div>
    </div>

    <button class="button" @click="resetSelectedCards">Сбросить</button>
    <div class="container">
      <the-selected-card
        :key="card.id"
        v-for="card in selectedCards"
        @unSelectCard="unSelectCard"
        @toggleShowCard="toggleShowCard"
        :card="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from "pinia";
import { useDeckStore } from "@/stores/deck";
import { defineComponent } from "vue";
import TheSelectedCard from "@/components/TheSelectedCard.vue";

export default defineComponent({
  name: "CardView",
  components: { TheSelectedCard },
  data() {
    return {
      show: false,
      img: "",
    };
  },
  methods: {
    ...mapActions(useDeckStore, ["unSelectCard", "resetSelectedCards"]),
    toggleShowCard(img: string = "") {
      this.show = !this.show;
      this.img = img;
    },
  },
  computed: {
    ...mapState(useDeckStore, ["selectedCards"]),
  },
});
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}
.window {
  height: 80vh;
}
.container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  user-select: none;

}
.image {
  height: 100%;
}
.button {
  cursor: pointer;
  padding: 10px;
}
</style>
