<script lang="ts">
export default {
  name: "Contact Page",
};
</script>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

import config from "@/store/config/config.store";
import page from "@/store/pages/contact/contact.store";

import Typography from "@/components/atoms/typography/AtomTypography.vue";

let _page_class = "p-contact";

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
  <div :class="_page_class">
    <Typography
      :extraClasses="_page_class + '__title'"
      :html="page.title"
      htmlTag="div"
      version="subheading2"
    />
  </div>
</template>

<style lang="scss"></style>
