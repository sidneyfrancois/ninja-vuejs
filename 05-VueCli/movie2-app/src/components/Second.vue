<template>
  <h2 :class="{ dark: theme === 'dark' }">{{ name }}</h2>
  <p>{{ text }}</p>
  <p>{{ secondText }}</p>
  <p>{{ someArray }}</p>
  <p>{{ subTitle }}</p>
</template>

<script>
export default {
  name: "Second",
  data() {
    return {
      name: "Name from the second",
    };
  },
  props: ["text", "secondText", "someArray", "subTitle", "theme"],
};
</script>

<style>
.dark {
  color: grey;
}
</style>
