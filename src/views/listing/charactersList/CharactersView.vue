<script lang="ts">
export default {
  name: "Characters Listing",
};
</script>

<script setup lang="ts">
import list from "@/store/listings/characters/characters.store";
import page from "@/store/pages/listings/characters/charactersPage.store";

import TemplateListing from "@/components/organisms/template/templateListing/TemplateListing.vue";

const _page_class = "p-charactersListing";
</script>

<template>
  <TemplateListing
    :cards="list"
    :description="page.description"
    :extraClasses="_page_class"
    :title="page.title"
  />
</template>
