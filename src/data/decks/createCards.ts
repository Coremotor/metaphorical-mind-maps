import type { Card } from "@/types/cards";

export const createCards = (id: string, count: number, ext: string) => {
  const arr: Card[] = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      id: `${id}_${i}`,
      img: `decks/${id}/${i + 1}.${ext}`,
      zIndex: 1,
    });
  }
  return arr;
};
