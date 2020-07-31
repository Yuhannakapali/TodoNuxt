<template>
  <header class="header">
     <div class="logo"> 
         Todo App
    </div> 
    <div class="nav">
        <ul class="nav-bar">
            <li class="nav-links"> 
                <nuxt-link to="/"> Home </nuxt-link>
            </li>
            <li class="nav-links"> 
                <nuxt-link to="/jokes">Jokes </nuxt-link>
            </li>
            <li class="nav-links"> 
                <nuxt-link to="/todo"> Todo </nuxt-link>
            </li>
        </ul>
    </div>
  </header> 
</template>

<script>
export default {
    name: "appHeader",
}
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header .logo{
        font-size: 32px;
        color: #526488;
    }
    .header ul{
        display: flex;
    }
    .header a{
        display: inline;
        color: #526488 ;
        padding: 0.3rem 1rem;
        margin-right: 0.5rem;
    }
</style>