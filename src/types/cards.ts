export interface Card {
  id: string;
  img: string;
  top?: number;
  left?: number;
  zIndex: number
}
export interface Deck {
  id: string;
  name: string;
  cards: Card[];
  shirtImg: string;
  isOpen: boolean;
}
