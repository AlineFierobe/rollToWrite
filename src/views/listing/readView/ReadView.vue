<script lang="ts">
export default {
  name: "Listing Read Page",
};
</script>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

import config from "@/store/config/config.store";
import page from "@/store/pages/listings/default/default.store";

import Typography from "@/components/atoms/typography/AtomTypography.vue";
import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";

let _page_class = "p-listingView";

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
      :extraClasses="_page_class + '__tagline'"
      :html="page.defaultTagline"
      htmlTag="div"
      version="subheading2"
    />

    <div :class="_page_class + '__html'">
      <Typography
        :extraClasses="_page_class + '__text'"
        :html="page.defaultText"
        htmlTag="div"
      />

      <NavLink
        :extraClasses="[_page_class + '__link']"
        :text="page.contactLinkText"
        :url="page.contactLinkUrl"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "_readView.scss";
</style>
