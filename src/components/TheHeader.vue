<template>
  <header>
    <div class="container">
      <div class="branding">
        <router-link to="/">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#2e364f"
              d="M20 3v14c0 0.552-0.447 1-1 1h-18c-0.553 0-1-0.448-1-1v-14c0-0.553 0.447-1 1-1h1l3 3h2.5l-3-3h3l3 3h2.5l-3-3h3l3 3h2.5l-3-3h3.5c0.553 0 1 0.448 1 1z"
            ></path>
          </svg>
          <span class="app-title">VueMov</span>
        </router-link>
        <div class="nav-toggler d-m-none" @click="showMobileMenu = true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <search-form classes="d-s-none" />
      </div>
      <nav class="nav-mobile" :class="{ show: showMobileMenu }">
        <div class="nav-close" @click="showMobileMenu = false">&times;</div>
        <search-form classes="d-m-none" />
        <ul>
          <li v-for="genre in genres" :key="genre.id">
            <router-link
              :to="`/genre/${genre.id}`"
              :class="{ active: this.$route.path === `/genre/${genre.id}` }"
              >{{ genre.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import SearchForm from "./SearchForm.vue";
export default {
  name: "TheHeader",
  components: {
    SearchForm,
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
  computed: {
    ...mapState({ genres: (state) => state.genres }),
  },
  watch: {
    $route() {
      this.showMobileMenu = false;
    },
  },
};
</script>

<style lang="scss">
.d-m-none {
  @media screen and (min-width: 1024px) {
    display: none;
  }
}
.d-s-none {
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
}
header {
  background: linear-gradient(134deg, #ffeb3b, #2196f3);
  .container {
    .branding {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      a {
        display: flex;
        align-items: flex-end;
        line-height: 1;
        text-decoration: none;
        svg {
          width: 60px;
          height: 60px;
          path {
            fill: #fff;
          }
        }
        .app-title {
          color: #fefefe;
          font-size: 30px;
          font-weight: 100;
          letter-spacing: 1.45px;
          display: inline-block;
          padding-left: 6px;
          padding-bottom: 6px;
        }
      }
      .nav-toggler {
        margin-bottom: 6px;
        cursor: pointer;
        padding: 15px 10px;
        border-radius: 50%;
        background: transparent;
        transition: all 0.3s ease-in-out;
        span {
          width: 30px;
          height: 3px;
          background: white;
          display: block;
          margin-bottom: 6px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        &:hover {
          background: #0000001a;
        }
      }
      .nav-search {
        width: 420px;
      }
    }
    .nav-mobile {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #fff;
      z-index: 9;
      padding: 20px;
      overflow-y: auto;
      visibility: hidden;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      &.show {
        visibility: visible;
        opacity: 1;
      }
      .nav-close {
        font-size: 20px;
        color: white;
        background: linear-gradient(45deg, #9b9b9b, #444444);
        box-shadow: 0 0 7px 0px rgba(0, 0, 0, 0.5);
        display: block;
        border-radius: 50px;
        position: absolute;
        top: 15px;
        right: 20px;
        line-height: 1;
        padding: 0 5px;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          box-shadow: 0 0 7px 7px rgba(0, 0, 0, 0.15);
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          padding-bottom: 26px;
          a {
            font-size: 20px;
            color: #2196f3;
            border-bottom: 10px solid #ffeb3b;
            border-radius: 100% 0% 50% 50% / 70% 70% 30% 30%;
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
      .nav-search {
        margin: 30px 0;
      }
    }
  }
}
</style>
