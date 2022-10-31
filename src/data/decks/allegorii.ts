import { createCards } from "@/data/decks/createCards";
import type { Deck } from "@/types/cards";

export const allegorii: Deck = {
  id: "allegorii",
  name: "allegorii",
  shirtImg: "decks/allegorii/shirt.png",
  isOpen: false,
  cards: createCards("allegorii", 99, "png"),
};
