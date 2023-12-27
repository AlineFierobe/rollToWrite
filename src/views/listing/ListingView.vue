<script lang="ts">
export default {
  name: "Listings Page",
};
</script>

<script setup lang="ts">
import { RouterView } from "vue-router";

import store from "@/store";

import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";
import Typography from "@/components/atoms/typography/AtomTypography.vue";

let _page_class = "p-listing";
</script>

<template>
  <div :class="_page_class">
    <Typography
      :extraClasses="_page_class + '__title'"
      :html="store.listings.listing.title"
      htmlTag="h1"
      version="heading2"
    />

    <Typography
      :extraClasses="_page_class + '__description'"
      :html="store.listings.listing.description"
      htmlTag="div"
    />

    <section :class="_page_class + '__subSectionWrapper'">
      <nav :class="_page_class + '__subNavWrapper'">
        <NavLink
          v-for="link in store.config.listingFilters"
          :extraClasses="_page_class + '__subNavItem'"
          :text="link.text"
          :url="link.url"
        />
      </nav>

      <RouterView />
    </section>
  </div>
</template>

<style lang="scss">
@import "./_listing.scss";
</style>
