<template>
<div>
  <div class="p-grid p-jc-between">
    <div class="p-col-8">
      <div class="box">
        <router-link to="/">
          <div class="p-text-left" id="ishan">
            <span>
               <i class="pi pi-home" style="fontSize: 2rem"></i>
            </span>
            <span>
              Ishan Goyal
            </span>
            </div>
        </router-link>
      </div>
    </div>
    <div class="p-col-3">
      <div class="box" id="contact" >
            <router-link to="/about" class="p-ml-auto">
              Contact
            </router-link>
      </div>
    </div>
  </div>
  <router-view> </router-view>
</div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10%;
}
a {
    text-decoration: none;
}
#nav a {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
  
}

#nav a.router-link-exact-active {
  padding: 30px;
  color: #42b983;
}

#ishan {
  font-size: 50px;
  color: #494141;
}

#contact {
  position: relative;
  margin-top: 35px;
  font-size: 20px;
  color: #071277;

}
</style>
