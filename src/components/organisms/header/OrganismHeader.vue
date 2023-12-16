<script lang="ts">
export default {
  name: "OrganismHeader",
};
</script>

<script setup lang="ts">
import NavLink from "../../atoms/navLink/AtomNavLink.vue";
import store from "@/store/index";

let organismClass = "o-header";
</script>

<template>
  <header :class="organismClass">
    <h2>{{ store.config.title }}</h2>
    <nav :class="organismClass + '__nav'">
      <ul :class="organismClass + '__navListWrapper'">
        <li
          v-for="link in store.config.nav"
          :class="organismClass + '__navListItem'"
        >
          <NavLink
            :text="link.text"
            :url="link.url"
            :icon="link.icon"
            :extraClasses="organismClass + '__navListItem'"
            size="3x"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "./_header.scss";
</style>
