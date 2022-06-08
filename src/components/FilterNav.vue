<template lang="">
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{
        active: this.current === 'all',
      }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: this.current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: this.current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>
<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(filterBy) {
      this.$emit("filterData", filterBy);
    },
  },
};
</script>
<style>
.filter-nav button {
  background: none;
  outline: none;
  border: none;
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
}
button.active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>
