<template>
  <div
    class="movie-detail-videos"
    v-if="showPopup && videoKey"
    @click="$emit('closePopup')"
  >
    <div class="movie-detail-trailer-wrap">
      <span class="movie-trailer-popup-close" @click="$emit('closePopup')"
        >&times;</span
      >
      <div class="video-container">
        <iframe
          :src="`https://www.youtube.com/embed/${videoKey}?showinfo=0&modestbranding=1&rel=0&iv_load_policy=3`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieTrailer",
  props: {
    showPopup: {
      type: Boolean,
      default: false,
      required: true,
    },
    videoKey: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-detail-videos {
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  .movie-detail-trailer-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .movie-trailer-popup-close {
      position: absolute;
      top: 0;
      right: 0;
      background: white;
      z-index: 10;
      font-size: 50px;
      line-height: 1;
      width: 50px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
      }
    }
    .video-container {
      overflow: hidden;
      position: relative;
      max-width: 800px;
      width: 100%;
      &::after {
        padding-top: 56.25%;
        display: block;
        content: "";
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
