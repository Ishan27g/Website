<template id="app">
    <div class="p-d-flex">
      <Bg />
      <div class="p-grid p-jc-between">
        <div class="p-col-1">
          <a href="https://github.com/Ishan27g" target="_blank">
            <Avatar image="https://img.icons8.com/color/000000/github--v1.png" size="large" shape="circle"  v-tooltip.bottom="'Open Github'"/>
          </a>
        </div>
        <div class="p-col-1" v-tooltip.bottom="'Home'">
          <router-link to="/">
            <i class="pi pi-home" style="fontSize: 3em;"></i>
          </router-link>
        </div>
        <div class="p-col-1">
          <a href="mailto:ishan.goyal@student.unimelb.edu.au">
            <Avatar image="https://img.icons8.com/fluent/96/000000/send-mass-email.png" size="large" shape="circle" style="margin-right:60px;" alt=""
             v-tooltip.bottom="'Send Email'"/>
          </a>
        </div>
        <body>
          <router-view> </router-view>
        </body>
      </div>
    </div>
</template>

<script>
import Bg from './components/Bg'
export default {
  name: 'App',
  components : {
    Bg
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080808;
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  padding: 2%;
  background-Color:rgba(248, 248, 248, 0.945);

}

</style>
