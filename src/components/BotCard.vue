<template>
  
  <div id="card" :class="is_active(data.last_state)" @click="open_modal()">
    <div class="name">{{data.id}} / {{data.name}}</div>
    <div class="last_state">{{data.last_state}}</div>
    <div class="status">{{data.status}}</div>
  </div>

</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    data: {
      type: Object
    } 
  },
  methods: {
    is_active(time) {
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
      var seconds = Math.abs(seconds_dif);
      if (seconds > 90) {
          return "inactive"
      } else {
          return "active"
      }
    },
    open_modal() {
      console.log("Coming soon!")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card {
  width: 30%;
  min-width: 150px;
  margin: 2em;
  padding: 2em;
  border-radius: 18px;
  box-shadow: 10px 10px 5px gray;
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
</style>
