<script lang="ts">
export default {
  name: "Typography",
};
</script>

<script setup lang="ts">
const props = defineProps<{
  extraClasses?: string | Array<string>;
  htmlTag?: string;
  version?: string;
  html: string;
}>();

let _atom_class = "a-typography";
let _tag = props.htmlTag ? props.htmlTag : "div";
let _version =
  (_tag == "h1" && props.version == "") ||
  (_tag == "h2" && props.version == "") ||
  (_tag == "h3" && props.version == "") ||
  (_tag == "h4" && props.version == "") ||
  (_tag == "h5" && props.version == "") ||
  (_tag == "h6" && props.version == "")
    ? ""
    : props.version
    ? "-" + props.version
    : "-body1";
</script>

<template>
  <component
    :class="[_atom_class, _version, extraClasses]"
    :is="_tag"
    v-html="html"
  />
</template>

<style scoped lang="scss">
@import "./_typography";
</style>
