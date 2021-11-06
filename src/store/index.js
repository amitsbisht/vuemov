import { createStore } from "vuex";

export default createStore({
  state: {
    genres: [],
  },
  getters: {
    getGenreName: (state) => (id) => {
      return state.genres.find((genre) => genre.id === id);
    },
  },
  mutations: {
    setGenres(state, genres) {
      state.genres = genres;
    },
  },
  actions: {
    async getGenres({ commit }) {
      const response = await fetch(
        `${process.env.VUE_APP_MV_URL}genre/movie/list?api_key=${process.env.VUE_APP_MV_KEY}&language=en-US`
      );
      const { genres } = await response.json();
      commit("setGenres", genres);
    },
  },
});
