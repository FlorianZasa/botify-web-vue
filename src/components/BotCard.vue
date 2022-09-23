<template>
  
  <div id="card" :class="is_active(data.last_state)" @click="open_modal(data.id)">
    <div class="name">{{data.id}} / {{data.name}}</div>
    <div class="last_state">{{data.last_state}}</div>
    <div class="status">{{data.status}}</div>
    <Countdown :startTime="get_seconds(data.last_state)" :active="is_active(data.last_state)" />


  </div>

</template>

<script>

import Countdown from './BotCountdown.vue'
export default {
  name: 'HelloWorld',
  components: {
    Countdown,
},
  props: {
    data: {
      type: Object
    } 
  },
  methods: {
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
      } catch {
        return 0
      }
    },

    is_active(time) {
      var time_str = time
      var seconds = this.get_seconds(time_str)
      if (seconds > 90) {
        return "inactive"
      } else {
        return "active"
      }
      
    },
    open_modal(id) {
      console.log("Coming soon!, " +id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card {
  width: 40%;
  min-width: 150px;
  margin: 1em;
  padding: 1em;
  border-radius: 18px;
  box-shadow: 10px 10px 5px gray;
  
}

.name, .last_state, .status {
  padding: 1rem;
}

.active {
  background: rgb(0, 239, 0);
}

.inactive {
  background: rgb(255, 0, 0);
}

.name {
  font-weight: bold;
  font-size: large;
}


.status {
  color: rgb(82, 82, 255)
}


/* If the screen size is 600px wide or less, hide the element */
@media only screen and (max-width: 600px) {
  #card {
  width: 100%;
  border-radius: 18px;
  box-shadow: 10px 10px 5px gray;
  
}
}

</style>
