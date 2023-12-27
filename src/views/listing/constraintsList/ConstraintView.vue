<script lang="ts">
export default {
  name: "Constraints Listing",
};
</script>

<script setup lang="ts">
import list from "@/store/listings/constraints/constraints.store";
import page from "@/store/pages/listings/constraints/constraintsPage.store";

import TemplateListing from "@/components/organisms/template/templateListing/TemplateListing.vue";

const _page_class = "p-constraintsListing";
</script>

<template>
  <TemplateListing
    :cards="list"
    :description="page.description"
    :extraClasses="_page_class"
    :title="page.title"
  />
</template>
