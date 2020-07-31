<template>
  <div class="add-items d-flex">
    <input
      v-model="task"
      type="text"
      class="form-control todo-list-input"
      placeholder="What do you need to do today?"
    />
    <button
      class="add btn btn-primary font-weight-bold todo-list-add-btn"
      @click="addTask"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      task: ""
    };
  },
  methods: {
    addTask(event) {
      this.$emit("clicked", this.task);
    }
  }
};
</script>

<style></style>
