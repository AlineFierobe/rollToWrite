<script lang="ts">
export default {
  name: "Header",
};
</script>

<script setup lang="ts">
import NavLink from "../../atoms/navLink/AtomNavLink.vue";
import Typography from "../../atoms/typography/AtomTypography.vue";

import store from "@/store/index";

let organismClass = "o-header";
</script>

<template>
  <header :class="organismClass">
    <Typography
      :extraClasses="organismClass + '__title'"
      :html="store.config.title"
      version="heading2"
    />
    <nav :class="organismClass + '__nav'">
      <ul :class="organismClass + '__navListWrapper'">
        <li
          v-for="link in store.config.nav"
          :class="organismClass + '__navListItem'"
        >
          <NavLink
            :extraClasses="organismClass + '__navListAnchor'"
            :icon="link.icon"
            size="3x"
            :text="link.text"
            :url="link.url"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import "./_header";
</style>
