<template>
  <section class="not-found-wrap">
    <h1>404</h1>
    <p>We can't find the page you're looking for...</p>
    <router-link to="/">Back to home</router-link>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.not-found-wrap {
  width: calc(100vw - 30px);
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 150px;
    margin: 20px 0;
    font-style: italic;
    color: #2196f3;
    width: 100%;
    background: linear-gradient(180deg, #2196f3, #ffeb3b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 26px;
    font-style: italic;
    color: #2e364f;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    line-height: 1;
    background: #2e364f;
    border: 3px solid transparent;
    border-radius: 50px;
    width: 180px;
    padding: 12px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: transparent;
      border-color: #2e364f;
      color: #2e364f;
    }
  }
  @media screen and (min-width: 1240px) {
    width: calc(1240px - 30px);
  }
}
</style>
