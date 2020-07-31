<template>
  <div> 
      <h1>this is the about page</h1>
        <p> the best app too keep the track of the things to do in life  </p>
  </div>
</template>

<script>
export default {
    head() {
        return{
            title: "About Page",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "the best place to keep track of your things",
                }
            ],
        }
    }
}
</script>

<style>

</style>