<script setup>


</script>

<template>
    <div class="container1">
       <div class="container2">
            <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/linkedin.png" alt="LinkedIn"></a>
            <a href="https://twitter.com/tweeter" target="_blank"><img src="../assets/twitter.png" alt="Twitter"></a>
            <a href="https://www.instagram.com/" target="_blank"><img src="../assets/instagram.png" alt="Instagram"></a>
            <a href="https://github.com/" target="_blank"><img src="../assets/github.png" alt="Github"></a>
            <!-- je ne souhaite pas renvoyer directement vers mes réseaux sociaux personnels dans cet exercice-->
        </div>
        <div class="container3">
            <small>Dernière mise à jour le 13/01/2024</small><br> 
        </div>
    </div>
</template>

<style scoped>
.container1 {
   display: flex;
   flex-direction:column;
   background-color: #6B9080;
   text-align: center;
   color: #A4C3B2;
   font-family: "Acme";
   /*margin: 2%;*/
}

.container2 {
    display: block;
    margin: auto;
    padding-top: 1%;
    
}
.container2 img {
    height: 20px;
    width: 20px;
 
}


</style>