<template>
    <div class="addbot-header">
        <h2>Füge einen Bot hinzu:</h2>
    </div>
    <div class="addbot-main">
        <input type="text" id="name" name="name" class="textfield" placeholder="Name"><br>
        <input type="text" id="id" name="id" class="textfield" placeholder="FZ***"><br>
        <input type="text" id="description" name="description" class="textfield" placeholder="Dies ist eine Beschreibung"><br>
        <button class="form-button" @click="showMessageFunc()">Speichern</button>

    </div>
    <div class="addbot-message-container" v-if="showMessage">
        <Transition>
            <message title="Ups..." message="Diese Aktion steht noch nicht zur Verfügung. Bitte wenden Sie sich an den Administrator" type="alert" @closed="hideMessageFunc()" />
        </Transition>
    </div>
    
</template>

<script>
    import Message from '../components/Message.vue'

    export default {
        name: 'AddBot',
        components: {Message},
        data() {
            return {
                showMessage: false,
            }
        },
        methods: {
            showMessageFunc() {
                this.showMessage = true
            },
            hideMessageFunc() {
                this.showMessage = false
            }
        },
    }

</script>

<style scoped>
    /* we will explain what these classes do next! */
    .v-enter-active,
    .v-leave-active {
    transition: opacity 1s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }


    
    input.textfield  {
        width: 30%;
        height: 2rem;
        border: none;
        border-radius: 18px;
        margin: 1%
    }

    .form-button {
        margin: 5%;
        width: 30%;
        height: 3rem;
        background-color: #829460;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        border-radius: 18px;
    }

    .addbot-message-container {
        width: 100%;
    }


    @media only screen and (max-width: 1000px) {
        input.textfield  {
            width: 85%;
            height: 3rem;
            border: none;
            border-radius: 18px;
            margin: 2%
        }

    .form-button {
        margin: 10%;
        width: 60%;
        height: 4rem;
        background-color: #829460;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        border-radius: 18px;
    }
}



</style>