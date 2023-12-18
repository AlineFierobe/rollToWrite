<script setup lang="ts">
defineProps<{
  alt: string;
  extraClasses?: string | Array<string>;
  title?: string;
  url: string;
}>();

let _atom_class = "a-image";
</script>

<template>
  <img
    :src="url"
    :class="[_atom_class, extraClasses]"
    :alt="alt"
    :title="title ? title : alt"
  />
</template>

<style scoped lang="scss">
@import "./_image";
</style>
