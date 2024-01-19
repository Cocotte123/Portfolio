<script setup>
    import emailjs from 'emailjs-com'
    import {ref} from 'vue'

    function sendEmail() {
    
                const name = document.getElementById('name').value;
                const mail = document.getElementById('mail').value;
                const object = document.getElementById('object').value;
                const message = document.getElementById('message').value;

                
                emailjs.sendForm('service_5l85pz2', 'template_tve01ay','#myForm','N-O--715f54P98ts5')
                
                .then((result) => {
                    //console.log('SUCCESS!', result.text);
                    alert('SUCCESS!');
                }, (error) => {
                    alert('FAILED!');
                });

            
        
    }
    

</script>

<template>
    <h2>Me contacter:</h2>
    <div class="container1">
        <form class="formBox" id="myForm">
           
            <div class="inputBox">
                <input type="text" name="name" id="name" v-model="name" maxlength="200" required placeholder="Vos nom et prénom">
            </div>
            <div class="inputBox">
                <input type="email" name="mail" id="mail" v-model="mail" maxlength="200" required placeholder="Votre mail">
            </div>
            <div class="inputBox">
                <input type="text" name="object" id="object" v-model="object" maxlength="200" required placeholder="Objet">
            </div>
            <div class="textareaBox">
                <textarea name="message" id="message" v-model="message" maxlength="500" cols="50" rows="10" required placeholder="Votre message"></textarea>
            </div>
        </form>

        <button type="submit" @click="sendEmail()">Envoyer</button>



    </div>
</template>

<style scoped>

.container1 {
    width: 75%;
    
    
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    margin-bottom: 2%;
    
    
}
.formBox {
    width: 100%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-left: auto;
    margin-right: auto;

    
}

.inputBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    
    
    
    
}

input {
    width: 40%;
    height: 35px;
    font-family: "Acme";
    background: transparent;
    backdrop-filter:blur(30px);
    color:#A4C3B2;
    font-size: 20px;
    border-radius: 10%;
    border-style: solid;
    border-color: blanchedalmond;
}

textarea {
    width: 40%;
    padding: 15px;
    font-family: "Acme";
    background: transparent;
    backdrop-filter:blur(30px);
    color: #A4C3B2;
    font-size: 20px;
    border-radius: 10%;
    margin-top: 3%;
    border-style: solid;
    border-color: blanchedalmond;
}

button {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
    margin-top: 3%;
    width: 20%;
    font-family: "Acme";
    background: transparent;
    backdrop-filter:blur(30px);
    color: #A4C3B2;
    font-size: 20px;
    border-radius: 10%;
}



</style>