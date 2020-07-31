<template>
  <div> {{joke.joke}}</div>

</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      joke: {}
    }
  },
  async created(){
    let config ={
      headers :{
        Accept : "application/json",
      }
    };
    //https://icanhazdadjoke.com/j/<joke_id> 
    let url = `https://icanhazdadjoke.com/j/${this.$route.params.id}`;
    try {
      let res = await axios.get(url,config);
      this.joke= res.data;
    } catch (err) {
      console.log(err);
    }
  },
} 
</script>

<style>

</style>