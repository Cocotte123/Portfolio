<script setup>
    function scrollToTop() { 
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }   

</script>

<template>
    <div class="container1">
        <div class="container2">
            <img id="Photo"  src="../assets/vlad-d-qPVxlZKEbsY-unsplash.jpg" alt="Une cascade entourée d'arbres aux couleurs de l'automne">
            <h1>Emmanuelle Rousseau</h1>
            <p> Développeuse web junior</p>
        </div>
        <div>
            <button class="btnScrollToTop" @click="scrollToTop">Haut de page</button>
        </div>

    </div>
</template>

<style scoped>
.container1 {
    display: flex;
    flex-direction: column;
    background-color: #6B9080;
    text-align: center;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1;

}

.container2 {
    display: flex;
    flex-direction: column;
    text-align: center;
     

}

#Photo {
    display: block;
    margin: auto;
    height: 150px;
    width: 150px;
    border-radius: 10%;
    box-shadow: 10px 10px #1a3429;

    
}

.container2 h1 {
    color: #1a3429;
    font-family: "Acme";
    font-weight: bolder;
    font-size: 2.5em;
    margin-top: 1%;
 
}

.container2 p {
    color: #1a3429;
    font-family: "Urbanist";
    font-size: 2em;
    margin-bottom: 0.5%;
    margin-top:0%;
}

.btnScrollToTop {
    background-color: #1a3429;
    color: #6B9080;
    font-size: 15px;
    font-weight: bold;
    height: 20px;
    width: 150px;
    border-radius: 15px;

}

/*
.container3 {
    display: block;
    margin: auto;
}


.container3 a {
    font-size: 1em;
    color: #1a3429;
    text-decoration: none;
    margin: 10px;
    font-weight: 500;
    font-size:20px;
    margin: 15px 100px;
    position: relative;
    font-family: "Urbanist";
}

.container3 a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height:3px;
    background: #1a3429;
    border-radius:5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
}

.container3 a:hover::after{
    transform: scaleX(1);
}
*/
</style>