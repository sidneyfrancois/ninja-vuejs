<template>
  <h2 :class="{ dark: theme === 'dark' }">{{ name }}</h2>
  <p>{{ text }}</p>
  <p>{{ secondText }}</p>
  <p>{{ someArray }}</p>
  <p>{{ subTitle }}</p>
  <button @click="closeSecond">Hide Second Component</button>
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
  methods: {
    closeSecond() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.dark {
  color: grey;
}
</style>
