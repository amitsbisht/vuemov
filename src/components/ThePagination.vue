<template>
  <div class="pagination-wrap" v-if="totalPages > 1">
    <button type="button" :disabled="currentPage === 1" @click="$emit('back')">
      Prev
    </button>
    <button
      type="button"
      :disabled="currentPage === totalPages"
      @click="$emit('next')"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: {
    currentPage: {
      required: true,
      default: 1,
    },
    totalPages: {
      required: true,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-wrap {
  text-align: center;
  margin: 30px 0;
  button {
    background: #2e364f;
    border: 4px solid transparent;
    color: #fff;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 40px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      background: transparent;
      border-color: #2e364f;
      color: #2e364f;
    }
    &:disabled {
      background: rgba(46, 54, 79, 0.2);
      pointer-events: none;
    }
  }
}
</style>
