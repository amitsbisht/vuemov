<template>
  <section class="movie-detail-wrap">
    <movie-info />
    <movies-similar />
  </section>
</template>

<script>
import MovieInfo from "@/components/movies/MovieInfo.vue";
import MoviesSimilar from "@/components/movies/MoviesSimilar.vue";
export default {
  name: "MovieDetail",
  components: {
    MovieInfo,
    MoviesSimilar,
  },
};
</script>
