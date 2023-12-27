<script lang="ts">
export default {
  name: "Card Alpha",
  description: "A card with or without flags list and a text",
};
</script>

<script setup lang="ts">
import Typography from "@/components/atoms/typography/AtomTypography.vue";

defineProps<{
  extraClasses?: string | Array<string>;
  flags?: string | Array<string>;
  html: string;
}>();

let _molecule_class = "m-cardAlpha";
</script>

<template>
  <article :class="[_molecule_class, extraClasses]">
    <div v-if="flags" :class="_molecule_class + '__flagWrapper'">
      <Typography
        v-for="flag in flags"
        :extraClasses="_molecule_class + '__flagItem'"
        :html="flag"
        htmlTag="span"
        version="tag"
      />
    </div>

    <Typography :html="html" version="body2" />
  </article>
</template>

<style lang="scss">
@import "_cardAlpha.scss";
</style>
