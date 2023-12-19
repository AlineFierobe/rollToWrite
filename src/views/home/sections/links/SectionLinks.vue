<script setup lang="ts">
import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";
import Typography from "@/components/atoms/typography/AtomTypography.vue";

defineProps<{
  pageClass: string;
  links: Array<{
    description: string;
    text: string;
    url: string;
  }>;
}>();
</script>

<template>
  <section :class="pageClass + '__linksWrapper'">
    <div v-for="link in links" :class="pageClass + '__linkItem'">
      <Typography
        :html="link.description"
        :extra-classes="pageClass + '__linkDescription'"
      />
      <NavLink
        :url="link.url"
        :text="link.text"
        :extraClasses="pageClass + '__link'"
      />
    </div>
  </section>
</template>

<style lang="scss">
@import "./_links";
</style>
