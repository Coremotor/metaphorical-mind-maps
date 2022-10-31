<template>
  <div class="wrapper">
    <div v-if="show" class="popup" @click.stop="toggleShowCard">
      <div class="window" @click.stop>
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
.button {
  cursor: pointer;
  padding: 10px;
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
