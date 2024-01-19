<script setup>
    import { ref, reactive } from 'vue'

    const open = ref(false)

    /*data*/
    const projects = reactive([
        {id: 1,title: "Créer un CV", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto omnis, nisi, alias consequuntur dolor unde voluptates quia eius illo similique non qui eveniet laborum, nam fugiat! Ad, rat", date: "10/2023",technologies: "HTML5, CSS3, Github",link1: "https://github.com/Cocotte123/CV.git",link2: "https://cocotte123.github.io/CV/"},
        {id: 2,title: "Réaliser un cahier des charges pour un site de vente de chaussettes dépareillées",description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto omnis, nisi, alias consequuntur dolor unde voluptates quia eius illo similique non qui eveniet laborum, nam fugiat! Ad, rat", date: "11/2023",technologies: "",link1: "",link2: "https://flipbookpdf.net/web/site/aa648ea1ee770501dcf22258758d772c0b46b766202401.pdf.html"},
        {id: 3,title: "Dynamiser un espace commentaire",description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto omnis, nisi, alias consequuntur dolor unde voluptates quia eius illo similique non qui eveniet laborum, nam fugiat! Ad, rat", date: "12/2023",technologies: "HTML5, CSS3, JS, Github",link1: "https://github.com/Cocotte123/Dynamiser_un_espace_commentaire2.git",link2: "https://cocotte123.github.io/Dynamiser_un_espace_commentaire2/"},
    ]);

   
    

</script>

<template>

        <h2>Mes projets:</h2>
        <div class="container2">
            <button id="btnModal" v-for="(project) in projects" @click="open = true; selected=project" :data-target="'#myModal-'+title">{{ project.title }}<br><img src="../assets/aarn-giri-3tYZjGSBwbk-unsplash.jpg" alt="un tournesol"></button>
            
            
                        <div v-if="open" class="modal" :id="'myModal-'+selected.title">

                            <div class="modalContent">
                                <h3>{{ selected.title }}</h3>
                                <p>{{ selected.description }}</p>
                                <section id="modalContentTable">
                                    
                                    <table>
                                        
                                        <tr>
                                            <th >Date de création:</th>
                                            <td >{{ selected.date }}</td>
                                        </tr>
                                        <tr>
                                            <th >Technologies utilisées</th>
                                            <td >{{selected.technologies}}</td>
                                        </tr>
                                        <tr>
                                            <th>Lien Github</th>
                                            <td><a :href="selected.link1" target="_blank">Consulter</a></td>                                        
                                        </tr>
                                        <tr>
                                            <th>Aperçu</th>
                                            <td><a :href="selected.link2" target="_blank">Voir</a></td>
                                        </tr>
                                    </table>

                                </section>
                                <button class="btnModalClose" @click="open = false">Fermer</button>
                            </div>
                            
                            
                        </div>
                

        </div>




    
    
    


</template>

<style scoped>
    .container2 {
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

    }

    #btnModal {
        
        height: 200px;
        width: 200px;
        border-radius: 10%;
        font-family: "Acme";
        background: transparent;
        backdrop-filter:blur(30px);
        color: #A4C3B2;
        font-size: 20px;
        margin: 40px;
    }

    #btnModal:hover {
        box-shadow: 12px 12px 2px 1px #A4C3B2 ;

    }

    #btnModal img {
        height: 60px;
        width: 30px;
        border-radius: 10%;
    }

    
    

    .modal {
        position: fixed;
        z-index: 999;
        top: 20%;
        left: 20%;
        width: 60%;
        background-color: beige;
        height: 70%;
        color:#1a3429;
        border-radius: 10%;
        box-shadow: 10px 10px #1a3429;
        
    }

    .modalContent {
        display: flex;
        flex-direction:column; 
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .modalContent h3 {
        font-weight: bolder;
        margin: 5px;
        font-size: 30px;
    }

    .modalContent p {
        width: 50%;
        margin: 5px;
        font-size: 15px;
    }

    table {
        position:absolute;
        left: 23%;
        width: 500px;
        border-style: solid;
        border-width: 2px;
        border-color: #1a3429;
    }

    th {
        background-color:#1a3429 ;
        color:  #A4C3B2;
        height: 50px;
        width: 50%;
    }

    td {
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    .btnModalClose {
        width: 50%;
        height: 30px;
        background:#6B9080;
        border-radius: 10%;
        box-shadow: 5px 5px #1a3429;
        color:#1a3429;
        font-weight: 500;
        cursor: pointer;
        font-family: "Acme";
        font-size: large;
        position: absolute;
        bottom: 10px;
        
    }

    


</style>