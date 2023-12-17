<script lang="ts">
export default {
  name: "Footer",
};
</script>

<script setup lang="ts">
import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";
import Typography from "@/components/atoms/typography/AtomTypography.vue";

import store from "@/store/index";

let organismClass = "o-footer";
</script>

<template>
  <footer :class="organismClass">
    <Typography
      :extraClasses="organismClass + '__title'"
      :html="store.config.title"
      version="title"
    />

    <NavLink
      :extraClasses="organismClass + '__link'"
      :text="store.config.about.text"
      :url="store.config.about.url"
    />
  </footer>
</template>

<style lang="scss">
@import "./_footer";
</style>
