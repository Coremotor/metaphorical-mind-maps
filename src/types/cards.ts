export interface Card {
  id: string;
  img: string;
}
export interface Deck {
  id: string;
  name: string;
  cards: Card[];
  shirtImg: string;
  isOpen: boolean;
}
