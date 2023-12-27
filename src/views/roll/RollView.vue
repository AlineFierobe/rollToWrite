<script lang="ts">
export default {
  name: "Roll Page",
};
</script>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

import config from "@/store/config/config.store";
import page from "@/store/pages/roll/rollPage.store";

import Typography from "@/components/atoms/typography/AtomTypography.vue";

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
  <div>
    <Typography html="Roll View" />
  </div>
</template>

<style scoped lang="scss">
@import "./_roll";
</style>
