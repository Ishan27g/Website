<template id="app">
  <div class="p-d-flex">
    <Bg />
    <div class="p-grid p-jc-between">
      <div class="p-col-1">
        <a href="https://github.com/Ishan27g" target="_blank">
          <Avatar
            image="https://img.icons8.com/color/000000/github--v1.png"
            size="large"
            shape="circle"
            v-tooltip.bottom="'Open Github'"
          />
        </a>
      </div>
      <div class="p-col-2" v-tooltip.bottom="'Home'">
        <router-link to="/">
          <img src="https://img.icons8.com/plasticine/60/000000/home-page.png"/>
        </router-link>
      </div>
      <div class="p-col-2">
        <Avatar
          image="https://img.icons8.com/fluent/96/000000/send-mass-email.png"
          size="large"
          shape="circle"
          style="margin-right: 60px"
          alt=""
          v-tooltip.bottom="'Send Email'"
          @click="showEmail"
        />
        <Sidebar
          v-model:visible="email"
          :baseZIndex="1000"
          position="top"
          dismissable:true
        >
          <h3>ishan.goyal@student.unimelb.edu.au</h3>
          <a href="mailto:ishan.goyal@student.unimelb.edu.au">Send Email</a>
        </Sidebar>
      </div>
      <body>
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <router-view> </router-view>
        </transition>
      </body>
    </div>
  </div>
</template>

<script>
import Bg from "./components/Bg";
export default {
  name: "App",
  data() {
    return {
      email: false,
    };
  },
  components: {
    Bg,
  },
  methods: {
    showEmail() {
      this.email = true;
    },
    removeEmail() {
      this.email = false;
    },
  },
};
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
  background-color: rgba(248, 248, 248, 0.945);
}
.animate__animated.animate__fadeIn {
  --animate-duration: 2s;
}
.animate__animated.animate__fadeOut {
  --animate-duration: 2s;
}
</style>
