<template>
  <main class="app-wrap">
    <the-header></the-header>
    <div class="container app-container">
      <the-sidebar v-if="$route.name != 'Not Found'"></the-sidebar>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <back-top />
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import BackTop from "@/components/BackTop.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheSidebar,
    BackTop,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;300;400;700;900&display=swap");
html {
  scroll-behavior: smooth;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: "Public Sans", sans-serif;
  margin: 0;
}
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 15px;
}
.app-container {
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    gap: 15px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
