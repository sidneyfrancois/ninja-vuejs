const app = Vue.createApp({
  data() {
    return {
      showTitle: true,
      title: 'The test title',
      x: 0,
      y: 0,
      showMovies: true,
      movies: [
        { title: 'name of the first', duration: 234, isFavorite: true},
        { title: 'name of the second', duration: 120, isFavorite: false},
        { title: 'name of the third', duration: 60, isFavorite: true},
      ],
      url: 'https://www.google.com/'
    }
  },
  methods: {
    toggleTitle() {
      this.showTitle = !this.showTitle
    },
    handleEvent(e) {
      console.log(e)
    },
    handleDoubleClick(e, number) {
      console.log(e, e.type, number)
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleMovies() {
      this.showMovies = !this.showMovies
    },
    toggleFavorite(movie) {
      movie.isFavorite = !movie.isFavorite
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) => movie.isFavorite)
    }
  }
})

app.mount('#app')