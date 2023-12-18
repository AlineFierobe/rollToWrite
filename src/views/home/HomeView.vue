<script setup lang="ts">
import BannerAlpha from "@/components/molecules/banner/bannerAlpha/MoleculeBannerAlpha.vue";
import FontAwesome from "@/components/atoms/fontAwesome/AtomFontAwesome.vue";
import Typography from "@/components/atoms/typography/AtomTypography.vue";

import data from "@/store/pages/home/homePage.store";

let _page_class = "p-home";
</script>

<template>
  <div :class="_page_class">
    <BannerAlpha
      :alt="data.banner.imageAlt"
      :extraClasses="_page_class + '__banner'"
      :url="data.banner.imageUrl"
    />

    <section :class="_page_class + '__description'">
      <Typography
        :extraClasses="_page_class + '__description__title'"
        :html="data.description.title"
        htmlTag="h1"
        version="heading2"
      />

      <FontAwesome
        :extraClasses="_page_class + '__description__icon'"
        :icon="data.description.icon"
        size="5x"
      />
      <Typography
        :extraClasses="_page_class + '__description__html'"
        :html="data.description.text"
      />
    </section>
  </div>
</template>

<style lang="scss">
@import "./_home";
</style>
