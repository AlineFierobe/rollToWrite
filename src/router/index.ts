import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import listings from "./listings";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/roll",
      name: "roll",
      component: () => import("@/views/roll/RollView.vue"),
    },
    {
      path: "/listings",
      name: "listings",
      component: () => import("@/views/listing/ListingView.vue"),
      children: listings,
    },
  ],
});

export default router;
