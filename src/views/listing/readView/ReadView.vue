<script lang="ts">
export default {
  name: "Listing Read Page",
};
</script>

<script setup lang="ts">
import store from "@/store/listings/listing/listing.store";

import Typography from "@/components/atoms/typography/AtomTypography.vue";
import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";

let _page_class = "p-listingView";
</script>

<template>
  <div :class="_page_class">
    <Typography
      :extraClasses="_page_class + '__tagline'"
      :html="store.defaultTagline"
      htmlTag="div"
      version="subheading2"
    />

    <div :class="_page_class + '__html'">
      à
      <Typography
        :extraClasses="_page_class + '__text'"
        :html="store.defaultText"
        htmlTag="div"
      />

      <NavLink
        :extraClasses="_page_class + '__link'"
        :text="store.contactLinkText"
        :url="store.contactLinkUrl"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "readView.scss";
</style>
