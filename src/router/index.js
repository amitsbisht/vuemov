import { createRouter, createWebHistory } from "vue-router";
import Movies from "../views/Movies.vue";
import MoviesSearch from "../views/MoviesSearch.vue";
import MovieDetail from "../views/MovieDetail.vue";
import MovieGenre from "../views/MovieGenre.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/movies",
    props: (route) => ({ s: route.query.s }),
    name: "Movies Search",
    component: MoviesSearch,
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: MovieDetail,
  },
  {
    path: "/genre/:id",
    name: "Movie Genre",
    component: MovieGenre,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router;
