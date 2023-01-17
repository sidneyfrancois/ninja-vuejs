<template>
  <h2>{{ title }}</h2>
  <Second />
</template>

<script>
import Second from './components/Second.vue';

export default {
  name: 'App',
  components: { Second },
  data() {
    return {
      title: 'Title from the App.vue'
    }
  }
}
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
