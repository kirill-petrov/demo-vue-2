<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ active: currentFilter === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: currentFilter === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('inProcess')"
      :class="{ active: currentFilter === 'inProcess' }"
    >
      In process
    </button>
  </nav>
</template>

<script>
export default {
  props: ['currentFilter', 'filteredProjects'],
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/global.scss';

.filter-nav {
  padding: 0;
  button {
    width: auto;
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
  button.active {
    color: $color-vue;
  }
}
</style>
