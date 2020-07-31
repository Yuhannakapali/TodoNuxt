<template>
    <div>
        <joke v-for="joke in jokes" :key="joke.id" :id = "joke.id" :joke="joke.joke"/>
    </div>
</template>

<script>
import axios from "axios";
import joke from "@/components/joke"
export default {
    data(){
        return{
            jokes: []
        }
    },
  async  created() {
        let config ={
            headers : {
                Accept: "application/json"
            }
        }
        const url = "https://icanhazdadjoke.com/search"
        try {
            let res = await axios.get(url,config);
             this.jokes= res.data.results;
        } catch (err) {
            console.log("gg",err);
        }
    },
    head() {
        return {
            "title" :"jokes",
            "meta": [
                {
                    hid: "desctiption ",
                    title: "description",
                    content : "the best jokes on the web",  
                }
            ]
        }
    },
     
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>