<script setup lang="ts">
import NavLink from "@/components/atoms/navLink/AtomNavLink.vue";
import Typography from "@/components/atoms/typography/AtomTypography.vue";

defineProps<{
  pageClass: string;
  links: Array<{
    description: string;
    icon: string;
    text: string;
    url: string;
  }>;
}>();
</script>

<template>
  <section :class="pageClass + '__linksWrapper'">
    <div v-for="link in links" :class="pageClass + '__linkItem'">
      <Typography
        :extra-classes="pageClass + '__linkDescription'"
        :html="link.description"
        version="body2"
      />
      <NavLink
        :extraClasses="pageClass + '__link'"
        :icon="link.icon"
        :text="link.text"
        :url="link.url"
      />
    </div>
  </section>
</template>

<style lang="scss">
@import "./_links";
</style>
