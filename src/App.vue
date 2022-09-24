<template>
  <div id="nav">
    <router-link to="/">Home</router-link> ·
    <router-link to="/">Bot hinzufügen</router-link>
  </div>
  <router-view />
</template>

<script>
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(216, 225, 216);
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#nav {
  padding: 30px;
  background: rgb(30, 49, 33)
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  
}

#nav a.router-link-exact-active {
  color: rgb(216, 225, 216);
}
</style>
