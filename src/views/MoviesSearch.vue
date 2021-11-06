<template>
  <section>
    <h1>
      Movies matching <span>{{ s }}</span>
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
export default {
  components: {
    MovieItem,
    ThePagination,
  },
  data() {
    return {
      movies: [],
      totalPages: 1,
      currentPage: 1,
      query: this.s,
    };
  },
  created() {
    this.getMoviesByQuery(this.s);
  },
  props: {
    s: {
      type: String,
      required: true,
    },
  },
  watch: {
    $route(to, from) {
      if (to.query.s != from.query.s) {
        this.currentPage = 1;
      }
      if (to.query.s) {
        this.query = to.query.s;
        this.getMoviesByQuery();
      }
    },
  },
  methods: {
    async getMoviesByQuery() {
      if (!this.query) {
        this.$router.push("/");
        return;
      }
      const response = await fetch(
        `${process.env.VUE_APP_MV_URL}search/movie?api_key=${process.env.VUE_APP_MV_KEY}&query=${this.query}&language=en-US&page=${this.currentPage}`
      );
      const { results, total_pages } = await response.json();
      this.movies = results;
      this.totalPages = total_pages;
      window.scrollTo(0, 0);
    },
    showPrevResults() {
      this.currentPage--;
      this.getMoviesByQuery();
    },
    showNextResults() {
      this.currentPage++;
      this.getMoviesByQuery();
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
