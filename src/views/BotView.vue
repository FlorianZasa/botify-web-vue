<template>
    Botview
    {{$route.params.id}}
{{all_data}}
    <table style="border-collapse: collapse; width: 100%;" border="2">
        <tbody>
            <tr>
                <td>Anzahl Neustarts:</td>
                <td id="restarts">{{all_data}}</td>
            </tr>
            <tr>
                <td>Letzter Status:</td>
                <td id="last_state">{{all_data}}</td>
            </tr>
            <tr>
                <td>Status:</td>
                <td id="state">{{all_data}}</td>
            </tr>
            <tr>
                <td>Log:</td>
                <td id="log">{{all_data}}</td>
            </tr>
            <tr>
                <td>Aktiv seit:</td>
                <td id="time_active">{{all_data}}</td>
            </tr>
            <tr>
                <td>Alle Fehler bisher:</td>
                <td id="errors">{{all_data}}</td>
            </tr>
            <tr>
                <td>Mehr Infos</td>
                <td id="more">{{all_data}}</td>
            </tr>
        </tbody>
      </table>
</template>


<script>
export default {
    name: 'Botview',
    props: {
        id: String,
        all_data: Object
    },
    data() {
        return {
                

        }
    }
}
</script>