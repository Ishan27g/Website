<template id="app">
  <div class="p-grid p-jc-center">
    <div
      class="p-d-flex p-col-12 p-md-11 p-lg-9"
      style="background-color: #1f1f1f"
    >
      <Bg />
      <div class="p-grid p-jc-between" id="top">
        <div class="p-col-2">
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
            <img
              src="https://img.icons8.com/plasticine/60/000000/home-page.png"
            />
          </router-link>
        </div>
        <div class="p-col-2">
          <Avatar
            image="https://img.icons8.com/fluent/96/000000/send-mass-email.png"
            size="large"
            shape="circle"
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
            <a
              href="mailto:ishan.goyal@student.unimelb.edu.au"
              class="p-text-bold"
              >Send Email</a
            >
          </Sidebar>
        </div>
        <body>
          <div>
            <router-view v-slot="{ Component }">
              <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </body>
      </div>
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
  },
};
</script>

<style>

#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  margin-top: 3%;
  color: #ffffff;
}
#top {
  margin-top: 20px;
}
.animate__animated.animate__fadeIn {
  --animate-duration: 1s;
}
.animate__animated.animate__fadeOut {
  --animate-duration: 1s;
}
a {
  text-decoration: none;
  color: #dd700a;
}
</style>
