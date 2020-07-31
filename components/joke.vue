<template>
  <div>
    <nuxt-link :to="'/jokes/'+id">
      <div class="joke">
        <p>{{joke}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name:'joke',
    props:['joke','id'],
}
</script>

<style>
.joke{
    padding: 1rem;
    border: 1px dotted #ccc;
    margin: 1rem 0;
}
.container {
   margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>