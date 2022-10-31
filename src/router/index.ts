import { createRouter, createWebHistory } from "vue-router";
import DeckView from "@/views/DeckView.vue";
import CardsView from "@/views/CardsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "deck",
      component: DeckView,
    },
    {
      path: "/cards",
      name: "cards",
      component: CardsView,
    },
  ],
});

export default router;
