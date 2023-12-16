const listings = [
  {
    path: "/locations",
    name: "locations",
    component: () => import("@/views/listing/locations/LocationsView.vue"),
  },
  {
    path: "/characters",
    name: "characters",
    component: () => import("@/views/listing/characters/CharactersView.vue"),
  },
  {
    path: "/situations",
    name: "situations",
    component: () => import("@/views/listing/situations/SituationsView.vue"),
  },
  {
    path: "/listings/words",
    name: "words",
    component: () => import("@/views/listing/words/WordsView.vue"),
  },
  {
    path: "/constraints",
    name: "constraints",
    component: () => import("@/views/listing/constraints/ConstraintView.vue"),
  },
];

export default listings;
