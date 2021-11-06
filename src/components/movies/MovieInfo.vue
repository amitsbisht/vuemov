<template>
  <div v-if="movie.title">
    <div class="movie-detail-poster" v-if="movie.backdrop_path">
      <img
        :src="`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`"
        :alt="movie.title"
      />
    </div>
    <h1>{{ movie.title }}</h1>
    <p v-if="movie.tagline">{{ movie.tagline }}</p>
    <div class="movie-detail-meta">
      <p class="movie-genres">{{ genres || "-" }}</p>
      <p class="movie-release-date">{{ movie.release_date || "-" }}</p>
      <p class="movie-time">
        {{ movie.runtime ? `${movie.runtime} Mins` : "-" }}
      </p>
      <p class="movie-rating">{{ movie.vote_average || "-" }}</p>
    </div>
    <h3>Synopsis</h3>
    <p>{{ movie.overview }}</p>
    <div class="button-group">
      <a
        href="#"
        class="movie-link-btn movie-trailer-btn"
        @click.prevent="showMovieTrailer = true"
        v-if="getTrailerVideoKey"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            fill="#2e364f"
            d="M28 5.5v17c0 0.406-0.25 0.766-0.609 0.922-0.125 0.047-0.266 0.078-0.391 0.078-0.266 0-0.516-0.094-0.703-0.297l-6.297-6.297v2.594c0 2.484-2.016 4.5-4.5 4.5h-11c-2.484 0-4.5-2.016-4.5-4.5v-11c0-2.484 2.016-4.5 4.5-4.5h11c2.484 0 4.5 2.016 4.5 4.5v2.578l6.297-6.281c0.187-0.203 0.438-0.297 0.703-0.297 0.125 0 0.266 0.031 0.391 0.078 0.359 0.156 0.609 0.516 0.609 0.922z"
          ></path>
        </svg>
        <span>Trailer</span>
      </a>
      <a
        :href="movie.homepage"
        class="movie-link-btn movie-link-btn"
        v-if="movie.homepage"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="28"
          viewBox="0 0 26 28"
        >
          <path
            fill="#2e364f"
            d="M22.75 19c0-0.406-0.156-0.781-0.438-1.062l-3.25-3.25c-0.281-0.281-0.672-0.438-1.062-0.438-0.453 0-0.812 0.172-1.125 0.5 0.516 0.516 1.125 0.953 1.125 1.75 0 0.828-0.672 1.5-1.5 1.5-0.797 0-1.234-0.609-1.75-1.125-0.328 0.313-0.516 0.672-0.516 1.141 0 0.391 0.156 0.781 0.438 1.062l3.219 3.234c0.281 0.281 0.672 0.422 1.062 0.422s0.781-0.141 1.062-0.406l2.297-2.281c0.281-0.281 0.438-0.656 0.438-1.047zM11.766 7.984c0-0.391-0.156-0.781-0.438-1.062l-3.219-3.234c-0.281-0.281-0.672-0.438-1.062-0.438s-0.781 0.156-1.062 0.422l-2.297 2.281c-0.281 0.281-0.438 0.656-0.438 1.047 0 0.406 0.156 0.781 0.438 1.062l3.25 3.25c0.281 0.281 0.672 0.422 1.062 0.422 0.453 0 0.812-0.156 1.125-0.484-0.516-0.516-1.125-0.953-1.125-1.75 0-0.828 0.672-1.5 1.5-1.5 0.797 0 1.234 0.609 1.75 1.125 0.328-0.313 0.516-0.672 0.516-1.141zM25.75 19c0 1.188-0.484 2.344-1.328 3.172l-2.297 2.281c-0.844 0.844-1.984 1.297-3.172 1.297-1.203 0-2.344-0.469-3.187-1.328l-3.219-3.234c-0.844-0.844-1.297-1.984-1.297-3.172 0-1.234 0.5-2.406 1.375-3.266l-1.375-1.375c-0.859 0.875-2.016 1.375-3.25 1.375-1.188 0-2.344-0.469-3.187-1.313l-3.25-3.25c-0.859-0.859-1.313-1.984-1.313-3.187 0-1.188 0.484-2.344 1.328-3.172l2.297-2.281c0.844-0.844 1.984-1.297 3.172-1.297 1.203 0 2.344 0.469 3.187 1.328l3.219 3.234c0.844 0.844 1.297 1.984 1.297 3.172 0 1.234-0.5 2.406-1.375 3.266l1.375 1.375c0.859-0.875 2.016-1.375 3.25-1.375 1.188 0 2.344 0.469 3.187 1.313l3.25 3.25c0.859 0.859 1.313 1.984 1.313 3.187z"
          ></path>
        </svg>
        <span>Website</span>
      </a>
      <a
        :href="`https://www.imdb.com/title/${movie.imdb_id}/`"
        class="movie-link-btn movie-imdb-btn"
        v-if="movie.imdb_id"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="28"
          viewBox="0 0 24 28"
        >
          <path
            fill="#2e364f"
            d="M14.406 12.453v2.844c0 0.562 0.109 1.078-0.594 1.062v-4.828c0.688 0 0.594 0.359 0.594 0.922zM19.344 13.953v1.891c0 0.313 0.094 0.828-0.359 0.828-0.094 0-0.172-0.047-0.219-0.141-0.125-0.297-0.063-2.547-0.063-2.578 0-0.219-0.063-0.734 0.281-0.734 0.422 0 0.359 0.422 0.359 0.734zM2.812 17.641h1.906v-7.375h-1.906v7.375zM9.594 17.641h1.656v-7.375h-2.484l-0.438 3.453c-0.156-1.156-0.313-2.312-0.5-3.453h-2.469v7.375h1.672v-4.875l0.703 4.875h1.188l0.672-4.984v4.984zM16.234 12.875c0-0.469 0.016-0.969-0.078-1.406-0.25-1.297-1.813-1.203-2.828-1.203h-1.422v7.375c4.969 0 4.328 0.344 4.328-4.766zM21.187 15.953v-2.078c0-1-0.047-1.734-1.281-1.734-0.516 0-0.859 0.156-1.203 0.531v-2.406h-1.828v7.375h1.719l0.109-0.469c0.328 0.391 0.688 0.562 1.203 0.562 1.141 0 1.281-0.875 1.281-1.781zM24 4.5v19c0 1.375-1.125 2.5-2.5 2.5h-19c-1.375 0-2.5-1.125-2.5-2.5v-19c0-1.375 1.125-2.5 2.5-2.5h19c1.375 0 2.5 1.125 2.5 2.5z"
          ></path>
        </svg>
        <span>IMDB</span>
      </a>
    </div>
    <movie-trailer
      :showPopup="showMovieTrailer"
      :videoKey="getTrailerVideoKey"
      @closePopup="closeTrailerVideoPopup"
    />
  </div>
