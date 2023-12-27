<script lang="ts">
export default {
  name: "Contact Page",
};
</script>

<script setup lang="ts">
import store from "@/store";

import Typography from "@/components/atoms/typography/AtomTypography.vue";

let _page_class = "p-contact";
</script>

<template>
  <div :class="_page_class">
    <Typography
      :extraClasses="_page_class + '__tagline'"
      :html="store.listings.listing.defaultTagline"
      htmlTag="div"
      version="subheading2"
    />
  </div>
</template>

<style lang="scss">
@import "readView.scss";
</style>
