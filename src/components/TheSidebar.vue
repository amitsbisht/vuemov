<template>
  <aside class="main-sidebar">
    <h3 class="sidebar-title">Movie by Genre</h3>
    <ul>
      <li v-for="genre in genres" :key="genre.id">
        <router-link
          :to="`/genre/${genre.id}`"
          :class="{ active: this.$route.path === `/genre/${genre.id}` }"
          >{{ genre.name }}
        </router-link>
      </li>
    </ul>
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
    ul {
      position: sticky;
      top: 0;
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
</style>
