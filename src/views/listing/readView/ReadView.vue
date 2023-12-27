<script lang="ts">
export default {
  name: "Listing Read Page",
};
</script>

<script setup lang="ts">
import store from "@/store";

import Typography from "@/components/atoms/typography/AtomTypography.vue";
import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";

let _page_class = "p-listingView";
</script>

<template>
  <div :class="_page_class">
    <Typography
      :extraClasses="_page_class + '__tagline'"
      :html="store.listings.listing.defaultTagline"
      htmlTag="div"
      version="subheading2"
    />

    <div :class="_page_class + '__html'">
      à
      <Typography
        :extraClasses="_page_class + '__text'"
        :html="store.listings.listing.defaultText"
        htmlTag="div"
      />

      <NavLink url="/contact" text="ce lien" />
    </div>
  </div>
</template>

<style lang="scss">
@import "readView.scss";
</style>
