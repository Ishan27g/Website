<template>

  <div class="p-grid p-jc-between" id="bar">
    <div class="p-col-1 p-text-left" v-tooltip.bottom="'Home'">
      <router-link to="/">
        <i class="pi pi-home" style="fontSize: 1em;"></i>
      </router-link>
    </div>
  </div>
    
  <div>
    <router-view> </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left:10%;
  margin-right:10%;
  margin-top:60px;
  padding:5%;
  background-Color:rgba(248, 248, 248, 0.842);
}
#bar {
  font-size: 40px;
}
a {
    text-decoration: none;
}
#nav a {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 30px;
}

#nav a.router-link-exact-active {
  padding: 30px;
  color: #42b983;
}

#contact {
  position: relative;
  margin-top: 35px;
  font-size: 20px;
  color: #071277;
}

</style>
