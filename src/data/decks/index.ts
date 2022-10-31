import { mur_schaste } from "@/data/decks/mur_schaste";
import { allegorii } from "@/data/decks/allegorii";

const options = [
  { label: "Мур счастье", value: "mur_schaste" },
  { label: "Аллегории", value: "allegorii" },
];

export default {
  mur_schaste,
  allegorii,
  options,
} as { [key: string]: any };
