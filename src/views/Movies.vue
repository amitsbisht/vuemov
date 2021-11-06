<template>
  <section>
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
  name: "Movies",
  components: {
    MovieItem,
    ThePagination,
  },
  data() {
    return {
      movies: [],
      totalPages: 1,
      currentPage: 1,
    };
  },
  created() {
    this.getLatestMovies();
  },
  methods: {
    async getLatestMovies() {
      const response = await fetch(
        `${process.env.VUE_APP_MV_URL}movie/popular?api_key=${process.env.VUE_APP_MV_KEY}&language=en-US&page=${this.currentPage}`
      );
      const { results, total_pages } = await response.json();
      this.movies = results;
      this.totalPages = total_pages;
      window.scrollTo(0, 0);
    },
    showPrevResults() {
      this.currentPage--;
      this.getLatestMovies();
    },
    showNextResults() {
      this.currentPage++;
      this.getLatestMovies();
    },
  },
};
</script>

<style lang="scss">
.movies-all {
  display: grid;
  gap: 15px;
  @media screen and (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
