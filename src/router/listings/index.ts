const listes = "/listes";

const listings = [
  {
    path: listes + "/localisations",
    name: "locations",
    component: () => import("@/views/listing/locationsList/LocationsView.vue"),
  },
  {
    path: listes + "/personnages",
    name: "characters",
    component: () =>
      import("@/views/listing/charactersList/CharactersView.vue"),
  },
  {
    path: listes + "/situations",
    name: "situations",
    component: () =>
      import("@/views/listing/situationsList/SituationsView.vue"),
  },
  {
    path: listes + "/mots-incongrus",
    name: "words",
    component: () => import("@/views/listing/wordsList/WordsView.vue"),
  },
  {
    path: listes + "/contraintes",
    name: "constraints",
    component: () =>
      import("@/views/listing/constraintsList/ConstraintView.vue"),
  },
];

export default listings;
