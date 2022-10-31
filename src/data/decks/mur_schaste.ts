import type { Deck } from "@/types/cards";
import { createCards } from "@/data/decks/createCards";

export const mur_schaste: Deck = {
  id: "mur_schaste",
  name: "mur_schaste",
  shirtImg: "decks/mur_schaste/shirt.jpg",
  isOpen: false,
  cards: createCards("mur_schaste", 94, "jpg"),
};
