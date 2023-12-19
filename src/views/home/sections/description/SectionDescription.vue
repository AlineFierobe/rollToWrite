<script setup lang="ts">
import FontAwesome from "@/components/atoms/fontAwesome/AtomFontAwesome.vue";
import Typography from "@/components/atoms/typography/AtomTypography.vue";

defineProps<{
  pageClass: string;
  content: {
    title: string;
    text: string;
    icon: string;
  };
}>();
</script>

<template>
  <section :class="pageClass + '__descriptionWrapper'">
    <Typography
      :extraClasses="pageClass + '__descriptionTitle'"
      :html="content.title"
      htmlTag="h1"
      version="heading2"
    />

    <FontAwesome
      :extraClasses="pageClass + '__descriptionIcon'"
      :icon="content.icon"
      size="5x"
    />
    <Typography
      :extraClasses="pageClass + '__descriptionHtml'"
      :html="content.text"
    />
  </section>
</template>

<style lang="scss">
@import "./_description";
</style>
