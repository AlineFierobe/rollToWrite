<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  title: String,
});
</script>

<script lang="ts">
export default {
  name: "OrganismHeader",
};

let organismClass = "o-header";
</script>

<template>
  <header :class="organismClass">
    <h2>{{ title }}</h2>
    <nav :class="organismClass + '__nav'">
      <ul :class="organismClass + '__navListWrapper'">
        <li :class="organismClass + '__navListItem'">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li :class="organismClass + '__navListItem'">
          <RouterLink to="/roll">Roll</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "./_header.scss";
</style>
