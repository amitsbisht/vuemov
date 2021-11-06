<template>
  <div class="movie-single">
    <router-link :to="`/movie/${movie.id}`" class="movie-single-link">
      <img :src="poster" />
      <div class="movie-single-data">
        <h3 class="movie-single-title">{{ movie.title }}</h3>
        <div class="movie-single-meta">
          <span class="movie-single-year">
            {{ movie.release_date ? movie.release_date.split("-")[0] : "-" }}
          </span>
          <span class="movie-single-rating">{{ rating }}</span>
          <span class="movie-single-genre">{{ genre }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultImage: require("@/assets/vuemov-default.jpg"),
    };
  },
  computed: {
    poster() {
      return this.movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        : this.defaultImage;
    },
    genre() {
      if (!this.movie.genre_ids.length) return "-";
      return this.movie.genre_ids
        .map((genre) => {
          return this.$store.getters.getGenreName(genre).name;
        })
        .join("/ ");
    },
    rating() {
      return this.movie.vote_average ? this.movie.vote_average.toFixed(1) : "-";
    },
  },
};
</script>

<style scoped lang="scss">
.movie-single {
  &-link {
    display: block;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    line-height: 0;
    border-radius: 10px;
    img {
      width: 100%;
      height: 380px;
      object-fit: cover;
    }
    .movie-single-data {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      padding: 20px;
      background: #ffeb3b;
      transition: all 0.3s ease-in-out;
      .movie-single-title {
        margin: 0;
        color: #000000;
        font-size: 16px;
        line-height: 1.25;
      }
      .movie-single-meta {
        display: flex;
        flex-wrap: wrap;
        padding: 5px 0 0;
        color: #2e364f;
        font-size: 13px;
        span {
          flex-basis: 50%;
          padding: 15px 0 0 25px;
          position: relative;
          line-height: 1;
          display: inline-block;
          &::before {
            content: "";
            background-size: contain;
            width: 20px;
            height: 20px;
            position: absolute;
            bottom: 0;
          }
          &.movie-single-year {
            &::before {
              background-image: url("~@/assets/calendar.svg");
              left: 0;
            }
          }
          &.movie-single-rating {
            text-align: right;
            &::before {
              background-image: url("~@/assets/star.svg");
              right: 24px;
            }
          }
          &.movie-single-genre {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            flex-basis: 100%;
            &::before {
              background-image: url("~@/assets/mask.svg");
              left: 0;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .movie-single {
    &-link {
      img {
        height: 480px;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .movie-single {
    &-link {
      &:hover {
        .movie-single-data {
          transform: translateY(0);
        }
      }
      .movie-single-data {
        transform: translateY(100%);
      }
    }
  }
}
</style>
