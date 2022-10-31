<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useDeckStore } from "@/stores/deck";
import TheCard from "@/components/TheCard.vue";
import decks from "@/data/decks/index";
import type { Card } from "@/types/cards";

export default defineComponent({
  name: "DeckView",
  components: { TheCard },
  data() {
    return {
      options: decks.options,
    };
  },
  methods: {
    ...mapActions(useDeckStore, ["selectDeck", "selectCard"]),
    deckChange($event: Event) {
      const target = $event.target as HTMLSelectElement;
      this.selectDeck(decks[target.value]);
    },
    turnOver() {
      if (this.deck) {
        const d = { ...this.deck };
        d.isOpen = !d.isOpen;
        this.selectDeck(d);
      }
    },
    onCardClick(card: Card, isSelected: boolean) {
      if (isSelected) return;
      this.selectCard(card);
    },
    shuffle() {
      if (this.deck) {
        const d = { ...this.deck };
        d.cards = d.cards.sort(() => Math.random() - 0.5);
        this.selectDeck(d);
      }
    },
    isSelected(card: Card) {
      return this.selectedCards.some((c) => c.id === card.id);
    },
  },
  computed: {
    ...mapState(useDeckStore, ["deck", "selectedCards"]),
  },
});
</script>

<template>
  <div class="home">
    <select class="select" @change="deckChange" :value="deck && deck.name">
      <option value="" selected disabled>Выберите колоду</option>
      <option
        :key="option.value"
        v-for="option in options"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <span class="cards-count" v-if="deck"
      >Карт: {{ deck.cards.length }} шт.</span
    >

    <button @click="turnOver" class="button">Перевернуть</button>
    <button @click="shuffle" class="button">Перемешать</button>

    <div class="cards" v-if="deck">
      <the-card
        :key="card.id"
        v-for="(card, index) in deck.cards"
        :card="card"
        :shirtImage="deck.shirtImg"
        :index="index"
        :is-open="deck.isOpen"
        @onCardClick="onCardClick"
        :isSelected="isSelected(card)"
      />
    </div>
  </div>
</template>

<style scoped>
.select {
  padding: 10px;
  margin-bottom: 20px;
}
.button {
  cursor: pointer;
  padding: 10px;
  margin-left: 20px;
}
.cards-count {
  margin-left: 40px;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
