const listes = "/listes";

const listings = [
  {
    path: listes + "/localisations",
    name: "locations",
    component: () => import("@/views/listing/locations/LocationsView.vue"),
  },
  {
    path: listes + "/personnages",
    name: "characters",
    component: () => import("@/views/listing/characters/CharactersView.vue"),
  },
  {
    path: listes + "/situations",
    name: "situations",
    component: () => import("@/views/listing/situations/SituationsView.vue"),
  },
  {
    path: listes + "/mots-incongrus",
    name: "words",
    component: () => import("@/views/listing/words/WordsView.vue"),
  },
  {
    path: listes + "/contraintes",
    name: "constraints",
    component: () => import("@/views/listing/constraints/ConstraintView.vue"),
  },
];

export default listings;
