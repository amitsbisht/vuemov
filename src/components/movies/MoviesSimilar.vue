<template>
  <section class="similar-movie-wrap" v-if="similarMovies.length">
    <h3>Similar movie in this genre</h3>
    <div class="movies-all">
      <movie-item
        v-for="movie in similarMovies"
        :key="movie.id"
        :movie="movie"
      ></movie-item>
    </div>
  </section>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
export default {
  name: "MoviesSimilar",
  components: {
    MovieItem,
  },
  created() {
    this.getSimilarMovies();
  },
  data() {
    return {
      similarMovies: [],
    };
  },
  watch: {
    $route(to) {
      if (to.params.id) {
        this.getSimilarMovies();
      }
    },
  },
  methods: {
    async getSimilarMovies() {
      if (this.$route.params.id) {
        const response = await fetch(
          `${process.env.VUE_APP_MV_URL}movie/${this.$route.params.id}/similar?api_key=${process.env.VUE_APP_MV_KEY}&language=en-US&page=1`
        );
        const { results } = await response.json();
        this.similarMovies = results;
      }
    },
  },
};
</script>
