<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'






</script>

<template>
  <body>
    
      <Navbar></Navbar>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/Projects">Mes Projets</RouterLink>
        <RouterLink to="/Contact">Me Contacter</RouterLink>

      </nav>


    <RouterView />
    

    <Footer></Footer>  
  </body>
  
    

</template>

<style scoped>

body {
    background-image: url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-repeat: no-repeat;
    /*background-position: bottom 200px right;*/
    background-size: 100%;
    background-attachment: fixed;

}

nav {
    /*display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;*/
    background-color: #6B9080;
    text-align: center;
    width: 100%;
    padding: 0.5%;
    
}

a {
  text-decoration: none;
  margin: 40px;
  font-size: 20px;
  color: #1a3429;
  font-family: "Urbanist";
}

.router-link-active {
  text-decoration: underline;
  font-weight: bold;
}

/*
main h2 {
    text-decoration: underline;
    text-align: center;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    height: 50px;
    
    background: transparent;
    backdrop-filter:blur(30px);
    box-shadow: 10px 10px #1a3429;
    color: #A4C3B2;
    border-radius: 10%;
    padding-top: 10px;
    font-weight: bolder;
    
}
*/

</style>
