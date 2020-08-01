<template>
  <div class="add-items d-flex">
    <input
      v-model="task"
      type="text"
      class="form-control todo-list-input"
      placeholder="What do you need to do today?"
      v-on:keyup.enter="addTask"
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
import Swal from "sweetalert2";
export default {
  name: "add",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask(event) {
      if (this.task.length > 0) {
        this.$emit("clicked", this.task);
        this.task = "";
      } else {
        Swal.fire("hello fool wanna type frist ?");
      }
    },
  },
};
</script>

<style></style>
