<script lang="ts">
export default {
  name: "Listing Read Page",
};
</script>

<script setup lang="ts">
import store from "@/store";

import Typography from "@/components/atoms/typography/AtomTypography.vue";

let _page_class = "p-listingView";
</script>

<template>
  <Typography
    :extraClasses="_page_class + '__description'"
    :html="store.listings.listing.defaultText"
    htmlTag="div"
  />
</template>

<style lang="scss"></style>
