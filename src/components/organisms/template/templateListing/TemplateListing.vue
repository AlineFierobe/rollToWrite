<script lang="ts">
export default {
  name: "Template Listing",
};
</script>

<script setup lang="ts">
import Typography from "@/components/atoms/typography/AtomTypography.vue";
import ListingAlpha from "@/components/organisms/listings/listingAlpha/OrganismListingAlpha.vue";

defineProps<{
  extraClasses?: string | Array<string>;
  title: string;
  cards: Array<{ flags?: string | Array<string>; text: string }>;
}>();

const _template_class = "t-listing";
</script>

<template>
  <section :class="[_template_class, extraClasses]">
    <Typography
      :extraClasses="_template_class + '__title'"
      :html="title"
      htmlTag="h2"
      version="heading4"
    />

    <ListingAlpha
      :cards="cards"
      :extraClasses="_template_class + '__cardWrapper'"
    />
  </section>
</template>

<style scoped lang="scss">
@import "_templateListing.scss";
</style>
