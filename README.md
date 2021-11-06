# vuemov

Vue Movie App

A simple and easy to use Vue movie app.

The app is built with Vue 3 along with Vuex and Vue Router. The app has SCSS support and Vue transitions added as well. I'm using the [TMDB API](https://www.themoviedb.org/) for the data it's free and very easy to use. There are few routes and most of the app is broken down in components and sub components to provide structure and clear definitions of a single component.

Eslint with Prettier is enabled by default to provide liniting support during development. Jest with Vue Test Utils and Cypress for E2E testing is also added with the project, however there are no testing files added with the project.

There will be env.example file to mock the .env file fields, please copy env.example and rename to .env and add your api key.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
