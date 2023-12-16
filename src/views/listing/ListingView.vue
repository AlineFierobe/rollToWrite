<script lang="ts">
export default {
  name: "Listings Page",
};
</script>

<script setup lang="ts">
import { RouterView } from "vue-router";

import store from "@/store";

import NavLink from "../../components/atoms/navLink/AtomNavLink.vue";
import Typography from "../../components/atoms/typography/AtomTypography.vue";

let _page_class = "p-listing";
</script>

<template>
  <div :class="_page_class">
    <Typography htmlTag="h4" html="Listing" />

    <NavLink
      v-for="link in store.config.listingFilters"
      :text="link.text"
      :url="link.url"
    />

    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
