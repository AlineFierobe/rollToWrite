<script lang="ts">
export default {
  name: "Situations Listing",
};
</script>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

import config from "@/store/config/config.store";
import list from "@/store/listings/situations/situations.store";
import page from "@/store/pages/listings/situations/situationsPage.store";

import TemplateListing from "@/components/organisms/template/templateListing/TemplateListing.vue";

const _page_class = "p-situationsListing";

useHead({
  title: config.title + " | " + page.meta.title,
  meta: [
    {
      name: "description",
      content: page.meta.description,
    },
    {
      name: "keywords",
      content: [page.meta.keywords],
    },
    {
      name: "author",
      content: config.author,
    },
  ],
});
</script>

<template>
  <TemplateListing
    :cards="list"
    :description="page.description"
    :extraClasses="_page_class"
    :title="page.title"
  />
</template>
