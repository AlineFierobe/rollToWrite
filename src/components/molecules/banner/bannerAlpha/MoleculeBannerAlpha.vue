<script setup lang="ts">
defineProps<{
  extraClasses?: string | Array<string>;
  url: string;
  alt: string;
}>();

let _molecule_class = "m-bannerAlpha";
</script>

<template>
  <section
    :alt="alt"
    :class="[_molecule_class, extraClasses]"
    :style="'background: url(' + url + ') center center/cover'"
  ></section>
</template>

<style scoped lang="scss">
@import "./_bannerAlpha";
</style>
