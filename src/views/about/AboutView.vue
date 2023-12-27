<script lang="ts">
export default {
  name: "About",
};
</script>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

import config from "@/store/config/config.store";
import page from "@/store/pages/about/aboutPage.store";

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
  <div>About</div>
</template>
