const app = Vue.createApp({
  data() {
    return {
      title: 'The title vue app',
      subTitle: 'The subtitle vue app',
      showTitle: true,
      showSubTitle: true
    }
  },
  methods: {
    toggleTitle() {
      this.showTitle = !this.showTitle
    },
    toggleSubTitle() {
      this.showSubTitle = !this.showSubTitle
    }
  }
})

app.mount('#app')