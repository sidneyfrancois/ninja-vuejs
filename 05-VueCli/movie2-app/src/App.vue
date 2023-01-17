<template>
  <h2>{{ title }}</h2>
  <button @click="toggleSecond" v-if="!showSecond">
    Show Second Component
  </button>
  <div v-if="showSecond">
    <Second
      text="Text from the App.vue as a prop"
      secondText="Another text from the parent component"
      :someArray="['element', 56]"
      :subTitle="secondTitle"
      theme="dark"
      @close="toggleSecond"
    />
  </div>

  <Third movieTitle="The movie" :duration="duration">
    <button>This is from the slot</button>
  </Third>
</template>

<script>
import Second from "./components/Second.vue";
import Third from "./components/Third.vue";

export default {
  name: "App",
  components: { Second, Third },
  data() {
    return {
      title: "Title from the App.vue",
      secondTitle: "Another title",
      showSecond: false,
      duration: 123,
    };
  },
  methods: {
    toggleSecond() {
      this.showSecond = !this.showSecond;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
