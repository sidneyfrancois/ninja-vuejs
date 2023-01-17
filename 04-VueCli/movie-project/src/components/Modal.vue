<template>
  <h1>title from modal</h1>
  <p>{{ name }}</p>
</template>

<script>
  export default {
    name: 'Modal',
    data() {
      return {
        name: 'Test name'
      }
    }
  }
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>