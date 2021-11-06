<template>
  <div class="back-top-icon" v-if="showIcon" @click="goBackToTop">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="#2e364f"
        d="M15.484 12.452c-0.436 0.446-1.043 0.481-1.576 0l-3.908-3.747-3.908 3.747c-0.533 0.481-1.141 0.446-1.574 0-0.436-0.445-0.408-1.197 0-1.615 0.406-0.418 4.695-4.502 4.695-4.502 0.217-0.223 0.502-0.335 0.787-0.335s0.57 0.112 0.789 0.335c0 0 4.287 4.084 4.695 4.502s0.436 1.17 0 1.615z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  created() {
    window.addEventListener("scroll", this.handleScrollEvent);
  },
  data() {
    return {
      showIcon: false,
    };
  },
  methods: {
    handleScrollEvent() {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
      ) {
        this.showIcon = true;
      } else {
        this.showIcon = false;
      }
    },
    goBackToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  unmounted: function () {
    window.removeEventListener("scroll", this.handleScrollEvent);
  },
};
</script>

<style lang="scss" scoped>
.back-top-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ffeb3b;
  border-radius: 50px;
  border: 2px solid #2e364f;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: #2196f3;
    svg {
      path {
        fill: #ffeb3b;
      }
    }
  }
}
</style>
