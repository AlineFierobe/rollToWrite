<script lang="ts">
export default {
  name: "Listings Page",
};
</script>

<script setup lang="ts">
import { RouterView } from "vue-router";

import config from "@/store/config/config.store";
import page from "@/store/pages/listings/default/default.store";

import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";
import Typography from "@/components/atoms/typography/AtomTypography.vue";

let _page_class = "p-listing";
</script>

<template>
  <div :class="_page_class">
    <Typography
      :extraClasses="_page_class + '__title'"
      :html="page.title"
      htmlTag="h1"
      version="heading2"
    />

    <Typography
      :extraClasses="_page_class + '__description'"
      :html="page.description"
      htmlTag="div"
    />

    <section :class="_page_class + '__subSectionWrapper'">
      <nav :class="_page_class + '__subNavWrapper'">
        <NavLink
          v-for="link in config.listingFilters"
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