</template>

<script>
import MovieTrailer from "@/components/movies/MovieTrailer.vue";
export default {
  name: "MovieInfo",
  components: {
    MovieTrailer,
  },
  created() {
    this.getMovieInfo();
  },
  computed: {
    genres() {
      let formattedGenre = this.movie.genres.map(function (genre) {
        return genre.name;
      });
      return formattedGenre.join("/ ");
    },
    getTrailerVideoKey() {
      if (!this.videos.length) return null;
      return this.videos.filter((video) => video.type === "Trailer")[0].key;
    },
  },
  data() {
    return {
      movie: {},
      videos: [],
      showMovieTrailer: false,
    };
  },
  watch: {
    $route(to) {
      if (to.params.id) {
        this.getMovieInfo();
      }
    },
  },
  methods: {
    async getMovieInfo() {
      const response = await fetch(
        `${process.env.VUE_APP_MV_URL}movie/${this.$route.params.id}?api_key=${process.env.VUE_APP_MV_KEY}&language=en-US&append_to_response=videos`
      );
      const result = await response.json();
      if (result.success === false) {
        this.$router.push("/");
        return;
      }
      this.movie = result;
      this.videos = result.videos.results;
    },
    closeTrailerVideoPopup() {
      this.showMovieTrailer = false;
      var iframe = document.querySelector("iframe");
      if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-detail-poster {
  img {
    max-width: 100%;
    height: auto;
  }
}
.movie-detail-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  & > * {
    position: relative;
    padding: 12px 0 0 25px;
    margin: 0 10px 0 0;
    &::before {
      content: "";
      background-size: contain;
      width: 20px;
      height: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .movie-genres {
    &::before {
      background-image: url("~@/assets/mask.svg");
    }
  }
  .movie-release-date {
    &::before {
      background-image: url("~@/assets/calendar.svg");
    }
  }
  .movie-time {
    &::before {
      background-image: url("~@/assets/stopwatch.svg");
    }
  }
  .movie-rating {
    &::before {
      background-image: url("~@/assets/star.svg");
    }
  }
}
.button-group {
  margin-bottom: 16px;
  a.movie-link-btn {
    text-decoration: none;
    color: #ffffff;
    line-height: 1;
    background: #2e364f;
    border: 3px solid transparent;
    border-radius: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    width: 140px;
    padding: 6px;
    margin: 0 5px 5px 0;
    transition: all 0.3s ease-in-out;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 4px;
      path {
        fill: #fff;
        transition: all 0.3s ease-in-out;
      }
    }
    &:hover {
      background: transparent;
      border-color: #2e364f;
      color: #2e364f;
      svg {
        path {
          fill: #2e364f;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .movie-detail-meta {
    justify-content: space-between;
    & > * {
      margin: 0;
    }
  }
}
</style>
