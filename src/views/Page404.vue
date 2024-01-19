<template>

<body>
   
            <section id="pageNotFound">
                <h1>404</h1>
                <div id="pageNotFoundImageContainer">
                    <img id="pageNotFoundImage" src="../assets/bogomil-mihaylov-OHxTNeAtNRs-unsplash.jpg" alt="Panneau sens interdit">
                </div>
                <h3>Page non trouvée</h3>
                <p>Désolé, la page n'est pas disponible.</p>
                <RouterLink to="/">Accueil</RouterLink>
                
            </section>
            
   
</body>

</template>

<style scoped>
#pageNotFound {
    color: #b8860b;
    font-weight: bold;
    border: solid #ff4500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    
 }

 #pageNotFoundImage {
    width: 80px;
    
    
 }

 #pageNotFoundImageContainer {
    display: flex;
    justify-content: center;
 }


 #pageNotFound h1 {
    font-family: "Acme";
    font-size: 200px;
    margin-bottom: 10px;
    margin-top: 10px;
 }

 #pageNotFound h2 {
    font-family: "Acme";
    font-size: 50px;
    margin-bottom: 10px;

 }

 #pageNotFound p {
    font-family: "Acme";
    font-size: 30px;
    margin-bottom: 10px;
 }

 #pageNotFound a {
    font-family: "Acme";
    color: #ff4500;
    text-decoration: none;
    font-size: 30px;
 
    
 }


</style>