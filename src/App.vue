<template>
<div>
    <div id="app">
    <Particles id="tsparticles" :options="{
        fpsLimit: 60,
        backgroundMode: {
            enable: true
          },
        particles: {
            color: {
                value: '#0F0326',
            
            },
            links: {
                color: '#5411D0',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2
            },
            collisions: {
                enable: true
            },
            move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 6,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 600
                },
                value: 80
            },
            opacity: {
                value: 2
            },
            shape: {
                type: 'circle'
            },
            size: {
                random: true,
                value: 5
            }
        },
            detectRetina: true
        }"
          />
        </div>
      </div>
<div class="p-d-flex" id="website">
  <div class="p-grid p-jc-between" id="bar">
    <div class="p-col-1" v-tooltip.bottom="'Home'">
      <router-link to="/">
        <i class="pi pi-home" style="fontSize: 1em;"></i>
      </router-link>
    </div>
      <router-view > </router-view>
  </div>
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
  color: #000000;
  margin-left:5%;
  margin-right:5%;
  margin-bottom: 5%;
  padding: 2%;
  background-Color:rgba(248, 248, 248, 0.842);
}
#content {
  margin-left: 10px;
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
}

#nav a.router-link-exact-active {
  padding: 30px;
  color: #42b983;
}

</style>
