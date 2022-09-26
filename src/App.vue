<template>
  <div id="nav">
    <router-link to="/" class="router-link">Home</router-link> |
    <router-link to="/bot/add" class="router-link">Hinzufügen</router-link>
  </div>
  <router-view />
</template>

<script>
  
</script>

<style>
  body {
    margin: 0 !important;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    color: #2c2424;
    text-align: center;
    background-color: #EEEEEE;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

#nav {
  padding: 2%;
  background: #674747;
  color: #EEEEEE;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #EEEEEE;
}

.router-link.active {
  border-bottom: solid 1px #fff
}



@media only screen and (max-width: 1000px) {
  #nav {
    padding: 6%;

  }

  #nav a {
  font-size: 20px;
}

}
</style>
