<script lang="ts">
export default {
  name: "Words Listing",
};
</script>

<script setup lang="ts">
import list from "@/store/listings/words/words.store";
import page from "@/store/pages/listings/words/wordsPage.store";

import TemplateListing from "@/components/organisms/template/templateListing/TemplateListing.vue";

const _page_class = "p-wordsListing";
</script>

<template>
  <TemplateListing
    :cards="list"
    :description="page.description"
    :extraClasses="_page_class"
    :title="page.title"
  />
</template>
