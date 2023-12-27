<script setup lang="ts">
import { useHead } from "@vueuse/head";

import config from "@/store/config/config.store";
import page from "@/store/pages/home/homePage.store";

import BannerAlpha from "@/components/molecules/banner/bannerAlpha/MoleculeBannerAlpha.vue";
import SectionDescription from "./sections/description/SectionDescription.vue";
import SectionLinks from "./sections/links/SectionLinks.vue";

let _page_class = "p-home";

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
    <!-- SECTION TOP BANNER -->
    <BannerAlpha
      :alt="page.banner.imageAlt"
      :extraClasses="_page_class + '__banner'"
      :url="page.banner.imageUrl"
    />

    <!-- SECTION DESCRIPTION -->
    <SectionDescription :content="page.description" :pageClass="_page_class" />

    <!-- SECTION LINKS -->
    <SectionLinks :links="page.links" :pageClass="_page_class" />
  </div>
</template>

<style lang="scss">
@import "./_home";
</style>
