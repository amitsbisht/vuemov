<template>
  <section>
    <h1>
      Movies by <span>{{ genreName }}</span> genre
    </h1>
    <div class="movies-all">
      <movie-item
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      ></movie-item>
    </div>
    <the-pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @back="showPrevResults"
      @next="showNextResults"
    />
  </section>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
import ThePagination from "@/components/ThePagination.vue";
import { mapState } from "vuex";
export default {
  name: "MovieGenre",
  components: {
    MovieItem,
    ThePagination,
  },
  created() {
    this.getMoviesByGenre();
  },
  data() {
    return {
      movies: [],
      totalPages: 1,
      currentPage: 1,
    };
  },
  computed: {
    ...mapState({ genres: (state) => state.genres }),
    genreName() {
      if (!this.genres.length) return "";
      return this.genres.filter((genre) => genre.id == this.$route.params.id)[0]
        .name;
    },
  },
  watch: {
    $route() {
      this.getMoviesByGenre();
    },
  },
  methods: {
    async getMoviesByGenre() {
      const response = await fetch(
        `${process.env.VUE_APP_MV_URL}discover/movie?api_key=${process.env.VUE_APP_MV_KEY}&language=en-US&with_genres=${this.$route.params.id}&page=${this.currentPage}`
      );
      const { results, total_pages } = await response.json();
      this.movies = results;
      this.totalPages = total_pages;
      window.scrollTo(0, 0);
    },
    showPrevResults() {
      this.currentPage--;
      this.getMoviesByGenre();
    },
    showNextResults() {
      this.currentPage++;
      this.getMoviesByGenre();
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  span {
    font-weight: 800;
    font-style: italic;
    text-decoration: underline;
  }
}
</style>
