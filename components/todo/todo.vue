<template>
  <li :class="{ completed: isActive }">
    <div class="form-check">
      <label class="form-check-label" @click="completeTask">
        <input class="checkbox" type="checkbox" /> {{ task.task }}
        <i class="input-helper"></i>
      </label>
    </div>
    <i class="remove mdi mdi-close-circle-outline" @click="deleteTask"></i>
  </li>
</template>

<script>
export default {
  name: "todo",
  props: ["task"],
  data() {
    return {
      isActive: false,
    };
  },
  created: function() {
    this.isActive = this.task.status;
  },
  methods: {
    completeTask(event) {
      this.isActive = !this.isActive;
      this.$emit("changeStatus", this.task.id);
    },
    deleteTask(event) {
      this.$emit("deleteTask", this.task.id);
    },
  },
};
</script>

<style></style>
