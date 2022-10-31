import { defineStore } from "pinia";
import type { Deck, Card } from "@/types/cards";

export const useDeckStore = defineStore("deck", {
  state: () => ({
    deck: null as Deck | null,
    selectedCards: [] as Card[],
  }),
  actions: {
    selectDeck(deck: Deck) {
      this.deck = deck;
    },
    selectCard(card: Card) {
      this.selectedCards.push(card);
    },
    unSelectCard(card: Card) {
      this.selectedCards = this.selectedCards.filter((c) => c.id !== card.id);
    },
    resetSelectedCards() {
      this.selectedCards = [];
    },
  },
});
