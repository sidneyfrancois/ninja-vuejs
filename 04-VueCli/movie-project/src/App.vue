<template>
  <h1>{{ title }}</h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">click to focus</button>

  <p>P from App.vue</p>

  <Modal />
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'The title Original test'
    }
  },
  methods: {
    handleClick() {
      // console.log(this.$refs.name)
      this.$refs.name.focus()
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

/* h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
} */
</style>
