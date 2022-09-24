<template>
    <div class="botview">
        <div class="botview-header">
        <h1>Botview {{$route.params.name}}</h1>
        <h2 :class="is_active(get_seconds(botData.last_state))">Vor {{counter}} SEK</h2>
    </div>
    <div class="botview-detail">
        <table style="border-collapse: collapse; width: 100%;" border="1">
        <tbody>
            <tr>
                <td class="header">Anzahl Neustarts:</td>
                <td id="restarts">{{botData.automated_restarts}}</td>
            </tr>
            <tr>
                <td class="header">Letzter Status:</td>
                <td id="last_state" :class="is_active(get_seconds(botData.last_state))">{{botData.last_state}}</td>
            </tr>
            <tr>
                <td class="header">Status:</td>
                <td id="state">{{botData.status}}</td>
            </tr>
            <tr>
                <td class="header">Log:</td>
                <td id="log">{{botData.log}}</td>
            </tr>
            <tr>
                <td class="header">Aktiv seit:</td>
                <td id="time_active">{{botData.started}}</td>
            </tr>
            <tr>
                <td class="header">Alle Fehler bisher:</td>
                <td id="errors">{{botData.errors}}</td>
            </tr>
            <tr>
                <td class="header">Mehr Infos</td>
                <td id="more">{{botData.description}}</td>
            </tr>
        </tbody>
      </table> 
    </div>  
    </div>
</template>


<script>
import firebase from "../db";
const db = firebase.collection("bots");
export default {
    name: 'Botview',
    props: {
        name: String,
    },
    data() {
        return {
            botData: {},
            counter: 0
        }
    },
    methods: {
        readBot() {
            try {
                db
            .doc(this.name)
            .onSnapshot((snapshot) => {
                this.botData = snapshot.data()
                this.counter = this.get_seconds(this.botData.last_state)
                return this.botData
            });
 
            } catch {
                return this.botData
            }
        },
        get_seconds(time) {
            try {
                var today = new Date();
                const dt_sections= time.split(',');
                const date_sections = dt_sections[0].split('.')
                var day = date_sections[0].trim()
                var month = date_sections[1].trim()
                var year = date_sections[2].trim()
                const time_sections = dt_sections[1].split(':');
                var hour = time_sections[0].trim()
                var minute = time_sections[1].trim()
                var second = time_sections[2].trim()

                // 01.01.2022, 00:00:00
                var ls_dt = new Date(year, parseInt(month)-1, day, hour, minute, second, 0);

                var dif = ls_dt.getTime() - today.getTime();
                var seconds_dif = dif / 1000;
                var seconds = Math.abs(Math.round(seconds_dif));
                return seconds
                } catch (ex) {
                    console.log(ex)
                    return 0
                }
        },

        is_active(seconds) {
        console.log("SEK, " + seconds)
        if (seconds > 90) {
            return "inactive"
        } else {
            return "active"
        }
        
        },
        countDownTimer () {
                setTimeout(() => {
                    this.counter += 1
                    this.countDownTimer()
                }, 1000)
            }
    },
    created () {
            this.countDownTimer()
    },
    beforeMount(){
        this.readBot()
    },
}
</script>

<style scoped>

    .botview {
        width: 60%;
        justify-content: center;
        margin: auto
    }

    .botview-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .botview-header h2 {
        margin-left: 2rem
    }

    .botview-detail {
        display: flex;
        flex-direction: row;
        text-align: left;
    }

    table {
        background-color: white;
    }

    .active {
        color: rgb(0, 239, 0);
    }

    .inactive {
        color: rgb(255, 0, 0);
    }





    @media only screen and (max-width: 600px) {
        .botview {
        width: 95%;
        justify-content: center;
        margin: auto
    }
    }


</style>