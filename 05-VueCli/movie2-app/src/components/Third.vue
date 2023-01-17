<template>
  <h2>The third component</h2>
  <h3>{{ baseName }}</h3>
  <h4>{{ movietitle }}</h4>
  <h4>{{ duration }}</h4>

  <slot></slot>
</template>
<script>
export default {
  name: "Third",
  props: ["movieTitle", "duration"],
  data() {
    return {
      baseName: "name from the third component",
    };
  },
};
</script>
<style></style>
