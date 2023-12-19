<script setup lang="ts">
import BannerAlpha from "@/components/molecules/banner/bannerAlpha/MoleculeBannerAlpha.vue";
import SectionDescription from "./sections/description/SectionDescription.vue";

import data from "@/store/pages/home/homePage.store";

let _page_class = "p-home";
</script>

<template>
  <div :class="_page_class">
    <!-- SECTION TOP BANNER -->
    <BannerAlpha
      :alt="data.banner.imageAlt"
      :extraClasses="_page_class + '__banner'"
      :url="data.banner.imageUrl"
    />

    <!-- SECTION DESCRIPTION -->
    <SectionDescription :content="data.description" :pageClass="_page_class" />
  </div>
</template>

<style lang="scss">
@import "./_home";
</style>
