<script lang="ts">
export default {
  name: "Locations Listing",
};
</script>

<script setup lang="ts">
import list from "@/store/listings/locations/locations.store";
import page from "@/store/pages/listings/locations/locatiuonsPage.store";

import TemplateListing from "@/components/organisms/template/templateListing/TemplateListing.vue";

const _page_class = "p-locationsListing";
</script>

<template>
  <TemplateListing
    :cards="list"
    :extraClasses="_page_class"
    :title="page.title"
  />
</template>
