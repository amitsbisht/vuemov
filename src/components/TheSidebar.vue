<template>
  <aside class="main-sidebar">
    <h3 class="sidebar-title">Movie by Genre</h3>
    <div class="sidebar-fixed">
      <ul>
        <li v-for="genre in genres" :key="genre.id">
          <router-link
            :to="`/genre/${genre.id}`"
            :class="{ active: this.$route.path === `/genre/${genre.id}` }"
            >{{ genre.name }}
          </router-link>
        </li>
      </ul>
      <div>
        <p class="copyright-text">
          <a href="https://github.com/amitsbisht/" target="_blank"
            >Copyright &copy; Amit Singh</a
          >
        </p>
        <small
          >This product uses the TMDB API but is not endorsed or certified by
          TMDB.</small
        >
        <a href="https://www.themoviedb.org/" target="_blank">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            width="100"
            height="20"
          />
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "TheSidebar",
  created() {
    this.getGenres();
  },
  computed: {
    ...mapState({ genres: (state) => state.genres }),
  },
  methods: {
    ...mapActions(["getGenres"]),
  },
};
</script>

<style lang="scss" scoped>
.main-sidebar {
  display: none;
  .sidebar-fixed {
    .copyright-text {
      margin-bottom: 5px;
      a {
        color: #000;
        text-decoration: none;
      }
    }
    small {
      display: inline-block;
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    display: block;
    border-right: 4px solid #f1f1f1;
    .sidebar-title {
      font-size: 50px;
      background: linear-gradient(129deg, #2196f3, #ffeb3b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 0 50px 0;
    }
    .sidebar-fixed {
      position: sticky;
      top: 0;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          padding-bottom: 26px;
          a {
            font-size: 20px;
            color: #2196f3;
            border-bottom: 5px solid #ffeb3b;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
            &.active,
            &:hover {
              color: #2e364f;
              border-color: currentColor;
              transform: translateX(10px);
            }
          }
        }
      }
    }
  }
}
</style>
