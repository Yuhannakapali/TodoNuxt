<template>
  <li>
    <div class="form-check">
      <label class="form-check-label">
        <input class="checkbox" type="checkbox"/> {{ name }}
        <i class="input-helper"></i
      ></label>
    </div>
    <i class="remove mdi mdi-close-circle-outline"></i>
  </li>
</template>

<script>
export default {
  name: "todo",
  props: ["name"]
};
</script>

<style></style>
