<template>
  <div class="nav-search" :class="classes">
    <form class="search-form" autocomplete="off" @submit.prevent="searchMovies">
      <input
        type="search"
        placeholder="Search for you faviourite movies..."
        name="search"
        autocomplete="off"
        v-model="query"
        required
      />
      <button type="submit">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="#2e364f"
            d="M19.427 20.427c-1.39 0.99-3.090 1.573-4.927 1.573-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5c4.694 0 8.5 3.806 8.5 8.5 0 1.837-0.583 3.537-1.573 4.927l5.585 5.585c0.55 0.55 0.546 1.431-0 1.976l-0.023 0.023c-0.544 0.544-1.431 0.546-1.976 0l-5.585-5.585zM14.5 20c3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5v0z"
          ></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    classes: {
      type: String,
    },
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchMovies() {
      if (this.query) {
        this.$router.push({ path: "/movies", query: { s: this.query } });
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-search {
  .search-form {
    height: 45px;
    display: flex;
    border: 2px solid #2e364f;
    border-radius: 50px;
    overflow: hidden;
    input[type="search"] {
      height: 100%;
      border: none;
      background: #ffeb3b;
      width: 100%;
      padding: 12px;
      font-size: 18px;
      font-style: italic;
      color: #2e364f;
      &::placeholder {
        color: #2e364f;
      }
      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: none;
      }
    }
    button[type="submit"] {
      flex-basis: 80px;
      border: none;
      padding: 0;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      svg path {
        fill: #43a6f5;
      }
      &:hover {
        background: #ffeb3b;
        svg path {
          fill: #000;
        }
      }
    }
  }
}
</style>
