const listes = "/listes";

const listings = [
  {
    path: listes,
    name: "default",
    component: () => import("@/views/listing/readView/ReadView.vue"),
  },
  {
    path: listes + "/lieux",
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
    path: listes + "/mots",
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
