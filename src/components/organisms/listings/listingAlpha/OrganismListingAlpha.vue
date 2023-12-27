<script lang="ts">
export default {
  name: "Listing Alpha",
  description: "A listing of cards",
};
</script>

<script setup lang="ts">
import CardAlpha from "@/components/molecules/cards/cardAlpha/MoleculeCardAlpha.vue";

defineProps<{
  extraClasses?: string | Array<string>;
  cards: Array<{ flags?: string | Array<string>; text: string }>;
}>();

const _organism_class = "o-listingAlpha";
</script>

<template>
  <div :class="[_organism_class, extraClasses]">
    <CardAlpha
      v-for="card in cards"
      :extraClasses="_organism_class + '__card'"
      :flags="card.flags"
      :html="card.text"
    />
  </div>
</template>

<style lang="scss">
@import "_listingAlpha.scss";
</style>
