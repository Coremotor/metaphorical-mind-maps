import { defineStore } from "pinia";
import type { Deck, Card } from "@/types/cards";
const cards = localStorage.getItem("MMMSelectedCards");

export const useDeckStore = defineStore("deck", {
  state: () => ({
    deck: null as Deck | null,
    selectedCards: cards ? (JSON.parse(cards) as Card[]) : ([] as Card[]),
  }),
  actions: {
    selectDeck(deck: Deck) {
      this.deck = deck;
    },
    selectCard(card: Card) {
      this.selectedCards.push({
        ...card,
        // top: 0,
        // left: this.selectedCards.length * 100,
      });
    },
    unSelectCard(card: Card) {
      this.selectedCards = this.selectedCards.filter((c) => c.id !== card.id);
    },
    resetSelectedCards() {
      this.selectedCards = [];
    },
    showMovableCardOnTop(movableCard: Card) {
      this.resetZIndex();
      this.selectedCards = this.selectedCards.map((card) => {
        if (card.id === movableCard.id) {
          return { ...card, zIndex: 100 };
        } else return card;
      });
    },
    resetZIndex() {
      this.selectedCards = this.selectedCards.map((c) => ({ ...c, zIndex: 1 }));
    },
    saveCardPosition(movableCard: Card, top: number, left: number) {
      this.selectedCards = this.selectedCards.map((card) => {
        if (card.id === movableCard.id) {
          return { ...card, top, left };
        } else return card;
      });

      localStorage.setItem(
        "MMMSelectedCards",
        JSON.stringify(this.selectedCards)
      );
    },
  },
});
