<template>
<div>
  <h2 class="p-text-left p-text-bold">Side Projects</h2>
  <div class="p-pb-5" id="tabs">
    <Button
      @click="active = 0"
      class="p-button-text p-button-rounded p-button-lg"
      label="Https RSA-Client "
    />
    <Button
      @click="active = 1"
      class="p-button-text p-button-rounded p-button-lg"
      label="Portfolio Website"
    />
    <Button
      @click="active = 2"
      class="p-button-text p-button-rounded p-button-lg"
      label="Micro Service Validator"
    />
    <Button
      class="p-button-text p-button-rounded p-button-lg"
      label="Vue+Golang+MongoDB"
    />
    <Button
      class="p-button-text p-button-rounded p-button-lg"
      label="Docker Microservices DB"
    />
    <Button
      class="p-button-text p-button-rounded p-button-lg"
      label="File upload server"
    />
  </div>
  <div id="Side">
    <Accordion v-model:activeIndex="active">
      <AccordionTab header="Https RSA-Client">
        <p>
          Automated https client that can send RSA encrypted requests as per
          json files. Public/Private keys along with encryption/decryption is
          done through a Node/ExpressJS microservice for easy migration to
          javascript. Developed as an out of scope requirement for a university
          project
        </p>
        <a
          href="https://github.com/Ishan27g/httpsTestClient"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
        <div class="p-grid p-jc-center">
          <div class="p-col-2">
            <Avatar
              image="https://img.icons8.com/color/48/000000/golang.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Golang'"
            />
          </div>
          <div class="p-col-2">
            <Avatar
              image="https://img.icons8.com/color/96/000000/nodejs.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'NodeJS'"
            />
          </div>
          <div class="p-col-2">
            <Avatar
              image="https://img.icons8.com/color/48/000000/javascript.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'javascript'"
            />
          </div>
        </div>
      </AccordionTab>
      <AccordionTab header="Portfolio Website">
        <p>
          This website, written in Vue.js Framework. PrimeVue library is used
          for various components and particles.js for the background
        </p>
        <a
          href="https://github.com/Ishan27g/myWebsite"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
        <div class="p-grid p-jc-center">
          <div class="p-col-2">
            <Avatar
              image="https://img.icons8.com/color/48/000000/vue-js.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Vue.js'"
            />
          </div>
          <div class="p-col-2">
            <Avatar
              image="https://img.icons8.com/dusk/48/000000/css3.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Css'"
            />
          </div>
        </div>
      </AccordionTab>
      <AccordionTab header="Micro Service Validator">
        <p>
          An application that validates basic configuration between dockerfiles,
          docker-compose and nginx. Two modes, static and runtime. Written to
          practice Golang as well as an out of scope requirement for a
          university project.
        </p>
        <a
          href="https://github.com/Ishan27g/microServiceValidator"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
        <div class="p-grid p-jc-center">
          <div class="p-col-2">
            <Avatar
              image="https://img.icons8.com/color/48/000000/golang.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Golang'"
            />
          </div>
          <div class="p-col-2">
            <Avatar
              image="https://img.icons8.com/officel/40/000000/console.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Shell Script'"
            />
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
  </div>
</template>

<script>
export default {
  name: "Side",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
#tabs {
  text-align: center;
}
#Side {
  text-align: left;
  min-width: 70%;
}
</style>