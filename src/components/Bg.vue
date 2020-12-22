<template>
   <Particles id="tsparticles" :options="{
      fpsLimit: 60,
      backgroundMode: {
          enable: true
        },
      particles: {
          color: {
              value: '#D57A66',
          },
          links: {
              color: '#593073',
              distance: 200,
              enable: true,
              opacity: 1,
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
              speed: 8,
              straight: false
          },
          number: {
              density: {
                  enable: true,
                  value_area: 600
              },
              value: 50
          },
          opacity: {
              value: 2
          },
          shape: {
              type: 'circle'
          },
          size: {
              random: true,
              value: 6
          }
      },
          detectRetina: true
      }"
    /> 
</template>

<script>

export default {
  name: 'Bg',
}
</script>

<style >
  
</style>
