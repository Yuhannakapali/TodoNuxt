<template>
  <div class="searchBox">
    <input v-model="searchText" type="text" placeholder="search" />
    <button @click="search">search</button>
    <p>messasge is {{ searchText }}</p>
  </div>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    search(event) {
      this.$emit("clicked", this.searchText);
    }
  }
};
</script>

<style></style>
